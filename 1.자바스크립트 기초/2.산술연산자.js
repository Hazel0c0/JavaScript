console.log(27 % 5);   //2
//뒤에 숫자가 더 크면 앞에 숫자가 나머지
console.log(4 % 10);   //4

console.log(77 % 0);  //NaN
console.log(0 % 77);  //0

//거듭제곱 연산
var num =2;
console.log(num ** 3);  //2*2*2=8

//증감 연산자
var x = 3;
x++; 

console.log(`x:${x}`);

//전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;   //n1 이 n2에 먼저 대입 후에 n1++
console.log(`n1: ${n1}, n2: ${n2}`);
//n1: 11, n2: 10

var n3 = 10;
var n4 = ++n3;  //n3에 ++먼저 하고 대입!
console.log(`n3: ${n3}, n4: ${n4}`);
//n3: 11, n4: 11

x += 1; //연산이 2번
x++;    //연산이 1번 -> 속도가 더 빠르다