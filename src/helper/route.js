const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars'); //模板引擎
const { promisify } = require('util');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);
const config = require('../config/defaultConfig')
const mime = require('./mime')

const tplpath = path.join(__dirname,'../template/dir.tpl')
const source = fs.readFileSync(tplpath);
const template = Handlebars.compile(source.toString())
 module.exports = async function (req,res,filePath){
    try{
        const stats = await stat(filePath);
        if(stats.isFile()){
            const  contentType = mime(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type',contentType+"; charset=UTF-8");
            fs.createReadStream(filePath).pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html; charset=UTF-8'); 
            const dir = path.relative(config.root,filePath)
            const data = {
                titel:path.basename(filePath),
                dir:dir?`/${dir}`:'',
                files:files.map((file)=>{
                    return{
                        file,
                        icon:mime(file)

                    }
                })
            } 
            res.end(template(data));
        }
    }catch(ex){
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain; charset=UTF-8');
        res.end(`${filePath} is not a directory or file`);
        console.error(ex)
    }
 }