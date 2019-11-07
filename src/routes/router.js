import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Landing from '../views/Landing/Landing'

function router() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  )
}

export default withRouter(router)
