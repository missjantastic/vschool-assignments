const express = require('express');
const app = express();

app.use(express.json());

app.use("/bounties", require('./routes/bountyRouter.js'));





app.listen(8111, ()=> {
    console.log('App is listening on port 8111')
})