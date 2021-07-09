const fs = require('fs');
const uniqid = require('uniqid');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile("./db/db.json", (error, data) => {
            if (error) throw error;
            res.send(data);
        })
    });

    app.post('/api/notes', (req, res) => {
        const id = uniqid();
        const newNote = req.body;
        newNote.id = id;
        //console.log(newNote);
        //const newNote = req.body.uniqid();
        fs.readFile("./db/db.json", (error, data) => {
            if (error) throw error;
            var dataNote = JSON.parse(data);
            dataNote.push(newNote);
            console.log(dataNote);
        fs.writeFile("./db/db.json", JSON.stringify(dataNote), error => {
            if (error) throw error;
            res.send(newNote)
        })
        })

    })
}
 