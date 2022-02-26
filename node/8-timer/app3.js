console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.timeEnd('timeout 0');
  console.log('setTimeout 0');
}, 0);

// == 출력 == 
// code1
// timeout 0: 1.962ms
// setTimeout 0

// code1
// timeout 0: 1.559ms
// setTimeout 0

// setTimeout에 지정한 0초의 시간이 정확하게 보장하진 않음.
// 실제로 콜백함수가 실행되기 위해서는 Call Stack이 비어있을 때까지 기다려야 하기 때문이다.

for (let i = 0; i < 10000000; i++) {}

// == 출력 ==
// code1
// timeout 0: 7.721ms
// setTimeout 0

// code1
// timeout 0: 8.45ms
// setTimeout 0

// 처리하는 코드의 양이 많아지면 Call Stack이 비는데 더 오랜시간이 걸리기 때문에, 콜백함수를 실행하기까지 더 많은 시간이 소요된다.