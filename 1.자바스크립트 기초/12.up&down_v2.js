var random = 45;
// var random = Math.floor(Math.random() * 49) + 1;
var num = 5; //횟수

var answer = +prompt('1~50 사이의 숫자를 5번 안에 맞춰보세요!');

while (num != 0) {
  if (answer >= 1 && answer <= 50) {
    --num;
    if (random < answer) {
      answer = +prompt(`down!!\n기회가 ${num}번 남았습니다.`);
    } else if (random > answer) {
      answer = +prompt(`up!!\n기회가 ${num}번 남았습니다.`);
    } else {
      alert('정답입니당  $#%$&^^#');
      break;
    }
  } else {
    answer = +prompt('1~50사이의 숫자를 입력해주세요ㅜㅜ');
  }
}
alert('기회를 모두 소진했습니다. GAME OVER!');