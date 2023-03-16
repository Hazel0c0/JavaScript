var num = 0;
var first, second, answer, right;

var O = 0,
  X = 0;

var operator, oper='';

var levelControl;

alert('즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~');

var level = +prompt(`난이도를 설정합니다~~~~~~~~~~
[ 1.상(1~100)    2.중(1~50)    3.하(1~20) ]`);

if (level ===1 ){
  levelControl=100;
  answer('난이도 -상- 으로 시작합니다');
} else if (level ===2){
  levelControl=50;
  answer('난이도 -중- 으로 시작합니다');
} else {
  levelControl=20;
  answer('난이도 -하- 으로 시작합니다');
}

while (answer != 0) {
  ++num;
  first = Math.floor(Math.random() * levelControl) + 1;
  second = Math.floor(Math.random() * levelControl) + 1;
  operator = Math.floor(Math.random() * 3);

if (operator===0) {
  oper='+';
  right=first+second;
} else if (operator===1) {
  oper='-';
  right=first-second;
} else {
  oper='x'
  right=first*second;
}
      
  answer = +prompt(`Q${num}. ${first} ${oper} ${second} = ??`);
      
  if (answer === right) {
    alert('정답입니다!!');
    ++O;
  } else if (answer === 0) {
    alert('게임을 종료합니다!');
  } else {
    alert('틀렸어요ㅜㅜ');
    ++X;
  }
}
alert(`정답횟수 : ${O}회, 틀린횟수 : ${X}회`);