// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on notes taken

var dbJSON = require("../db/db.json");
// Returns the unique ID
var uniqueID = require("uniqid");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(dbJSON);
  });

  // API POST Requests
  // Below code handles when a user submits a note and thus submits data to the server.
  // In each of the below cases, when a user submits note data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
    
  // Create note - takes in JSON input
  // "Server" will respond to requests and let users know if they have a note or not.
  // It will do this by sending out the value "true" have a note
  // req.body is available since we're using the body parsing middleware. req.body hosts is equal to the JSON post sent from the user
  var note = req.body;
  note.id = uniqueID();
  console.log(note);
  dbJSON.push(note);

// Needed to send response of original note, Which triggered the .then
res.json(note);

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    newNote.length = 0;
   

    res.json({ ok: true });
  });

  app.delete("/api/notes/:id", function(req, res) {
    dbJSON.forEach(function(element, index) {
      if (element.id === req.params.id) {
        dbJSON.splice(index, 1)
        res.json(dbJSON)
      } 
    })

  })

};