
import Auth from 'core/pages/Auth';
import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './core/components/NavBar';
import Admin from './core/pages/Admin';
import Catalog from './core/pages/Catalog';
import ProductDetails from './core/pages/Catalog/components/ProductDetails';
import Home from './core/pages/Home';
import history from './core/utils/history'

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/products' exact>
                <Catalog />
            </Route>
            <Route path='/products/:productId'>
                <ProductDetails/>
            </Route>
            <Redirect from='/auth' to ='/auth/login' exact/>
            <Route path='/auth'>
                <Auth/>
            </Route>
            <Redirect from='/admin' to ='/admin/products' exact/>
            <Route path='/admin'>
                <Admin />
            </Route>
        </Switch>
    </Router>
);

export default Routes;