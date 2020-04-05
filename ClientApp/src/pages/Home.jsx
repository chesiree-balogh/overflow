import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main className="hero">
        <h3>An open community platform.</h3>
        <h3>Designed to help anyone that</h3>
        <h3>codes.</h3>
      </main>
      <section className="askAQuestionButton">
        <Link to="/submit-question" className="call-to-action">
          Ask a Question
        </Link>
      </section>
      <section class="howItWorks">
        <h2>How it Works</h2>
        <section class="howItWorksList">
          <h4>Ask a Question</h4>
        </section>
        <section class="howItWorksList">
          <h4>Vote on Everything</h4>
        </section>
        <section class="howItWorksList">
          <h4>Answer Questions</h4>
        </section>
        <section class="howItWorksList">
          <h4>Tag your Question</h4>
        </section>
        <section class="howItWorksList">
          <h4>Accept an Answer</h4>
        </section>
        <section class="howItWorksList">
          <h4>Get Recognized</h4>
        </section>
      </section>
      <footer>
        <section>A community that learns together grows together!!!</section>
      </footer>
    </>
  )
}
