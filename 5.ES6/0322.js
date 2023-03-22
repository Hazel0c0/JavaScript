


//-------------객체 구조분해할당 ----------------
const emp = {
  empName: '빡빡이',
  age : 29,
  hireDate: '2014-01-01',
  birthDay: '1995-12-31'
};

// { empName : en } -> 키값 이름을 변경 할 수 있음


//------------------------- 배열 구조분해 할당---------------

const userNames = ['김철수', '박영희', '홍길동'];

const [kim, park, hong] = userNames;

// console.log(kim);   //김철수
// console.log(park);
// console.log(hong);

const [firstObj]  = [{id:1},{id:2},{id:3}]    // id:1
  .filter(obj => obj.id >=2);                 //id:2

// console.log(firstObj);

// 번호교환하기
let first =10 , second =20;
[second, first] = [first, second] ;

// console.log(first);   //20
// console.log(second);  //10

//앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고 싶다
const numbers=[1,3,5,7,9,11];

//copy
/*
const copyNumbers = numbers.slice();

const one = copyNumbers.shift();
const three = copyNumbers.shift();
const other = copyNumbers;

*/

const [one, three, ...other]  = numbers;

// console.log(one);       // 1
// console.log(three);     // 3
// console.log(other);     // [ 5, 7, 9, 11 ]
// console.log(numbers);   // 원본은 변하지 않음


//스프레드로 배열 간편복사
const foods = ['감튀', '징거버거'];

//const copyFoods = foods;  //조소 복사
const copyFoods = [...foods,'카피하면서','추가가능'];   //실제 데이터 복사
//유사배열을 배열로 만들때 유용하게 쓰임
//유사배열은 .slice 안되니까
// console.log(foods);
// console.log(copyFoods);


//----------------------------클로저활용----------------------

function counterClosure() {
  let count = 0;

  function increase() {
    return ++count;
  }

  function decrease() {
    return --count;
  }
  return {
    //ES6에서는 키와 값이 같으면 두번 쓰지 않아도 됨
    increase,
    decrease
  };
}
//------즉시실행----------
/*
const counterClosure = () => {
  let count = 0;
  // const increase = () => ++count;
  // const decrease = () => --count; 
  return {
    //ES6에서는 키와 값이 같으면 두번 쓰지 않아도 됨
    increase: () => ++count,
    decrease: () => --count
  };
};
*/

const counter_2 = (() => {
  let count = 0;
  // const increase = () => ++count;
  // const decrease = () => --count; 
  return {
    //ES6에서는 키와 값이 같으면 두번 쓰지 않아도 됨
    increase_2: () => ++count,
    decrease_2: () => --count
  };
})();

const {
  increase_2,
  decrease_2
} = counter_2;

/*
console.log(increase_2()); //1
console.log(increase_2()); //2
console.log(decrease_2()); //1
*/


//--------------커스텀형
/*
function counterWithCbClosure(callback) {

  let count = 0;

  function process(callback) {
    return callback(count);
  }
  return process;
}
const counter_= counterWithCbClosure();
*/

const counter_ = (() =>  {

  let count = 0;
 
  return callback=> count = callback(count);
})();

/*
console.log(counter_(function(c){return ++c;}));
console.log(counter_(function(c){return c += 3;}));
*/
console.log(counter_(c => ++c ));     //1         
console.log(counter_(c => c += 3 ));  //3          //4
console.log(counter_(c => c **2 ));   //Infinity   //16

//-----------------------클로저함수--------------------------

let count = 0; //전역변수라서 다른곳에서 count에 개입할 수 있다

const increase = () => ++count;
/*
console.log(increase());  //1
console.log(increase());  //2
console.log(increase());  //3
*/
//-------------------------

const increase2 = () => {
  let count = 0; //상태값이 0으로 돌아감
  return ++count
};
/*
console.log(increase());  //1
console.log(increase());  //1
console.log(increase());  //1
*/
//------------------------------
/*
increaseClosure() {
  let count = 0;

  function increase() {
      return ++count ;
  }
  return increase;
}
*/
const increaseClosure = () => {

  let count = 0; // 상태변수 (지역변수)

  function increase() {
    return ++count;
  }
  return increase;
};


const increase3 = increaseClosure();
//increaseClosure() = increase 라서 increase3를 호출해주어야함 !
/*
console.log(increase3());
console.log(increase3());
console.log(increase3()); // 3? OK!!

console.log(increaseClosure()); // [Function: increase]
*/

//--------------------------------


/*
즉시실행 함수 : 정의와 동시에 호출
일회용 ( 이름이 필요없음 )
*/
const result = (function (n1, n2) {
  return n1 + n2;
})(5, 8);

//console.log(result);

/*
( () => { 
  함수 내용 
})();
*/