import { ActionType } from "../action-types/index"
import { Action } from "../actions"

const initialData: { key: string, value: string }[] = []

const reducer = (state: { key: string, value: string }[] = initialData, action: Action): {} => {
    switch (action.type){
        case ActionType.SET_FILTERS:
            {
                let index: any;

                state.forEach(obj => {
                    if (obj.key === action.payload.key) {
                        index = state.indexOf(obj)
                    } 
                }) 

                if (index > -1) state.splice(index, 1)

                if (action.payload.value !== '') return [...state, action.payload]
                else return [...state]
                
            }
        default:
            return state
    }
}

export default reducer