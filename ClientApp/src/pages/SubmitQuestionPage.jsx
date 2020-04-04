import React, { PureComponent } from 'react'
import axios from 'axios'
import { API_URL } from '../const'

class SubmitQuestion extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      questionTitle: '',
      questionDescription: '',
    }
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
      .post(`${API_URL}/api/Questions`, {
        name: this.state.questionTitle,
        description: this.state.questionDescription,
      })
      .then(response => {
        debugger
        console.log(response)
      })
      .catch(error => {
        debugger
        console.log(error)
      })
  }

  render() {
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
            onChange={this.handleChange}
          />
          <textarea
            id="description-field"
            placeholder="Question Description"
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </main>
    )
  }
}

export default SubmitQuestion
