import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const App = () =>
  // //<div>
  //   <Nav />
  //   <Books />
  // </div>
  <Router>

      <Switch>
        <Route path="/home" exact component={Books}/>
        <Route path="/books" exact component={Detail}/>
        <Route path="/" exact component={Books}/>

    
      </Switch>

  </Router>


export default App;




