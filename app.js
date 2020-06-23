const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{res.send('Hello world!')})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})



var http = require('http');
var host = '172.30.1.56';
var server = http.createServer();

server.listen(port, host, '50000', function(){
    console.log('웹 서버가 시작되었습니다. %s, %d',host, port)

})

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속!  :  %s, %d', addr.address, addr.port)
})

app.route('/exam')
    .get(function (req, res) {
        res.send('Get - 조회')
    })
    .post(function (req, res) {
        res.send('POST - 삽입')
    })
    .put(function (req, res) {
        res.send('Put - 수정')
    })
    .delete(function (req, res) {
        res.send('Delete - 삭제')
    })