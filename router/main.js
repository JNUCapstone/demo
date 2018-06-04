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
    app.get('/visualizer3',function(req,res){
        console.log("visualizer page3");
        res.render('visualizer3.html')
    });
    app.get('/dummy',function(req,res){
        console.log("dummy page");
        res.render('dummy.html')
    });
    app.get('/1',function(req,res){
        console.log("1 page");
        res.render('1.html')
    });
    app.get('/2',function(req,res){
        console.log("2 page");
        res.render('2.html')
    });
    app.get('/3',function(req,res){
        console.log("3 page");
        res.render('3.html')
    });
}