const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient; 
const parser = require('body-parser');
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');


app.use(parser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db('hotel')
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
})
.catch(console.err);


app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});
