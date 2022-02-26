const fs = require('fs').promises;

// 파일 읽기
fs.readFile('./text.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(console.error)

// 파일 쓰기
fs.writeFile('./text.txt', 'Hello, Jiwoong :) ')
  .catch(console.error);

// 파일 내용 덧붙이기
fs.appendFile('./text.txt', 'test append')
  .catch(console.error);

// 파일 복사
fs.copyFile('./text.txt', './file2.txt')
  .catch(console.error);

// 폴더 만들기
fs.mkdir('sub-folder')
  .catch(console.error)


fs.readdir('./')
  .then(console.log)
  .catch(console.error)