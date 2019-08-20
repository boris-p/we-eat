import restaurants, {initialState} from './restaurants'
import {TEST_ACTION} from "../actions/restaurantActions";

describe('restaurants reducer', () => {
    it('should handle initial state', () => {
        expect(
            restaurants(undefined, {})
        ).toEqual(initialState)
    })

    it('should handle TEST_ACTION', () => {
        const exampleText = 'hello there stranger'
        expect(
            restaurants(initialState, {
                type: TEST_ACTION,
                text: exampleText,
            })
        ).toEqual({text: exampleText}
        )
    })
})
