import React, { PureComponent } from 'react'
import axios from 'axios'

const INITIAL_STATE = {
  questionTitle: '',
  questionDescription: '',
  message: '',
}

class SubmitQuestion extends PureComponent {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
  }

  handleChange = e => {
    const id = e.target.id
    const value = e.target.value

    if (id === 'title-field') {
      this.setState(prevState => ({
        ...prevState,
        questionTitle: value,
      }))
    }

    if (id === 'description-field') {
      this.setState(prevState => ({
        ...prevState,
        questionDescription: value,
      }))
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    axios
      .post('/api/Questions', {
        name: this.state.questionTitle,
        description: this.state.questionDescription,
      })
      .then(response => {
        this.setState(prevState => ({
          ...INITIAL_STATE,
          message: 'Your question has been submitted!',
        }))
      })
      .catch(error => {
        this.setState(prevState => ({
          ...INITIAL_STATE,
          message: 'Whoops! There was an error. Please try again.',
        }))
      })
      .finally(() => {
        setTimeout(() => {
          this.setState(prevState => ({
            ...prevState,
            message: '',
          }))
        }, 1500)
      })
  }

  render() {
    const { message, questionDescription, questionTitle } = this.state
    return (
      <main className="submit-question-hero">
        <h1 className="pageheader">
          Ask our development community any coding question!
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="title-field"
            className="searchbox"
            type="text"
            placeholder="How can your community help you today?"
            value={questionTitle}
            onChange={this.handleChange}
          />
          <textarea
            id="description-field"
            placeholder="Question Description"
            value={questionDescription}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {message && <p>{message}</p>}
      </main>
    )
  }
}

export default SubmitQuestion
