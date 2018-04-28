module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/about',function(req,res){
        res.render('about.html');
    });
    app.get('/visualizer',function(req,res){
        res.render('visualizer.html');
    });
    app.get('/dummy',function(req,res){
        res.render('dummy.html');
    });
}