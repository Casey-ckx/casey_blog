// const  child_process=require("child_process")
// child_process.execFile("./start.bat",null,{},function(error,stdout,stderr){
//     if(error !==null){
//         console.log("exec error"+error)
//     }
//     else console.log("成功")
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
// })
const { exec, spawn } = require('child_process');
exec('push.bat',{windowsHide:true}, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
  console.log('请求结束')
});