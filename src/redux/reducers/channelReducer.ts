import { types  } from "../types"
const InitialState ={
    data : "",
    
}
const messages = (state = InitialState, action : any) => {
	switch (action.type) {
		case types.CHANNEL_CONNECT:
            return{...state, data : action.data}
		case types.CHANNEL_DISCONNECT:
            return{...state, data : action.payload}
		default:
			return state
	}
}

export default messages