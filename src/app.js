const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req,res)=>{
    // process.cwd() 相对于执行文件夹的  绝对路径
    // __dirname     相对于执行文件的    绝对路径
    const filePath = path.join(conf.root,req.url);

    fs.stat(filePath,(err,stats)=>{
        if(err){
            res.statusCode = 404;
            res.setHeader('Content-Type','text/plain');
            res.end(`${filePath} is not a directory or file`);
            return
        }
        if(stats.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            // 不推荐， 此方法读文件很慢耗费性能
            // fs.readFile(filePath,(err,data)=>{
            //     res.end(data);
            // })
            // 推荐 以流的方式读文件 吐给客户端
            fs.createReadStream(filePath).pipe(res);
        }else if(stats.isDirectory()){
            fs.readdir(filePath,(err,files)=>{
                res.statusCode = 200;
                res.setHeader('Content-Type','text/plain');
                res.end(files.join(','));
            }) 
        }
    })
   
})
server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`) 
})