import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAnecdotes()
    .then(anecdotes => dispatch(initAnecdotes(anecdotes)))
  }, [dispatch])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm/>
      <Notification/>
      <Filter />
      <AnecdoteList />
    </div>
  )
}

export default App