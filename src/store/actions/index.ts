import { ActionType } from "../action-types/index"

interface GrabAction {
    type: ActionType.GRAB,
    payload: any
}

interface FilterAction {
    type: ActionType.FILTER,
    payload: any
}

interface SetFiltersAction {
    type: ActionType.SET_FILTERS,
    payload: { key: string, value: string }
}

export type Action = GrabAction | FilterAction | SetFiltersAction;