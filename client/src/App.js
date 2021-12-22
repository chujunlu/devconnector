import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'

import './App.css'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import { Routes } from './components/routing/Routes'


export function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route component={Routes} />
                    </Switch>
                </>
            </Router> 
        </Provider>
    )
}
