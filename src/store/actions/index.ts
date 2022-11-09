import { ActionType } from "../action-types/index"

interface GrabAction {
    type: ActionType.GRAB,
    payload: {}
}

export type Action = GrabAction;