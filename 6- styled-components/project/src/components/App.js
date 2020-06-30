import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/GlobalStyles'
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'

import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

function App() {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme))
        },
      }}
    >
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
