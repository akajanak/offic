import { useState } from 'react'
import Button from './Button'
import Rating from './Rating'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAvg] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  // const [count, setCount] = useState({
  //   good : 0,
  //   neutral : 0,
  //   bad : 0,
  // })
  console.log(good, neutral, bad);

  return (
    <table>
      <tbody>
      <tr>
        <th>
          Give Feedback
        </th>
      </tr>
      <tr>
        <td>
        <Button text="good" onClick = {setGood} valuz = {good}/>
        <Button text="neutral" onClick = {setNeutral} valuz = {neutral}/>
        <Button text="bad" onClick = {setBad} valuz = {bad}/>
        </td>
      </tr>
      <tr>
        <th>
          Statistics
        </th>
      </tr>
      <tr>
        <td>
        <Rating text="good:" counter = {good}/>
        <Rating text="neutral:" counter = {neutral}/>
        <Rating text="bad:" counter = {bad} />
        <StatisticLine text="all:" counter = {all} />
        <StatisticLine text="average:" counter = {average} />
        <StatisticLine text="positive:" counter = {positive} />
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default App