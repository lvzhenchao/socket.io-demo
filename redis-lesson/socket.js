//引入http模块
var http = require('http').Server();

//引入socket.io
var io = require('socket.io')(http);//监听
//引入redis,返回的是个对象，所以需要再放到一个对象里面
var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('test-channel');

redis.on('message', function (channel, msg) {
    console.log(msg);
});

http.listen(3000);
