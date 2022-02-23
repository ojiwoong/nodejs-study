// process 모듈
const process = require('process');

// 다양한 process 모듈 정보 출력
console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('setTimeout');
}, 0);

// process.nextTick : task Queue 맨 앞부분에 콜백 함수 작업을 넣어줌
process.nextTick(() => {
  console.log('nextTick');
})

for (let i = 0; i < 1000; i++){
  console.log('for loop');
}