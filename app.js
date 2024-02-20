const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people');
        const data = response.data;
        let out = "<style>h1 { color: blue; } p { color: red; }</style>";
        out += "<h1>People:</h1>";
        data.results.forEach(item => {
            out += "<p>" + item.name + "</p>";
        });
        res.send(out);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

app.get('/films', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/films');
        const data = response.data;
        let out = "<style>h1 { color: green; } p { color: orange; }</style>";
        out += "<h1>Films:</h1>";
        data.results.forEach(item => {
            out += "<p>" + item.title + "</p>";
        });
        res.send(out);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
});

// Serve React views
app.use(express.static(path.join(__dirname, 'src')));

// For any other route, serve React index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
