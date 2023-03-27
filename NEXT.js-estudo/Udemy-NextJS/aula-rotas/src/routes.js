import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Header from './components/Header'

const Routes = () => {
    return(
        <BrowserRouter>
            <Routes/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Routes path="/sobre" component={Sobre}/>
                <Routes path="/contato" component={Contato}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;