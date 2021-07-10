const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/getAuthors', AuthorController.findAllAuthors);
    app.post('/api/createAuthor', AuthorController.createAuthor);
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}