import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <main className="hero">
        <section>
          <h3>An open community platform.</h3>
          <h3>Designed to help anyone that</h3>
          <h3>codes.</h3>
        </section>
      </main>
      <section className="askAQuestionButton">
        <button>
          <Link to="/submit-question" className="call-to-action">
            Ask a Question
          </Link>
        </button>
      </section>
      {/* carousel testing text */}
      {/* /////////////////////////// */}
      {/* <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="active item">
            <p>spider pig loves pink donuts</p>
          </div>
          <div class="item">
            <p>hello the cow is here</p>
          </div>
          <div class="item">
            <p>over the rainbow is far away</p>
          </div>
        </div>

        <a class="carousel-control left" href="#myCarousel" data-slide="prev">
          &lsaquo;
        </a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next">
          &rsaquo;
        </a>
      </div> */}
      {/* /////////////////////////// */}

      <section class="howItWorks">
        <h2>How it Works</h2>
        {/* add a bootstrap carousel turn this list into carousel */}
        <container className="HIWCarousel">
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
        </container>
      </section>
      <footer>
        <section>A community that learns together, grows together!!!</section>
      </footer>
    </>
  )
}
