import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialState = 0;

const page: number = 1;
const initialData: {} = {}

const reducer = (state: {} = initialData, action: Action): {} => {
    switch (action.type){
        case ActionType.GRAB:
            return action.payload
        default:
            return state
    }
}

export default reducer