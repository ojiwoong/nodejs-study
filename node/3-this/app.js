function hello() {
  console.log(this); // 함수 안에서 this를 호출하면 global이다.
  console.log(this === global); // true
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('------ class ------');
    console.log(this);  // class에서 this는 class 자기 자신을 가리킨다.
    console.log(this === global); // false
  }
}

const a = new A(1);
a.memberFunction();

console.log('---- global scope ----');
console.log(this); // Node에서 this는 module.experts를 가리킨다.
console.log(this === module.exports); // true