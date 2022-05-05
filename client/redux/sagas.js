import {takeEvery, put, call} from 'redux-saga/effects'
import { RECEIVE_MESSAGE, ADD_MESSAGE, RECEIVE_ERROR} from './reducers/message'

import { receiveMessageRequested} from './reducers/message'

export function* sagaWatcher(){
  yield takeEvery(RECEIVE_MESSAGE, sagaWorker)
}

function* sagaWorker(action){
  try {
    console.log('i am in saga',action.message)
    const messageReceived = yield call(receiveMessageRequested, action.message)

    yield put({ type: ADD_MESSAGE, messageReceived })

  } catch (error) {
console.log(error)
yield put({type: RECEIVE_ERROR, error})
  }

}