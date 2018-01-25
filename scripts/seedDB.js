const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytReact",
  {
    useMongoClient: true
  }
);


const nytSeed = [
  {
    title: "PlaceHolder",
 	date: new Date(Date.now()),
 	url: "www.yahoo.com"
  },
  {
    title: "Lord of the Flies",
    date: new Date(Date.now()),
   	url: "www.coinmarketcap.com"
  }];

  db.nytArticles
  	.remove({})
  	.then(() => db.nytArticles.collection.insertMany(nytSeed))
  	.then(data =>{
  		console.log(data.insertedIds.length + " records inserted!");
  		process.exit(0);
  })
  	.catch(err => {
  		console.log(err);
  		process.exit(1);
  	});