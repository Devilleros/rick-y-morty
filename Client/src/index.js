import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
