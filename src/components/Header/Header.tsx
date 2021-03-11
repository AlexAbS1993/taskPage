import React from 'react'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export const Header:React.FC = () => {
    return (
        <header className='header'>
            <Container>
                <nav>
                    <Navbar bg="primary" variant="dark" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar.Brand className="ml-4">Tasks</Navbar.Brand>
                                <Nav className="mr-auto navbar_my">
                                    <NavLink to="/home" activeClassName="nav_active">Задачи</NavLink>
                                    <NavLink to="/ready" activeClassName="nav_active">Выполненные</NavLink>
                                    <NavLink to="/working" activeClassName="nav_active">На доработке</NavLink>
                                </Nav>
                                <Nav className="ml-auto">
                                    <Button variant="danger"> Выйти </Button>
                                </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>
         </Container>
        </header>
    )
}