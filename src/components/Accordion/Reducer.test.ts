import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('Collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect
    expect(newState.collapsed).toBe(true)
})


test('Reducer should throw Error because action type id incorrect', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    //expect
    expect(()=>{
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()
})