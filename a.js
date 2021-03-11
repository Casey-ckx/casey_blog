// const  child_process=require("child_process")
// child_process.execFile("./start.bat",null,{},function(error,stdout,stderr){
//     if(error !==null){
//         console.log("exec error"+error)
//     }
//     else console.log("成功")
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
// })
// const { exec, spawn } = require('child_process');
// const child_process = require('child_process');
// const fs = require('fs')
// exec('push.bat',{windowsHide:true}, (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
//   console.log('请求结束')
// });

// function a(){
//   return new Promise(function(resolve, reject) {
//     var cmd = "ipconfig";
//     var result = spawn('cmd.exe', ['/s', '/c', 'ipconfig'], {encoding: 'utf-8'});
//     result.on('close', function(code) {
//         console.log('child process exited with code :' + code);
//     });
//     result.stdout.on('data', function(data) {
//         console.log('stdout: ' + data);
//     });
//     result.stderr.on('data', function(data) {
//         console.log('stderr: ' + data);
//         reject(new Error(stderr.toString()));
//     });
//     resolve();
  
//   });
// }
// a()
// console.log(1)
// var spawnObj = child_process.spawn('npm', ['run dev'], {encoding: 'utf-8'});
// var ps = require('child_process').spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run dev'], {
//   stdio: 'inherit',
// });
// spawnObj.stdout.on('data', function(chunk) {
//     console.log(chunk.toString());
// });
// spawnObj.stderr.on('data', (data) => {
//   console.log(data)
// });
// spawnObj.on('close', function(code) {
//     console.log('close code : ' + code)
// })
// spawnObj.on('error', function(code) {
//   console.log('error : ' + code)
// })


// spawnObj.on('exit', (code) => {
//     console.log('exit code : ' + code)
//     fs.close(fd, function(err) {
//         if(err) {
//             console.error(err);
//         }
//     });
// })

console.log('成功启动脚本啦11')

