import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import LogIn from './session/log_in_container';
import SignUp from './session/sign_up_container';
import Central from './central/central_container';
import Splash from './session/splash/splash';
import Features from './session/splash/features';
import Channels from './session/splash/channels'
import Customers from './session/splash/customers';
import Goals from './session/splash/goals';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../components/channel/modal'
 
const App = () =>{
    // think about where to route to
    return(
        <div>
            <Modal />
            <Switch>
                <AuthRoute path='/signin' component={LogIn}/>
                <AuthRoute path='/signup' component={SignUp}/>
                <ProtectedRoute path="/slack-me" component={Central} />

                <Route exact path="/" component={Splash}/>

                {/* nav-drop-down items (not sure if i need these but for placement I placed it here) */}
                <Route exact path='/features' component={Features}/>
                <Route expact path='/channels' component={Channels} />
                <Route exact path='/customers' component={Customers} />
                <Route exact path='/goals' component={Goals} />
                {/* ends */}
            </Switch>
        </div>
    )
}

export default App;