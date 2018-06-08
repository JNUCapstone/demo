module.exports = function(app)
{
    app.get('/',function(req,res){
        console.log("home page");
        res.render('index.html')
    });
    app.get('/visualizer1',function(req,res){
        console.log("visualizer1 page");
        res.render('visualizer1.html')
    });
    app.get('/visualizer2',function(req,res){
        console.log("visualizer2 page");
        res.render('visualizer2.html')
    });
    app.get('/dummy',function(req,res){
        console.log("dummy page");
        res.render('dummy.html')
    });
}