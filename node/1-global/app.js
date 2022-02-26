const fs = require('fs');

// global object

// global object 타입 정의 문서
// declare var global: typeof globalThis;
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9d59b7aadafb5ee2afac9c4440b82e692a7449c1/types/node/globals.d.ts#L97

// 브라우저에서는 window가 global object
// 노드에서는 global 자체가 global object
console.log(global);

// global 이란 객체에 hello 함수 정의 (global 은 생략이 가능)
// global.console.log === console.log
global.hello = () => {
  global.console.log(`hello`);
  console.log(`hello`);
}

// global 은 생략 가능 (global.hello() === hello())
global.hello();
hello();