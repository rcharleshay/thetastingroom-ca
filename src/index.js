import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'redux/store'
import Routes from 'routes/router'
import GlobalStyle from 'assets/styles/GlobalStyle.styled'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
