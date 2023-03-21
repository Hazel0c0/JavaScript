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
      hobbys: ['수영', '테니스']
  },
  {
      account: 'park1234',
      userName: '주차왕',
      job: '발렛파킹',
      address: '경기',
      hobbys: ['수영', '축구', '테니스', '영화감상']
  },
  {
      account: 'fire',
      userName: '불꽃남자카리스마',
      job: '게이머',
      address: '서울',
      hobbys: ['축구', '테니스']
  },
];


function alertUserInfo(wannaSay){
  for(const user of userList){
    wannaSay(user);
  }
}
alertUserInfo(u=>console.log(`나는 ${u.userName}님이시다`));

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
// userList.forEach(() => {});
userList.forEach(user => {
  console.log(`${user.userName}은 ${user.address}에 산다`);
});


const number = [10,20,30,40];

let total =0;
number.forEach(num => total+=num);
console.log(`total:${total}`);

console.log('=============취미필터링==================');

// 취미가 2개인 회원들만 
// 필터링 해서 새로운 배열에 담아줘
function filter2Hobby(){
  //새로운 배열 생성
  const filteredArray = [];

  for(const user of userList) {
    if (user.hobbys.length ===2){
      filteredArray.push(user);
    }
  }
  return filteredArray;
}


const newArray = filter2Hobby();

console.log(newArray);


console.log('=============멀티필터링==================');

// 특정 필터 조건에 의해 필터링 하는 함수
function filter(condition){
  //새로운 배열 생성
  const filteredArray = [];
  
  for(const user of userList) {
    if (condition(user)){
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

const newArray2 = filter(u=> u.address==='서울');
console.log(newArray2);



console.log('=============filter()==================');
//배열 고차함수 filter()
//특정조건에 의해 필터링 된 배열을 반환

const numberArray = [1,2,3,4,5,6,7,8,9];

const newArr = numberArray.filter(n=>n%2===0);
console.log(newArr);


const user1 = userList.filter(user => user.account === 'abc1234');
console.log(user1);