// const a=10;
// const b=30;
// console.log(a*b);

//a태그를 가져와서 스타일 조작
// const $link = document.querySelector('a');
// console.log($link);
// $link.style.background='orange';

const arr = [1, 2, 3].map(n => n ** 2);
console.log(arr);

//브라우저 전용 함수  //노드에서 사용 X
// alert('알림 설정');
// prompt('당신의 이름은 ? ');  //입력 창
// confirm('집에 가고 싶어?')  //확인 취소 창

var age = +prompt('당신의 나이는 ? ');  
        //prompt 는 기본적으로 string으로 저장함
// alert(`내 나이 ${age +1}살`);  //301살 로 나옴
  //앞에 + 붙여주면 자동 형변환
  //string -> number로 변함

if (age > 19) {
  alert('성인입니다');
  alert('주류 구매가능');
}