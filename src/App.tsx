import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/views/Home';
import Details from './components/views/Details';


function App() {

  return (
    <Container fluid>
      <Router>
        <Route path="/" exact render={(routerProps) =>
          <Home {...routerProps}/>}>
        </Route>
        
        <Route path="/details" exact render={(routerProps) =>
          <Details {...routerProps}/>}>
        </Route>
  
      </Router>
    </Container>
  )
}

export default App
