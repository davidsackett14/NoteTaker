const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req,res)=> res.json(fs.readFile('../db/db.json')));

    app.post('/api/notes', (req,res)=> res.json(fs.readFile('../db/db.json')))
}