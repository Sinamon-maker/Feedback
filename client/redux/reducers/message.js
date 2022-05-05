import axios from 'axios'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

const initialState = {
  messageObject: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messageObject: action.message,
      }
    }
    case RECEIVE_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state
  }
}

export function sendMessage(message) {
  return { type: RECEIVE_MESSAGE, message }
}

export async function receiveMessageRequested(messageObject) {
  const result = await axios
    .post('http://localhost:3000/messages', messageObject)
    .then(({ data }) => {
      console.log('data', data)
      return data
    })
  console.log('result', result)
  return result
}
