import React, { useState } from 'react'
import axios from 'axios'
import QuestionBox from '../components/QuestionBox'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const searchForQuestion = async () => {
    const resp = await axios.get(
      `/api/search/questions?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
  }
  return (
    <>
      <section className="searchArea">
        <p>Results for [{searchTerm}]</p>
        <input
          type="text"
          placeholder="Ask a question"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={searchForQuestion}>Search</button>
      </section>
      <section>
        <p className="questionsTagged">Questions Tagged [{searchTerm}]</p>
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
