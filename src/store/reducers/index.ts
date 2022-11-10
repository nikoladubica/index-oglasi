import { combineReducers } from "redux";
import originalReducer from "./originalReducer"
import dataReducer from "./dataReducer"
import filterReducer from "./filterReducer"


const reducers = combineReducers({
    original: originalReducer,
    data: dataReducer,
    filters: filterReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>