import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import { Routes } from './components/routing/Routes'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'

import './App.css'

const App = () => {
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
};
    
export default App;
