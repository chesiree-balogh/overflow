import React from 'react'
import QuestionBox from '../components/QuestionBox'

const SearchPage = () => {
  return (
    <>
      <section className="searchArea">
        <p>Results for [keyword]</p>
        <input type="text" placeholder="Ask a question"></input>
        <button>Search</button>
      </section>
      <section>
        <p className="questionsTagged">Questions Tagged [keyword]</p>
        <p># of questions</p>
      </section>
      <section className="howToFilter">
        <p>Newest</p>
        <p>Active</p>
        <p>More</p>
        <button>Filter</button>
      </section>

      <QuestionBox />
      <QuestionBox />
      <hr></hr>
    </>
  )
}

export default SearchPage
