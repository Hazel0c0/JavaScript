var num = 0;
var first,second,answer,right ;

alert('즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~');

while (answer!= 0) {
  ++num;
  first=Math.floor(Math.random() * 49) + 1;
  second=Math.floor(Math.random() * 49) + 1;
  
  answer= +prompt(`Q${num}. ${first} + ${second} = ??`);
  right = first + second;

  if (answer===right) {
    alert('정답입니다!!');
  } else if (answer===0) {
    alert('게임을 종료합니다!');
  }  else{
    alert('틀렸어요ㅜㅜ');
  }
}