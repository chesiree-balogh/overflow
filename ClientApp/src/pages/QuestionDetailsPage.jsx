import React, { useState, useEffect } from 'react'
import axios from 'axios'

const QuestionDetailsPage = props => {
  const questionId = props.match.params.questionId
  const [question, setQuestion] = useState({ answers: [] })
  const [answers, setAnswers] = useState('')

  console.log(question)
  console.log(question.answers)

  const getQuestionDetails = async () => {
    const resp = await axios.get('api/questions/' + questionId)
    setQuestion(resp.data)
  }

  useEffect(() => {
    getQuestionDetails()
  }, [])

  const getAnswers = async () => {
    const resp = await axios.get(`api/questions/${questionId}/answers`)
    console.log(resp.data)
  }

  const addAnswers = async () => {
    const resp = await axios.post(`api/questions/${questionId}/answers`, {
      description: answers,
    })
    console.log(resp.data)
    setAnswers(resp.data)
  }

  return (
    <>
      <p>This is the question</p>
      <section>
        <button onClick={getAnswers}>I want to see answers!</button>
        <ul>
          {question.answers.map(answers => {
            return <li className="answerDescription">{answers.description}</li>
          })}
        </ul>
      </section>
      <section>
        <form className="answerQuestion">
          <label>Do you want to answer this question?</label>
          <textarea
            placeholder="Answer here"
            value={answers}
            onChange={e => setAnswers(e.target.value)}
          ></textarea>
          <button onClick={addAnswers}>Submit</button>
        </form>
      </section>
    </>
  )
}

export default QuestionDetailsPage
