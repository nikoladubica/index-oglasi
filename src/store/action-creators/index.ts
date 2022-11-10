import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"
import axios from "axios"

export const fetchData = () => {
    return (dispatch: Dispatch<Action>) => {
        axios.get('https://www.index.hr/testni-zadatak/oglasi')
        .then(data => {
            dispatch({
                type: ActionType.GRAB,
                payload: {
                    page: 1,
                    data: Object.assign({}, data.data)
                }
            })
        })
    }
}

export const filterData = (data: { page: number, data: {} }, filters: {}[], page: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER,
            payload: {
                page: data.page,
                data: Object.assign({}, Object.values(data.data).filter((item: any) => filters.every((filter: any) => item[filter.key] === filter.value)))
            }
        })
    }
}

export const setFilters = (filter: { key: string, value: string }) => {
    return (dispatch: Dispatch<Action>) => {
            dispatch({
            type: ActionType.SET_FILTERS,
            payload: filter
        })
    }
}
