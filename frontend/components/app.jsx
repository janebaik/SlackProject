import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from './session/log_in.jsx';
import SignUp from './session/sign_up.jsx';
import Splash from './session/splash.jsx'
 
const App = (props) =>{
    // think about where to route to
    return(
        <div>
            {/* see if this is supoose to be exact */}
            <Route path='/login' component={LogIn}/>
            <Route path='/signup' component={SignUp} />
            <Route exact path="/" component={Splash}/>
        </div>
    )
}

export default App;