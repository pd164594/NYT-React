import React, {Component} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";
import Results from "../components/results"
import API from "../utils/API";

class Articles extends Component {

state = {
  articles =[],
  title: "",
  date: "",
  url: ""
};

componentDidMount(){

};

loadArticles = () => {
  API.getArticles()
    .then(res =>
      this.setState({article: res.data, title:"", date:"",url:""})
      )}


 

  render() {

    return (
      <div>
         <Header/>
         <Search/>
         <Results>
          <h1>
            {this.state.article.title} published on {this.state.article.date}
          </h1>
         </Results>
         <Footer/>
      </div>
    );
  }
}

export default Articles;
