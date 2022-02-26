const fs = require('fs');

// file.txt 파일을 통으로 읽고 쓰는데 소비되는 메모리 계산
const beforeMem = process.memoryUsage().rss;
console.log(`실행 전 메모리 : ${beforeMem}`);
console.log(beforeMem);
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  // 메모리 계산
  const afterMem = process.memoryUsage().rss;
  console.log(`실행 후 메모리 : ${afterMem}}`);
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`소비한 메모리 : ${consumed}MB`);
})