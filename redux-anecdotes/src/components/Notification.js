import React from 'react'
// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

const Notification = (props) => {
  // const notification = useSelector(state => state.notification)
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    heigth: '2em'
  }

  let hidden = {
    opacity: 0
  }

  return (
    <div style={props.notification.show ? style : hidden}>
      {props.notification.message}
    </div>
  
  )
}

const mapStateToProps = (state) => {
  return{
    notification: state.notification
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications

// export default Notification