const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(data);
    });

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        

    })
}

//Sample Code from Class

// Create New Characters - takes in JSON input
// app.post('/api/characters', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
  
    // const newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    //This says if there are any spaces, then replace with nothing and then it makes it lowercase so it's not case sensitive
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //get the object and name and remove spaces and make sure it's lower case and it creates the routeName
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
    // console.log(newCharacter);
  //this pushes it to the array
   // characters.push(newCharacter);
    // res.json(newCharacter);
  //});
  