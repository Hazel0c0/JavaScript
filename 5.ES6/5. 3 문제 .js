const userList = [
  {
      account: 'abc1234',
      userName: '대길이',
      job: '추노',
      address: '서울',
      hobbys: ['수영', '축구', '테니스']
  },
  {
      account: 'banana',
      userName: '빠나나',
      job: '과일',
      address: '서울',
      hobbys: ['푸드파이팅', '테니스']
  },
  {
      account: 'park1234',
      userName: '주차왕',
      job: '발렛파킹',
      address: '경기',
      hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
      account: 'fire',
      userName: '불꽃남자카리스마',
      job: '게이머',
      address: '서울',
      hobbys: ['독서', '테니스']
  },
];












//.filter [{5},{5},{5}] -> 프로퍼티의 개수는 변하지 않음, length는 변함
//.map ['','',''] -> 프로퍼티 변함, length 그대로



userList // [{5}, {5}, {5}, {5}]
  .filter(user => user.address === '서울') // [{5}, {5}, {5}]
  .map(user => user.hobbys[0]) // ['', '', '']
  .forEach(hobby => {
    console.log(`회원의 첫번째 취미는 ${hobby}입니다.`);
  }); 