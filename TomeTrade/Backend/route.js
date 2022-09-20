module.exports = function (app, pool){
    app.get('/add', function(req, res){
        res.send("test123");
    });
}