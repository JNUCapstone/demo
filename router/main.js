module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/visual',function(req,res){
        res.render('visual.html')
    });
    app.get('/temp',function(req,res){
        res.render('temp.html')
    });
    app.get('/visualizer',function(req,res){
        res.render('visualizer.html')
    });
}