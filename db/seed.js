const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const Present = require('../model/present');
const presents = require('./data');
const MONGO_URL = 'mongodb://127.0.0.1:27017/dear-santa'; 

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .then (() => {
      Present.create(presents)
  })
  .then(createdPresent => console.log(`Inserted ${createdPresent.length} present in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err))