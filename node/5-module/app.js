// 자바스크립트 최신 import

// import {increase, getCount} from './counter.js';
import * as counter from './counter.js';  // 기존의 require 방식

// increase();
// console.log(getCount());

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());