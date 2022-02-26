// OS 모듈
const os = require('os');

console.log(os.EOL === '\n');   // OS가 linux인 경우 true
console.log(os.EOL === '\r\n'); // OS가 window 경우 true

// 다양한 os 모듈 정보 출력
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus);