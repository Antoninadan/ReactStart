const express = require('express');

const app = express();

const port = process.env.PORT || 9005;

const emails = [{
    id: 1,
    topic: 'Email 1'
}, {
    id: 2,
    topic: 'Email 2'
}];

app.get('/emails', (req, res) => {
    res.send(emails);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})