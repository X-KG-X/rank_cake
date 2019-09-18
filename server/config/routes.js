const controller = require("../controllers/authors");

module.exports = function(app){
    app.get('/authors', controller.all)
    app.post('/author', controller.add)
    app.get('/author/:id', controller.about)
    app.put('/author/:id', controller.update)
    app.delete('/author/:id', controller.delete)
    app.post('/author/:id', controller.add_quote)
    app.patch('/author/:id/:q_id',controller.vote_up)
    app.put('/author/:id/:q_id',controller.vote_down)
    app.delete('/author/:id/:q_id', controller.delete_quote)
}


