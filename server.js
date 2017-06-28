const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url.slice(1, 5) == 'hldm') {
        var file_name = '.' + req.url;
    } else {
        if (req.url.slice(1, 4) == 'api') {
            res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
            res.setHeader('Content-Type', 'application/json;charset=utf-8')
            if (req.url.slice(5, 15) == 'gethometab') {
                var file_name = './api/gethometab/' + req.url.slice(-1) + '.json';
            } else {
                var file_name = '.' + req.url + '.json';
            }
        } else {
            var file_name = './imgs' + req.url;
        }
    }
    console.log(req.connection.remoteAddress + '-----' + file_name);
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    })
}).listen(8888);