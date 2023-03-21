while (true) {
  var totalMember = +prompt('게임 인원 (2~4명)');
  if (!(totalMember >= 2 && totalMember <= 4)) {//||
    alert('인원수를 다시 입력해주세요');
    continue;
  }
  var player = [];

  //--------로그인
  alert(`플레이어 이름을 등록합니다.`);
  for (i = 0; i < totalMember; i++) {
    var ck = prompt(`${i+1}번 플레이어 이름 : `);
    if (ck === '') {
      alert('이름을 다시 입력해주세요요');
      --i;
      continue;
    } else {
      player.push(ck);
    }
  }
  alert(`[${player}] 참가!!`);


  //--------game start
  var startNumber = Math.floor(Math.random() * totalMember);
  // var i=startNumber;

  var bulletTotal = 6; //6분의 n - 확률
  while (true) {
    var bullet = +prompt(`실탄 개수(1~5개)`);

    if (!(bullet >= 1 && bullet <= 5)) {
      alert('숫자를 다시입력해주세요');
      continue;
    } else {
      break;
    }
  }

  var die = [];
  for (var i = 0; i < bullet; i++) {
    die += i;//push
  }
  break;
}

alert(`총을 받았습니다. ${player[startNumber]}부터 시작합니다`);
while (true) {

  alert(`[${player[startNumber]}님의 턴! 탄창을 회전합니다.\n# 엔터를 누르면 격발합니다.]`);

  var shot = Math.floor(Math.random() * bulletTotal) //0~5
  // var beforeBullet=bullet;

  if (die.includes(shot)) {
    alert(`# 빵!! [${player[startNumber]}]님 사망..RIP`);
    player.splice(startNumber, 1);

    --bullet;
    --totalMember;

    if (startNumber >= totalMember) {
      startNumber = 0;
    }
    if (bullet === 0) {
      alert(`${player.length}명이 살아남았습니다.\n생존자: ${player}`);
      break;
    } else {
      alert(`남은 인원으로 게임을 계속합니다.\n생존한 인원 : [${player}]`);
    }
  } else {
    alert('..휴~ 살았습니다');

    if (startNumber >= totalMember - 1) {
      startNumber = 0;
    } else {
      ++startNumber;
    }
  }
  --bulletTotal;
}