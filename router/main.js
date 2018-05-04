module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('dual.html')
    });
    app.get('/about',function(req,res){
        res.render('about.html');
    });
    /*
    app.get('/visualizer',function(req,res){
        res.render('visualizer.html');
    });
    app.get('/dummy',function(req,res){
        res.render('dummy.html');
    });
    */
    app.get('/dual',function(req,res){
        res.render('dual.html');
    });
    app.get('/visual',function(req,res){
        res.render('visual.html')
    });
    app.get('/liquidFillGauge', function(req,res){
        res.render('liquidFillGauge.js')
    })
    app.get('liquidFillGauge.js', function(req,res){
        res.render('liquidFillGauge.js')
    })
    app.get('/liquidFillGauge.js', function(req,res){
        res.send('liquidFillGauge.js')
    });
}