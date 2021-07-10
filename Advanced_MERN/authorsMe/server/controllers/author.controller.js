const { Author } = require("../models/author.model");


module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.findAllAuthors = (request, response) => {
    Author.find({})
        .then(allAuthors => response.json(allAuthors))
        .catch(err => response.json({message:"Something went Wrong",error:err}));
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}