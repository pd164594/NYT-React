import React from "react";
import Article from "./pages/article"


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const App = () =>
  <div>
    <Article/>
  </div>


  // <Router>

      // <Switch>
        // <Route path="/home" exact component={Books}/>
        // <Route path="/books" exact component={Detail}/>
        // <Route path="/" exact component={Books}/>

    
      // </Switch>

  // </Router>


export default App;




