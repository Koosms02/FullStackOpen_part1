import { useState } from 'react'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const Statistics = (props) => {
    const { good, bad, neutral } = props;

    const StatisticLine = ({ text, value }) => {
      return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      )
    }

    if (good !== 0 || bad !== 0 || neutral != 0) {
      return (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + neutral + bad} />
            <StatisticLine text="average" value={(1 * good + 0 * neutral + (-1 * bad)) / (good + neutral + bad)} />
            <StatisticLine text="positive" value={good * 100 / (good + neutral + bad) + ' %'} />
          </tbody>
        </table>
      )
    } else {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <h1>Statistics</h1>
      <Statistics header={"Statistics"} good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App
