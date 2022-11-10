import { ActionType } from '../action-types/index'
import { Action } from '../actions'

const initialData: { page: number, data: {} } = {
    page: 1, 
    data: {}
}

const reducer = (state: any = initialData, action: Action): {} => {
    switch (action.type){
        case ActionType.GRAB:
            return {
                page: 1,
                data: action.payload.data
            }
        default:
            return state
    }
}

export default reducer