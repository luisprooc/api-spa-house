const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(port=4000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});