var fs = require('fs');
var http = require('http');
// 웹서버 생성 및 실행
http.createServer(function(request, response)
{
 // htem 파일 읽기
 fs.readFile('index.html', function(error, data)
 {
  console.log('1')
  response.writeHead(200, {'Conternt-type':'text/html'});
  response.end(data);
 });

}).listen(80, function(){
 console.log('server runniung at http://localhost:80');
});
