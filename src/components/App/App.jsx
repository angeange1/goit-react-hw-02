import { useState, useEffect } from 'react'
import '../App/App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'


function App() {
  const [count, setCount] = useState(() => {

    const savedCount = localStorage.getItem("saved-feedback");
    // console.log(savedCount)
    if (savedCount !== null) {
    return JSON.parse(savedCount);
    }
    
	return {
	good: 0,
	neutral: 0,
	bad: 0
  }
})

  useEffect(() => {
    // console.log(`${JSON.stringify(count)}`);
    localStorage.setItem("saved-feedback", JSON.stringify(count));
  }, [count])
  
  const updateFeedback = feedbackType => {
    setCount({...count,
    [feedbackType]: count[feedbackType] + 1})
  }
  
  const resetFeedback = () => { setCount({ good: 0, neutral: 0, bad: 0 })}

  const totalFeedback = count.good + count.neutral + count.bad
  console.log(totalFeedback);

  const positiveFeedback = Math.round((count.good / totalFeedback) * 100)

  return (
    <>
      <Description />

      <Options buttonOption="Good" clickHandler={updateFeedback} feedbackType="good" />
      <Options buttonOption="Neutral" clickHandler={updateFeedback} feedbackType="neutral" />
      <Options buttonOption="Bad" clickHandler={updateFeedback} feedbackType="bad" />
      {totalFeedback > 0 &&
      <Options buttonOption="Reset" clickHandler={resetFeedback} />}

      {totalFeedback > 0 ? (
        <>
      <Feedback feedbackVariant="Good: " feedbackResult={count.good} />      
      <Feedback feedbackVariant="Neutral: " feedbackResult={count.neutral} />      
      <Feedback feedbackVariant="Bad: " feedbackResult={count.bad}/>
      <Feedback feedbackVariant="Total: " feedbackResult={totalFeedback}/>
      <Feedback feedbackVariant="Positive: " feedbackResult={positiveFeedback + "%"}/>
          </>
        ) : <Notification />}
    </>
  )
}

export default App
