let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}

// 모듈 내보내기
module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module);