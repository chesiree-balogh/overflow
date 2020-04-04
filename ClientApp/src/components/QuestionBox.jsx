import React from 'react'

const QuestionBox = () => {
  return (
    <>
      <hr></hr>
      <section className="questionBox">
        <section className="left">
          <p className="numberSymbol">#</p>
          <p className="votes">Votes</p>
          <p className="numberSymbol">#</p>
          <p className="votes">Answers</p>
        </section>
        <section className="right">
          <p className="question">Question</p>
          <p className="description">Description of question</p>
        </section>
      </section>
    </>
  )
}

export default QuestionBox
