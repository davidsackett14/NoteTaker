const fs = require('fs');
const uuid = require('uuid');
console.log(uuid)
module.exports = (app) => {
    app.get('/api/notes', (req,res)=> res.json(JSON.parse(fs.readFileSync('./db/db.json',{encoding:"utf-8"}))));

    app.post('/api/notes', (req,res)=> {
        const currentFile = JSON.parse(fs.readFileSync('./db/db.json',{encoding:"utf-8"})) ;
        console.log(currentFile);
        console.log(req.body);
        req.body.id=uuid.v4()
        currentFile.push(req.body);
        console.log(currentFile);
        fs.writeFileSync('./db/db.json',JSON.stringify(currentFile));
        res.json(currentFile)
    });
   
}