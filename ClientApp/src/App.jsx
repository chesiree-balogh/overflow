import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import HelloWorld from './pages/_template/HelloWorld'
import HeyWorld from './pages/_template/HeyWorld'
import NotFound from './pages/NotFound'
import SubmitQuestionPage from './pages/SubmitQuestionPage'
import SearchPage from './pages/SearchPage'
import QuestionDetailsPage from './pages/QuestionDetailsPage'
import './custom.scss'
export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/submit-question" component={SubmitQuestionPage} />
          <Route exact path="/counter" component={HelloWorld} />
          <Route exact path="/typescript" component={HeyWorld} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/questions/:questionId/answers"
            component={QuestionDetailsPage}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    )
  }
}
