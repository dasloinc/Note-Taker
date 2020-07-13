var dbJSON = require("../db/db.json");
// Returns the unique ID
var uniqueID = require("uniqid");

// ROUTING

module.exports = function(app) {
  // API GET Requests

  app.get("/api/notes", function(req, res) {
    res.json(dbJSON);
  });

  app.post("/api/notes", function(req, res) {

  var note = req.body;
  note.id = uniqueID();
  console.log(note);
  dbJSON.push(note);

res.json(note);

  });

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
