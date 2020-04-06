import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
          placeholder="Search for a question"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={searchForQuestion}>Search</button>
      </section>
      <section>
        <p className="questionsTagged">Questions Tagged [{searchTerm}]</p>
      </section>
      <section className="howToFilter">
        <p>Newest</p>
        <p>Active</p>
        <p>More</p>
        <button>Filter</button>
      </section>

      {results.map(question => {
        const linkToAnswers = `/questions/${question.id}/answers`

        return (
          <>
            <hr />
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
                  <>
                    <li>
                      <Link to={linkToAnswers} className="questionName">
                        {question.name}
                      </Link>
                      <p className="questionDescription">
                        {question.description}
                      </p>
                      <p className="questionDate">{question.createdAt}</p>
                    </li>
                  </>
                </ul>
              </section>
            </section>
          </>
        )
      })}
    </>
  )
}

export default SearchPage
