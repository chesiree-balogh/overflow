import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

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

  const addAnswers = async event => {
    event.preventDefault()
    const resp = await axios.post(`api/questions/${questionId}/answers`, {
      description: answers,
    })
    getQuestionDetails()
  }

  return (
    <>
      <section className="renderQuestion">
        <p className="questionName">{question.name}</p>
        <p className="questionDescription">{question.description}</p>
        <p className="questionDate">{question.createdAt}</p>
      </section>

      {question.answers.map(answers => {
        return (
          <>
            <hr />
            <section className="answerBox">
              <section className="left">
                <button className="votingThumbs">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button className="votingThumbs">
                  <FontAwesomeIcon icon={faThumbsDown} />
                </button>
              </section>
              <section className="rightAnswers">
                <ul>
                  <li className="renderAnswer">
                    <p className="answerDescription">{answers.description}</p>
                    <p className="answerDate">{answers.answeredAt}</p>
                  </li>
                </ul>
              </section>
            </section>
          </>
        )
      })}
      <hr />
      <section>
        <form className="answerQuestion" onSubmit={addAnswers}>
          <label>Do you want to answer this question?</label>
          <textarea
            placeholder="Answer here"
            value={answers}
            onChange={e => setAnswers(e.target.value)}
          ></textarea>
          <button>Submit</button>
        </form>
      </section>
      <footer className="answerFooter">
        Thank you for contributing to our coding community at Suncoast Overflow!
      </footer>
    </>
  )
}

export default QuestionDetailsPage
