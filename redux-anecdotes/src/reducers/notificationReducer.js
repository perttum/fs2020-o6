const initialSate = {
  message: 'Pah',
  show: false
}

const notificationReducer = (state = initialSate, action) =>{
  switch(action.type){
    case 'SHOW':
      let newState = {
        message: action.message,
        show: true
      }

      return newState
    case 'HIDE':
      let hideState = {...state}
      hideState.show = false
      return hideState
    default: return state
  }
}

let timeOut
export const notificate = (msg, delay) => {
  return dispatch => {
    dispatch({message: msg,
      type: 'SHOW'})
    
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      dispatch({
        type: 'HIDE'})
    }, Number(delay) * 2000)
  }
}

export default notificationReducer