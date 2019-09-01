import { Middleware, MiddlewareAPI, Action, AnyAction } from "redux";

import { RequestOptions } from "../lib/fetchHelper";

type ApiCallDispatch = <T extends Action>(promise: Promise<T>) => Promise<T>;
export const CALL_API = "CALL_API";
export enum REQUEST_STATUS {
  NOT_LOADED = "NOT_LOADED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS"
}

interface CallApiOptions {
  url: string;
  options: RequestOptions;
}

export function apiCall() {
  const apiCallMiddleware: Middleware<ApiCallDispatch> = ({
    dispatch,
  }: MiddlewareAPI) => next => async <T extends Action>(action: AnyAction) => {
    if (action[CALL_API]) {
      const { url, requestOptions: options } = action[CALL_API];
      // define default headers for all requests
      // could do authentication and a bunch of other things here
      options.headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };
      // TODO - should handle request errors
      const res = await fetch(url, options);
      dispatch({
        type: action.type,
        status: REQUEST_STATUS.PENDING,
      });
      // we expect to always
      const resJson = await res.json();
      dispatch({
        type: action.type,
        status: REQUEST_STATUS.SUCCESS,
        response: resJson,
      });
    }
    return next(action);
  };

  return apiCallMiddleware;
}
