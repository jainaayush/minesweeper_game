import { types } from "../types"

export const connectSocket = (data : any) => (
    {
	type: types.CHANNEL_CONNECT,
	data: data
})

export const disconnectSocket = (data : any) => ({
	type: types.CHANNEL_DISCONNECT,
	data : data
})






