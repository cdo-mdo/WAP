// Import required modules
const express = require('express');
const { LocalStorage } = require('node-localstorage');

// Initialize Express app
const app = express();
const port = 3000;

// Initialize node-localstorage
const appLocalStorage = new LocalStorage('./data');
const STATE_KEY = 'numbers';

// Initialize state in appLocalStorage if not present
if (!appLocalStorage.getItem(STATE_KEY)) {
    appLocalStorage.setItem(STATE_KEY, JSON.stringify([]));
}

// Utility function to get and set state
function getState() {
    return JSON.parse(appLocalStorage.getItem(STATE_KEY));
}

function setState(state) {
    appLocalStorage.setItem(STATE_KEY, JSON.stringify(state));
}

// Routes

// POST /numbers/:n - Add a number to the state
app.post('/numbers/:n', (req, res) => {
    const n = parseFloat(req.params.n);
    if (isNaN(n)) {
        return res.status(400).json({ error: 'Invalid number provided.' });
    }
    const state = getState();
    state.push(n);
    setState(state);
    res.json({ results:state });
});

// GET /numbers/:index - Get number at specified index
app.get('/numbers/:index', (req, res) => {
    const index = parseInt(req.param.index);
    const state = getState();
    if (isNaN(index) || (index < 0) || (index >= state.length)) {
        return res.status(404).json({ error: 'Index out of range.' });
    }
    res.json({ results: state[index] })
});

// DELETE /numbers/:index/:n - update number at specified index
app.put('/numbers/:index/:n', (req, res) => {
    const index = parseInt(req.params.index);
    const n = parseFloat(req.params.n);
    const state = getState();
    if (isNaN(index) || index < 0 || index >= state.length) {
        return res.status(404).json({ index: 'Index out of range.' });
    }
    state.splice(index, 1);
    setState(state);
    res.json({ result: state })
});

// PUT /numbers/:index/:n - Update number at specified index
app.put('/numbers/:index/:n', (req, res) => {
    const index = parseInt(req.param.index);
    const n = parseFloat(req.param.n);
    const state = getState();
    if (isNaN(index) || index < 0 || index >= state.length) {
        return res.status(404).json({ error: 'Index out of range.' });
    }
    if (isNaN(n)) {
        return res.status(404).json({ error: 'Invalid number provided.' });
    }
    state[index] = n;
    setState(state);
    res.json({ result: state });
});

// state the server
app.listen(port, () => {
    console.log(`Number API is running at http://localhost:${port}`);
});
