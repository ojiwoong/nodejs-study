// 버퍼 = 고정된 사이즈의 메모리 덩어리
// 숫자 배열의 형태, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi'); 
console.log(buf);         // <Buffer 48 69> - 유니코드
console.log(buf.length);  // 2
console.log(buf[0]);      // 72 - 아스키코드
console.log(buf[1]);      // 105 - 아스키코드
console.log(buf.toString());  // Hi

// create buffer (버퍼 생성)
const buf2 = Buffer.alloc(2); // 초기화 하고 사이즈가 2인 버퍼 생성
const buf3 = Buffer.allocUnsafe(2) // 초기화 하지 않고 버퍼를 생성하기 때문에, 속도라 빠르다. 하지만, 이미 데이터가 들어있는 버퍼가 생성될 수 있음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3); // buf2를 buf3으로 복사
console.log(buf2);  // <Buffer 48 69>
console.log(buf2.toString()); // Hi
console.log(buf3);  // <Buffer 48 69>
console.log(buf3.toString()); // Hi

// concat (합치기)
const newBuf = Buffer.concat([buf, buf2, buf3])
console.log(newBuf.toString()); // HiHiHi