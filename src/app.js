const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConfig');
const path = require('path');
const route = require('./helper/route');

const server = http.createServer((req,res)=>{
    // process.cwd() 相对于执行文件夹的  绝对路径
    // __dirname     相对于执行文件的    绝对路径
    const filePath = path.join(conf.root,req.url);
    route(req,res,filePath)
   
})
server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`) 
})