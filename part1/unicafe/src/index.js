import React, { useState, Fragment } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, oc}) => {
  return (
    <Fragment>
    <button onClick={oc}>{text}</button>
    </Fragment>
  )
}

const Statistic = ({text, value}) => {
  return (
    <Fragment>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </Fragment>
  )
}

const Statistics = ({good, neutral, bad}) => {
    if (good+neutral+bad > 0) {
      return (
        <Fragment>
          <table>
            <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good+neutral+bad} />
          <Statistic text="average" value={(good+bad*-1) / (good+bad+neutral)} />
          <Statistic text="positive" value={(good / (good+bad+neutral)) * 100 + " %"} />
            </tbody>
          </table>
        </Fragment>
        )
    } else {
      return (
        <Fragment>
          <p>No feedback given</p>
        </Fragment>
      )
    }
    
  }


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
        <h1>give feedback</h1>
        <Button text="good" oc={() => {setGood(good+1)}} />
        <Button text="neutral" oc={() => {setNeutral(neutral+1)}} />
        <Button text="bad" oc={() => {setBad(bad+1)}} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)