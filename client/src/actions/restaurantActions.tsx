export const TEST_ACTION = 'SEND_MESSAGE';

interface ITestActionType {
    type: typeof TEST_ACTION,
    text:string
}
export const testAction = (text:string) => ({
    type: TEST_ACTION,
    text
});
export type RestaurantActionTypes = ITestActionType

