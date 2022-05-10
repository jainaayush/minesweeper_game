import { types }   from './types'
import {connectSocket, disconnectSocket} from '../redux/actions/channel'

const setupSocket = (dispatch : any) => {
	const socket = new WebSocket("wss://hometask.eg1236.com/game1/")

	socket.onopen = async () => {
		socket.send("help")
	}
	socket.onmessage = async (event) => {
		const data = event.data
        // try{
        //     dispatch(connectSocket(data))
        // }catch(e){
        //     dispatch(disconnectSocket("webSocket not connected"))
        // }
		switch ("1") {
			case "1":
				dispatch(connectSocket(data))
				break;
			// case "2":
			// 	dispatch(addUser(data.name))
			// 	break
			// case types.USERS_LIST:
			// 	dispatch(populateUsersList(data.users))
			// 	break
			default:
				break;
		}
	}
	return socket
}

export default setupSocket