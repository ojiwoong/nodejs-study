console.log('logging....');
console.clear();

// log level
// console.log로만 사용하면 서버에 배포했을 시 정말 중요한 warning이나 error인 경우를 캐치하지 못할 수 있다.
// 그렇기 때문에, 해당 메세지의 로그 단계별로 나누어서 console을 사용 해야한다.
// 또한, 서버 배포시 표시할 log level을 설정 할 수 있는데, 중요한 메시지인 경우 warning이나 error로 설정을 해둬야 log 단계를 제외하고도 표시할 수 있다.
console.log('log');   // 개발
console.info('info'); // 중요한 정보
console.warn('warn'); // 경보
console.error('error'); // 심각한 에러 - 사용자 에러, 시스템 에러

// assert
// 참이 아닌경우에만 log 출력
console.assert(2 === 3, 'not same!'); // 거짓이라 log에 출력 됨
console.assert(2 === 2, 'same!');     // 참이라 log에 출력되지 않음

// 객체 출력
const student = { name : 'jiwoong', age: 29, company: { name: "woong's company"} };
console.log(student); // { name: 'jiwoong', age: 29, company: { name: "woong's company" } }

// table
// 테이블 형태로 객체를 출력
console.table(student); 
// ┌─────────┬───────────────────┬───────────┐
// │ (index) │       name        │  Values   │
// ├─────────┼───────────────────┼───────────┤
// │  name   │                   │ 'jiwoong' │
// │   age   │                   │    29     │
// │ company │ "woong's company" │           │
// └─────────┴───────────────────┴───────────┘

// dir
// 옵션 설정을 하여 출력
console.dir(student, {showHidden: true, colors: true, depth: 0}); // { name: 'jiwoong', age: 29, company: [Object] }

// 시간 측정
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++
}
console.timeEnd('for loop');  // for loop: 0.079ms

// 카운팅
function counting() {
  console.count('a function');
}

counting(); // a function: 1
counting(); // a function: 2
console.countReset('a function'); // 카운트 초기화
counting(); // a function: 1

// 추적
function f1() {
  f2();
}

function f2(){
  f3();
}

function f3(){
  console.log('f3');
  // 함수 호출 추적 로그 출력
  // 디버깅 할 때 유용하게 사용
  console.trace();
  // Trace
  //   at f3
  //   at f2
  //   at f1
  //   at Object.<anonymous>
  //   at Module._compile (internal/modules/cjs/loader.js:1063:30)
  //   at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
  //   at Module.load (internal/modules/cjs/loader.js:928:32)
  //   at Function.Module._load (internal/modules/cjs/loader.js:769:14)
  //   at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
  //   at internal/main/run_main_module.js:17:47
}

f1();