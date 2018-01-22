import React, {Component} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";


class Articles extends Component {
  state = {
 	number:  1
  };



 

  render() {

    return (
      <div>
         <Header/>
         <Search/>
         <Footer/>
      </div>
    );
  }
}

export default Articles;
