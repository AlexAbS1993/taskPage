import React from 'react'
import '../main'
import {Header} from './Header/Header'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {Home} from './Home/Home'
import { Ready } from './Ready/Ready'
import { Working } from './Working/Working'
import { Container } from 'react-bootstrap'

const App:React.FC = () => {
    return (
        <BrowserRouter>
                <Header />
                <Container>
                    <main>
                        <Route path='/' render={() => {return <Redirect to="/home"/>}} />
                        <Route path="/home" render={() => {return <Home />}}/>
                        <Route path="/ready" render={() => {return <Ready />}}/>
                        <Route path="/working" render={() => {return <Working />}}/>
                    </main>
                </Container>
        </BrowserRouter>
    )
}

export default App