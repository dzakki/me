const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');
const port = 80;
app.use(express.static(publicPath));
app.get('*', (_, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
    console.log('Server is up!');
});