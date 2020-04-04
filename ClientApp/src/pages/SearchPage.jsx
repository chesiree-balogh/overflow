import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForQuestion = async () => {
    const resp = await axios.get(
      `/api/search/questions?searchTerm=${searchTerm}`
    )
    console.log(resp.data)
    setResults(resp.data)
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

      <hr></hr>
      <section className="questionBox">
        <section className="left">
          <button className="votingThumbs">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="votingThumbs">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </section>
        <section className="right">
          <ul>
            {results.map(question => {
              return <li>{question.name}</li>
            })}
          </ul>
        </section>
      </section>
      <hr></hr>
    </>
  )
}

export default SearchPage
