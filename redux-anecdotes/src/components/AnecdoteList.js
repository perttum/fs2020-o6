import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notificate } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const voteAnecdote = (id) => {
    dispatch(vote(id))
    dispatch(notificate(`Voted! ${anecdotes.find(a => a.id === id).content}`, 2))
  }
  
  const sortedAnecdotes = [...anecdotes].sort((a, b) => (a.votes < b.votes) ? 1 : -1)
  console.log('sorted a: ', sortedAnecdotes)
  
  let displayAnecdotes = []
  if(sortedAnecdotes.length > 0 && sortedAnecdotes !== undefined){
    displayAnecdotes = sortedAnecdotes.filter(a => a.content.includes(filter))
  }
  

  return (
    <div>
    {displayAnecdotes.map(anecdote =>
      <div key={anecdote.id} >
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList