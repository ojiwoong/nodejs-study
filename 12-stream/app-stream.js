const fs = require('fs');

const data = [];

fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // 읽어올 크기 설정 (기본값 : 64kbytes)
  // encoding: 'utf-8'
}).on('data', chunk => {
  // console.log(chunk);
  data.push(chunk);
  console.count('data');
}).on('end', () => {
  console.log(data.join(''));
}).on('error', error => {
  console.log(error);
})