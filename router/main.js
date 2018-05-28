module.exports = function(app)
{
    app.get('/',function(req,res){
        console.log("home page");
        res.render('index.html')
    });
    app.get('/visual',function(req,res){
        console.log("visual page");
        res.render('visual.html')
    });
    app.get('/visualizer',function(req,res){
        console.log("visualizer page");
        res.render('visualizer.html')
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
    app.get('/4',function(req,res){
        console.log("4 page");
        res.render('4.html')
    });
    app.get('/5',function(req,res){
        console.log("5 page");
        res.render('5.html')
    });
    app.get('/6',function(req,res){
        console.log("6 page");
        res.render('6.html')
    });
    app.get('/7',function(req,res){
        console.log("7 page");
        res.render('7.html')
    });
    app.get('/8',function(req,res){
        console.log("8 page");
        res.render('8.html')
    });
    app.get('/9',function(req,res){
        console.log("9 page");
        res.render('9.html')
    });
    app.get('/10',function(req,res){
        console.log("10 page");
        res.render('10.html')
    });
}