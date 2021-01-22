import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './session/log_in_container';
import SignUp from './session/sign_up_container';
import Splash from './session/splash_container'
// import Central from './central/central_container'
 
const App = (props) =>{
    // think about where to route to
    return(
        <div>
            <Switch>
                <Route path='/login' component={LogIn}/>
                <Route path='/signup' component={SignUp}/>
                <Route exact path="/" component={Splash}/>
            </Switch>
        </div>
    )
}

export default App;