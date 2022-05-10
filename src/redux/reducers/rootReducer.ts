import { combineReducers } from "redux";
import messages from "./channelReducer"
const rootReducer = combineReducers({
    messages,
})

export default rootReducer;