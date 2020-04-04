import React from 'react'
import { Link } from 'react-router-dom'

const SubmitQuestion = () => {
  return (
    <main className="submit-question-hero">
      <h1 className="pageheader">
        {' '}
        Ask our development community any coding question!
      </h1>
      <input
        className="searchbox"
        type="text"
        placeholder="How can your community help you today?"
      />
    </main>
  )
}

export default SubmitQuestion
