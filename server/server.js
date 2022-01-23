const express = require('express');
const cors = require('cors')
const apiRouter = require('./routes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/inventory', apiRouter)

app.listen(process.env.PORT || '8080', () => {
    console.log(`Server is running on port: ${process.env.PORT || '8080'}`)
}); 