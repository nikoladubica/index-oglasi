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
    let isAreaSet: boolean = false
    let isPriceSet: boolean = false
    let isRoomsFromSet: boolean = false
    let isRoomsToSet: boolean = false

    if (filters.length != 0) {
        const categoryFilter: any = filters.filter((item: any) => item.key === 'category')[0]
        let categoryItems: any[] = []
        let locationItems: any[] = []
        let areaItems: any[] = []
        let priceItems: any[] = []
        let roomsFromItems: any[] = []
        let roomsToItems: any[] = []

        if (categoryFilter) categoryItems = Object.values(data.data).filter((item: any) => item[categoryFilter.key] == categoryFilter.value)

        Object.values(data.data).forEach((item: any) => {
            filters.forEach((filter: any) => {
                switch(filter.key) {
                    case 'location':
                        if (filter.value != '') isLocationSet = true
                        if (item.title.toLowerCase().includes((filter.value).toLowerCase())) locationItems.push(item)
                        break
                    case 'category':
                        isCategorySet = true
                        break
                    case 'area':
                        if (filter.value != '') isAreaSet = true
                        if (filter.value <= item.summary.area) areaItems.push(item)
                        break
                    case 'price':
                        if (filter.value != '') isPriceSet = true
                        if (filter.value >= item.price) priceItems.push(item)
                        break
                    case 'roomsFrom':
                        if (filter.value != '') isRoomsFromSet = true
                        if (filter.value <= item.summary.numberOfRooms) roomsFromItems.push(item)
                        break
                    case 'roomsTo':
                        if (filter.value != '') isRoomsToSet = true
                        if (filter.value >= item.summary.numberOfRooms) roomsToItems.push(item)
                        break
                    default:
                }
            })
        })

        let filteredData1: any
        let filteredData2: any
        let filteredData3: any

        // Filtering category and location
        if (isCategorySet && isLocationSet) filteredData1 = categoryItems.filter(value => locationItems.includes(value))
        else if (isCategorySet) filteredData1 = categoryItems
        else if (isLocationSet) filteredData1 = locationItems
        else filteredData1 = Object.values(data.data)

        // Filtering area and price
        if (isAreaSet && isPriceSet) filteredData2 = areaItems.filter(value => priceItems.includes(value))
        else if (isAreaSet) filteredData2 = areaItems
        else if (isPriceSet) filteredData2 = priceItems
        else filteredData2 = Object.values(data.data)

        // Filtering roomsFrom and roomsTo
        if (isRoomsFromSet && isRoomsToSet) filteredData3 = roomsFromItems.filter(value => roomsToItems.includes(value))
        else if (isRoomsFromSet) filteredData3 = roomsFromItems
        else if (isRoomsToSet) filteredData3 = roomsToItems
        else filteredData3 = Object.values(data.data)

        // Filtering all
        filteredData = filteredData1.filter((value: any) => filteredData2.includes(value))
        filteredData = filteredData.filter((value: any) => filteredData3.includes(value))
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
