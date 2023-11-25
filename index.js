//引入express模块
var app = require('express')();
//引入http模块
var http = require('http').Server(app);
//引入socket.io
var io = require('socket.io')(http);//监听


app.get('/', function (request, response) {
    // response.send('Hello world');
    response.sendFile(__dirname+'/index.html');
});

//监听用户链接事件
io.on('connection', function (socket) {
    // console.log('a user connect');

    //监听频道，自己设定的频道名称,跟客户端一样的
    socket.on('chat.message', function (message) {
        // console.log('a new message '+ message)
        //服务端广播给所有的用户
        io.emit('chat.message', message)
    });
});

http.listen(3000, function () {
    console.log('Server Start')
});

//node index.js 启动这个服务

