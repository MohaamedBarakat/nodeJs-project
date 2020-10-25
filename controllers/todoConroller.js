var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'write some code for me' }];

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });
    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        //console.log(data);
        res.json({ todos: data });
        console.log("data after adding item ");
        console.log(data);
    });
    app.delete('/todo/:item', function(req, res) {

        data = data.filter(function(todo) {

            return todo.item !== req.params.item.trim();
        });
        res.json({ todos: data });
        console.log("data after removing item ");
        console.log(data);
    });
}