const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev')); // Logging requests
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Utility function to extract inputs from query, params, or body
function getInputs(req) {
    const a = parseFloat(req.query.a || req.params.a || req.body.a);
    const b = parseFloat(req.query.b || req.params.b || req.body.b);
    return { a, b };
}

// Calculator router
const calculatorRouter = express.Router();

calculatorRouter.get('/addition/:a?/:b?', (req, res) => {
    const { a, b } = getInputs(req);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided.' });
    }
    res.json({ results: a + b });
});

calculatorRouter.get('/substraction/:a?/:b?', (req, res) => {
    const { a, b } = getInputs(req);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided.' });
    }
    res.json({ results: a - b });
});

calculatorRouter.get('/multiplication/:a?/:b?', (req, res) => {
    const { a, b } = getInputs(req);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided.' });
    }
    res.json({ results: a * b });
});

calculatorRouter.get('/division/:a?/:b?', (req, res) => {
    const { a, b } = getInputs(req);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided.' });
    }
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed.' });
    }
    res.json({ results: a / b });
});

calculatorRouter.get('/modulus/:a?/:b?', (req, res) => {
    const { a, b } = getInputs(req);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided.' });
    }
    res.json({ results: a % b });
});

// Use the calculator router
app.use('/', calculatorRouter);

// Start the server
app.listen(port, () => {
    console.log(`Calculator API is running at http://localhost:${port}`);
});

