const path = require('path');

console.log(__dirname);     // D:\개발공부\Node\9-path
console.log(__filename);    // D:\개발공부\Node\9-path\app.js

// 운영체제별 경로 표기볍이 다르므로, 운영체제별로 경로 표기법이 달라져도 정상 작동하도록 코드를 작성하는 것이 중요하다.
// POSIX (Unix: Max, Linux) : Users/개발공부/Node/9-path/app.js
// Window : D:\개발공부\Node\9-path\app.js

// 파일 경로 구분자 가져오기
console.log(path.sep);        // \
console.log(path.delimiter);  // ;

// basename (파일명 가져오기)
console.log(path.basename(__filename));         // app.js
console.log(path.basename(__filename, '.js'));  // app

// dirname (디렉토리명 가져오기)
console.log(path.dirname(__filename));    // D:\개발공부\Node\9-path   

// extname (확장자 가져오기)
console.log(path.extname(__filename));    // .js

// parse
const parsed = path.parse(__filename);
console.log(parsed);

// == parse 출력 ==
// {
//   root: 'D:\\',
//   dir: 'D:\\개발공부\\Node\\9-path',
//   base: 'app.js',
//   ext: '.js',
//   name: 'app'
// }

const str = path.format(parsed);
console.log(str);   // D:\개발공부\Node\9-path\app.js

// 절대경로 여부 판단
console.log('isAbsolute?', path.isAbsolute(__dirname));   // true
console.log('isAbsolute?', path.isAbsolute('../'));       // false

// normalize (잘못된 경로를 자동적으로 수정해줌)
console.log(path.normalize('./folder//////sub'));   // folder\sub

// join (파일명 더하기)
console.log(__dirname + '\\' + 'image');      // Unix 계열의 운영체제에서 실행 시 경로 구분자가 달라서 오류 발생 
console.log(__dirname + path.sep + 'image');  // 현재 운영체제에 맞게 경로 구분자가 붙여지기 때문에 정상 작동
console.log(path.join(__dirname, 'image'));   // path.join을 사용해 간편하게 운영체제별 경로를 유연하게 대응 가능