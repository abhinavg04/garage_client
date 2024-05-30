import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
<Navbar className="bg-dark">
        <Container>
            <Link to={'/home'} style={{textDecoration:'none'}}>
                <Navbar.Brand href="#home" className='text-light'>
                    <i className="fa-solid fa-car" style={{color: "#f91706",}} />
                    Garage-Guru
                </Navbar.Brand>
          </Link>
          
        </Container>
      </Navbar>  )
}

export default Header