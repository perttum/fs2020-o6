import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAnecdotes = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNewAnecdote = async (content) => {
  const newAnecdote = {
    content,
    votes: 0
  }
  const res = await axios.post(baseUrl, newAnecdote)
  return res.data
}

const vote = async (id) => {
  const anecdotes = await getAnecdotes()
  const anecdoteToVote = anecdotes.find(a => a.id === id)
  const newVote = {
    ...anecdoteToVote,
    votes: anecdoteToVote.votes + 1

  }
  const res = await axios.put(`${baseUrl}/${id}`, newVote)
  
  return res.data
}

export default { getAnecdotes, createNewAnecdote, vote }