// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body-parser
app.use(bodyParser.json());

// Read comments from file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// GET /comments
app.get('/comments', function (req, res) {
  res.json(comments);
});

// POST /comments
app.post('/comments', function (req, res) {
  // Add a comment to the comments array
  comments.push(req.body);

  // Write comments to file
  fs.writeFileSync('comments.json', JSON.stringify(comments));

  // Send a response
  res.send('Comment added');
});

// Start the server
app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});