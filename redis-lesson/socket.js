//引入http模块
var http = require('http').Server();

//引入socket.io
var io = require('socket.io')(http);//监听
//引入redis,返回的是个对象，所以需要再放到一个对象里面
var Redis = require('ioredis');
var redis = new Redis({
    host: '192.168.56.12', // Redis 服务器的 IP 地址或域名
    port: 6379,              // Redis 服务器的端口号，如果是默认端口可以省略
    password: '123456',    // 如果设置了密码的话
    db: 0                    // 如果您想连接到非默认数据库的话
});

redis.subscribe('test-channel');

redis.on('message', function (channel, msg) {
    console.log(msg);
});

http.listen(3000, function () {
    console.log('Server Start')
});
