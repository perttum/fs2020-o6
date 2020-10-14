import React from 'react'
// import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificate } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  
  // const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const value = event.target.anecdote.value
    event.target.anecdote.value = ''
    
    props.createAnecdote(value)
    props.notificate('Created new anecdote: ' + value, 2)

    // dispatch(createAnecdote(value))
    // dispatch(notificate('Created new anecdote: ' + value, 2))
  }
  
  return(
    
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <div><input name="anecdote"/></div>
      <button>create</button>
    </form>
  )
}

// const mapStateToProps = (state) => {
//   return{
//     anecdotes: state.anecdotes
//   }
// }

const mapDispatchToProps = {
  createAnecdote,
  notificate
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm

// export default AnecdoteForm