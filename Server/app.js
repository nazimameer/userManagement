const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();
const  mongoose = require('mongoose')
dotenv.config()
mongoose.connect(process.env.MONGO_CONNECTION)
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const apiRoutes = require('./routes/routes')

app.use('/backend/api',apiRoutes)


const port = process.env.Port_Number || 8000;


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });