# Mongo / Mongoose demo

This is a small todo app setup to run locally (no mlab)


## Setup

1 - Install MongoDb - https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials  
2 - Run a local instance of mongodb by typing `mongod` on the terminal  
3 - Clone and npm install this repo  
4 - Run the application by doing `npm start`  


## Ports

Mongodb running on port 27017  
Express server running on port 3000  
(you could have a frontend running on port 8080 for instance)  

## Notes

- Use postman to explore the api - note the error messages on your console when something fails. You shouldn't need to restart the `express` server (`nodemon` does that for us) but you might need to cancel pending requests in postman.
- Connecting to a db will create it if it doesn't already exist.  
- `index.js` uses async/await syntax instead of callback or Promises (more on https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- `breakfast` folder contains the breakfast example for the Mongo/Mongoose lecture. Can be run with `npm run breakfast`
