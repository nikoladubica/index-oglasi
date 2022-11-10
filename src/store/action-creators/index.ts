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
    let filteredData: any[] = []
    let isCategorySet: boolean = false
    let isLocationSet: boolean = false

    if (filters.length != 0) {
        const categoryFilter: any[] = Object.values(data.data).filter((item: any) => filters.every((filter: any) => item[filter.key] === filter.value))
        let locationFilter: any[] = [];

        Object.values(data.data).forEach((item: any) => {
            filters.forEach((filter: any) => {
                if (filter.key === 'location') {
                    isLocationSet = true
                    console.log(item.title, filter.value)
                    if (item.title.toLowerCase().includes((filter.value).toLowerCase()))
                    locationFilter.push(item)
                } else if (filter.key === 'category') 
                    isCategorySet = true
                // area, price, roomsFrom, roomsTo
            })
        })

        let filteredData1: any;

        if (isCategorySet && isLocationSet) filteredData1 = categoryFilter.filter(value => locationFilter.includes(value));
        else if (isCategorySet) filteredData1 = categoryFilter
        else if (isLocationSet) filteredData1 = locationFilter

        filteredData = filteredData1


        // console.log(Object.values(data.data))

        // if (filteredData.length === 0) filteredData = data.data
    } else {
        filteredData = Object.values(data.data)
    }

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.FILTER,
            payload: {
                page: page,
                data: Object.assign({}, filteredData)
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
