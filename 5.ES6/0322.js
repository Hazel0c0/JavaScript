//----------------------------2----------------------

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

//-----------------------1--------------------------

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