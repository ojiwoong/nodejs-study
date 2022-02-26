const fs = require('fs');

// 파일명 변경 3가지 방법
// 1. renmae (...., callback(error, data))
// 2. try {renameSync(....)} catch(e) { } <= 최대한 지양하는 것이 좋음.
// 3. promises.rename().then.catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt')
} 
catch(error) {
  console.log(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
})

console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error)
