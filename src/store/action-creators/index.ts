import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import axios from "axios"

export const fetchData = () => {
    return (dispatch: Dispatch<Action>) => {
        axios.get('https://www.index.hr/testni-zadatak/oglasi')
        .then(data => {
            console.log('dispatch grab start')
            
            dispatch({
                type: ActionType.GRAB,
                payload: data.data
            })
        })
    }
}
