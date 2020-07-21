const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000


// Define middleware here
app.use(express.json())
app.use("/files", express.static(path.resolve(__dirname, "..", "files")))

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

// Connect to the Mongo DB
try {
	mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booklist",{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

// Start the API server
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`)
})
