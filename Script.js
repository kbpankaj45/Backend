const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/', (req, res) => {
    res.render("index", { Name: "pankaj Kumar" })
});

app.get('/message/:username', (req, res) => {
    res.send(`Good Evening ${req.params.username}`)
});

app.use(function errorHandler(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}
);
