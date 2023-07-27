import React from 'react'
import Headers from './components/Headers'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
    <Headers/>
    <Container className='my-2'>
      <Outlet/>
    </Container>
    </>
  )
}

export default App