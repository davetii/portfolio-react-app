import React from 'react'
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} activeClassName="is-active"/>
                <Route exact path="/portfolio" component={Portfolio} activeClassName="is-active"/>
                <Route path="/portfolio/:id" component={PortfolioItem} activeClassName="is-active"/>
                <Route path="/contact" component={Contact} activeClassName="is-active"/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;