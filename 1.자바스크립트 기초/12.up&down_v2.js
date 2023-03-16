var random = Math.floor(Math.random() * 49) + 1;

var num = +prompt(`난이도를 설정하세요~~~~~
[1.상(기회3번)   2.중(기회6번)   3.하(기회10번)]`);
var chance;
if (num === 1) {
  chance = 3;
} else if (num === 2) {
  chance = 6;
} else {
  chance = 10;
}

var answer = +prompt(`1~50 사이의 숫자를 ${chance}번 안에 맞춰보세요!`);
var max = 50,
  min = 1;

while (chance != 0) {
  if (answer >= min && answer <= max) {
    --chance;
    if (chance === 0) {
      alert('기회를 모두 소진했습니다. GAME OVER!');
      break;
    }
    if (random < answer) {
      max = answer;
      answer = +prompt(`down!!\n기회가 ${chance}번 남았습니다.(${min}~${max})`);
    } else if (random > answer) {
      min = answer;
      answer = +prompt(`up!!\n기회가 ${chance}번 남았습니다.(${min}~${max})`);
    } else {
      alert('정답입니당  $#%$&^^#');
      break;
    }

  } else {
    answer = +prompt('1~50사이의 숫자를 입력해주세요ㅜㅜ');
  }
}