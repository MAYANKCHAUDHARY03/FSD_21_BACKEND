const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'requests.json');

app.use(express.json());
app.use(express.static('public'));

app.get('/api/requests', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        res.json(JSON.parse(data || '[]'));
    });
});

app.get('/api/requests/:id', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        const requests = JSON.parse(data || '[]');
        const reqItem = requests.find(r => r.id === req.params.id);
        if (reqItem) res.json(reqItem);
        else res.status(404).send('Not found');
    });
});

app.post('/api/requests', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        const requests = JSON.parse(data || '[]');
        const newReq = { ...req.body, id: Date.now().toString() };
        requests.push(newReq);
        fs.writeFile(DATA_FILE, JSON.stringify(requests), (err) => {
            if (err) return res.status(500).send('Error');
            res.status(201).json(newReq);
        });
    });
});

app.put('/api/requests/:id', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        let requests = JSON.parse(data || '[]');
        const index = requests.findIndex(r => r.id === req.params.id);
        if (index !== -1) {
            requests[index] = { ...requests[index], ...req.body, id: req.params.id };
            fs.writeFile(DATA_FILE, JSON.stringify(requests), (err) => {
                if (err) return res.status(500).send('Error');
                res.json(requests[index]);
            });
        } else {
            res.status(404).send('Not found');
        }
    });
});

app.delete('/api/requests/:id', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error');
        let requests = JSON.parse(data || '[]');
        requests = requests.filter(r => r.id !== req.params.id);
        fs.writeFile(DATA_FILE, JSON.stringify(requests), (err) => {
            if (err) return res.status(500).send('Error');
            res.status(204).send();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
