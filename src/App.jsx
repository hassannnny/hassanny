import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Row, Col, Nav, NavLink, NavbarBrand } from 'reactstrap'
import miLogo from './assets/miLogo.png'


function App() {
  const [count, setCount] = useState(0)

  return (

    <Container>

      <Row style={{height: '10vh', width: '100vw'}}>
        <Nav style={{color: 'white', margin: 0, paddingTop: '2vh'}}>
          <NavbarBrand style={{paddingRight: '10vw', paddingLeft: '5vw', fontWeight: 'bolder', fontSize: 'large'}}>portfolio</NavbarBrand>
          <NavLink style={{paddingRight: '5vw'}}>Resume</NavLink>
          <NavLink style={{paddingRight: '5vw'}}>Work</NavLink>
          <NavLink style={{paddingRight: '5vw'}}>Contact</NavLink>
        </Nav>
      </Row>
      



      <Row style={{display: 'inline-flex', height: '90vh', width: '100vw'}}>
        <Col style={{height: '100%', width: '50vw', textAlign: 'center', alignContent: 'center', color: 'white'}}>
          <h1>Liaquat</h1>
          <h1>Hassan</h1>
          <h1>Javed</h1>
        </Col>
        <Col style={{height: '100%', width: '50vw', textAlign: 'center', alignContent: 'center'}}>
          <img src={miLogo} height={400} />
        </Col>
      </Row>
    </Container>
    
  )
}

export default App
