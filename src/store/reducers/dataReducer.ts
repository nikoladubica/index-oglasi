import { ActionType } from '../action-types/index'
import { Action } from '../actions'

const noOfItems = 8
const initialData: { page: number, data: {} } = {
    page: 1, 
    data: {}
}

const reducer = (state: any = initialData, action: Action): {} => {
    switch (action.type){
        case ActionType.FILTER:
            return {
                page: action.payload.page,
                data: Object.assign({}, Object.values(action.payload.data).slice(0, noOfItems * action.payload.page))
            }
        default:
            return state
    }
}

export default reducer