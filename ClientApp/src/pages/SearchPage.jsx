import React from 'react'

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
      </section>
      <section>
        <button className="filterButton">Filter</button>
      </section>

      <section>
        <p>#</p>
        <p>Votes</p>
        <p>#</p>
        <p>Answers</p>
      </section>
      <section>
        <p>Question</p>
        <p>Description of question</p>
        <p>Asked x mins ago</p>
      </section>
    </>
  )
}

export default SearchPage
