import React, {Component} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Search from "../components/search";
import Results from "../components/results"
import API from "../utils/API";

class Articles extends Component {

state = {
  articles: []
};

componentDidMount(){
  this.loadArticles();
};

loadArticles = () => {
  API.getArticles()
    .then(res =>
      this.setState({articles: res.data, title:"", date:"",url:""})
      )}


 

  render() {
    let articles = this.state.articles.map(item => <p>Title: {item.title}</p>);

    return (
      <div>
         <Header/>
         <Search/>
         <Results>
          <h1>
            {
              this.state.articles && articles
            }
          </h1>
         </Results>
         <Footer/>
      </div>
    );
  }
}

export default Articles;
