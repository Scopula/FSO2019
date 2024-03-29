import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  // hvi = Highest voted index
  const [hvi, setHvi] = useState(0)


  const randNum = () => {
      return Math.floor(Math.random()*6)
  }

  const vote = (anecdote) => {
    // Vote
    points[anecdote] += 1
    setPoints(points)

    // Update hvi
    setHvi(points.indexOf(Math.max(...points)))
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <button onClick={() => setSelected(randNum())}>next anecdote</button>
        <button onClick={() => vote(selected)}>vote</button>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[hvi]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)