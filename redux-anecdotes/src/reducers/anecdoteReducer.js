// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

//const initialState = anecdotesAtStart.map(asObject)

import anecdoteServices from '../services/anecdotes'

const reducer = (state = [], action) => {
  
  switch(action.type){
    case 'VOTE':
      const anecdote = state.find(a => a.id === action.data.id)
      
      const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state.map((a) => {
        return anecdote.id !== a.id ? a : updatedAnecdote
      })
    case 'CREATE':
      const newAnecdote = {
        content: action.data,
        votes: 0
      }
      const newAnecdotes = [...state, newAnecdote]
      
      
      return newAnecdotes

    case 'INIT_ANECDOTES':
      console.log('action data: ', action.data)
      
      return action.data
    default: return state
  }
}

export const vote = (id) => {
  return async dispatch => {
    const newVote = await anecdoteServices.vote(id)
    dispatch({
      type: 'VOTE',
      data: newVote
    })
  }
}

// export const vote = (id) => {
//   return{
//     type: 'VOTE',
//     data: {id}
//   }
// }

export const createAnecdote = (data) => {
  console.log('create data: ', data)
  
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNewAnecdote(data)
    dispatch({
      type: 'CREATE',
      data,
    })
  }
  
  
  // console.log('data: ', data)
  
  // return{
  //   type: 'CREATE',
  //   data,
  // }
}

// export const createAnecdote = (data) => {
//   console.log('data: ', data)
  
//   return{
//     type: 'CREATE',
//     data,
//   }
// }

export const initAnecdotes = (anecdotes) => {
  return{
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default reducer