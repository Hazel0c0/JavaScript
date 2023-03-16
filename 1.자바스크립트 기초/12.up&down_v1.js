var random = 45;

var answer = +prompt('1~50 사이의 숫자를 맞춰보세요!');

while (answer != random) {
  if (answer>=1 && answer<=50) {
    if (random < answer) {
      answer= +prompt('down!!!!!');
    } else {
      answer= +prompt('up!!!!!!!!!!!');
    }
  } else {
    answer= +prompt('1~50사이의 숫자를 입력해주세요ㅜㅜ');
  }
}
  alert('정답입니당  $#%$&^^#');