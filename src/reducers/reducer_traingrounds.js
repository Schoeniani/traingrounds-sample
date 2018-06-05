import { FETCH_TRAINGROUNDS, DELETE_TRAINGROUND, FETCH_ONE_TRAINGROUND, 
    CREATE_TRAINGROUND, EDIT_TRAINGROUND } from '../actions/index_actions'

export default function (state={ map: {} }, action) {
    let mutableState = null
    let map = null
    let index = null

    switch (action.type) {
        case DELETE_TRAINGROUND:
            map = {...state.map}
            index = state.index.filter(item => item.id != action.payload)
            delete map[action.payload]
            return {...state, index, map}
        case FETCH_ONE_TRAINGROUND:
            map = {...state.map}
            map[action.payload.id] = action.payload
            return { ...state, map }
        case FETCH_TRAINGROUNDS:
            return {
                ...state,
                index: action.payload
            }
        case CREATE_TRAINGROUND:
            map = {...state.map}
            map[action.payload.id] = action.payload

            return {
                ...state,
                index: (state.index || []).concat([action.payload]),
                map
            }
        case EDIT_TRAINGROUND:
            map = {...state.map}
            let mutableList = null
            map[action.payload.id] = {...map[action.payload.id], ...action.payload.values}
            if(state.index) {
                mutableList = state.index.slice()
                const itemIndex = mutableList.findIndex(element => {
                    return element.id == action.payload.id 
                })
                mutableList[itemIndex] = {...mutableList[itemIndex], ...action.payload.values}
            }
            return {
                ...state,
                index: mutableList, 
                map
            }
        default: 
            return state
    }
}