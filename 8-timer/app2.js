console.log('code1');
setTimeout(() => {
  console.log('setTimeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImeediate');
})

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
})

// == 출력 ==
// code1
// code2
// code3
// process.nextTick
// setTimeout 0
// setImeediate

// code1, code2, code3 가 순차적으로 실행되고,
// process.nextTick을 가장 마지막에 실행했지만, 우선순위가 가장 높아서, Task Queue에 먼저 들어가서 실행 됌.