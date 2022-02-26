let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);
}, 6000);

// == 출력 ==
// 1
// 2
// 3
// 4
// 5
// Timeout!

// function setTimeout<TArgs extends any[]>(callback: (...args: TArgs) => void, ms?: number, ...args: TArgs): NodeJS.Timeout;
// setTimeout은 콜백함수와 ms 시간을 지정함. ms 마다 콜백함수를 실행하는 함수
// NodeJS.Timeout을 리턴함
// clearInterval 함수를 통해 interval을 중지할 수 있음.