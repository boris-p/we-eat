export enum RequestMethod {
  POST = "POST",
  GET = "GET",
  PATCH = "PATCH",
  DELETE = "DELETE"
}
export interface RequestOptions {
  method: RequestMethod;
  body?: {};
  headers?: {};
}
export function requestOptions(
  method: RequestMethod = RequestMethod.GET,
  body?: {},
  headers?: {}
): RequestOptions {
  const options: RequestOptions = {
    method,
  };
  if (body) {
    options.body = body;
  }
  if (headers) {
    options.headers = headers;
  }
  return options;
}
