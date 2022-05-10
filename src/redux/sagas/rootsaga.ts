// import {all} from 'redux-saga/effects';
// import {startStopChannel} from "../reducers/channelReducer"

// export default function* rootSaga() {
//   yield all([
//     startStopChannel(),
//   ]);
// }
import { takeEvery } from 'redux-saga/effects'
import {types} from '../types'

const handleNewMessage = function* handleNewMessage(params : any) {
	yield takeEvery(types.CHANNEL_CONNECT, (action) => {
		params.socket.send(action)
	})
}

export default handleNewMessage