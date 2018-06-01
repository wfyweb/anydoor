const path = require('path');

const mimeTypes = {
  'css': 'text/css',
  'gif': 'image/gif',
  'html':{
    text:'text/html',
    icon:'<i class="icon iconfont icon-html" style="color:#4F8E9D"></i>',
  },
  'ico': 'image/x-icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpeg',
  'js': {
    text:'text/javascript',
    icon:'<i class="icon iconfont icon-js" style="color:#4F8E9D"></i>',
   },
  'json': {
    text:'application/json',
    icon:'<i class="icon iconfont icon-json" style="color:#CBCB40"></i>',
  } ,
  'pdf': 'application/pdf',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'swf': 'application/x-shockwave-flash',
  'tiff': 'image/tiff',
  'txt': {
    text:'text/plain',
    icon:'<i class="icon iconfont icon-wenjianjia" style="color:#fff"></i>',
  },
  'md': {
    text:'text/markdown',
    icon:'<i class="icon iconfont icon-txt" style="color:#4F8E9D"></i>',
  } ,
  'wav': 'audio/x-wav',
  'wma': 'audio/x-ms-wma',
  'wmv': 'video/x-ms-wmv',
  'xml': 'text/xml',
  
};

module.exports = (filePath) => {
  let ext = path.extname(filePath)
    .split('.')
    .pop()
    .toLowerCase();
    console.info("我是EXT： "+ext)
  if (!ext) {
    ext = filePath;
  }

  return mimeTypes[ext] || mimeTypes['txt'];
};