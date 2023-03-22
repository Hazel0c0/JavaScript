// 전체 배열 구하기
const $liList = [...document.querySelectorAll('#list1 li')];

// const $oddList = [...document.querySelectorAll('#list1 li:nth-child(odd)')];
// console.log($oddList);
// for (let $oddLi of $oddList){
//   $oddLi.style.backgroundColor = 'yellow';
// }

// const $evenList = [...document.querySelectorAll('#list1 li:nth-child(even)')];
// console.log($evenList);
// for (let $evenLi of $evenList){
  //   $evenLi.style.backgroundColor = 'gray';
  // }
$liList.forEach(($li,idx)=> {
  if (idx % 2===1)
    $li.style.backgroundColor='gray';
  else
    $li.style.backgroundColor = 'yellow';
});

// const $child = [...document.querySelectorAll('#list1 li')];
const $first=$liList[0].style.color = 'red';
const $second=$liList[$liList.length-1].style.color = 'green ';
$liList[1].style.fontStyle = 'italic ';

const $2ndBefore = [...document.querySelectorAll('#list1 li:nth-child(-n+2)')];
// console.log($2ndBefore);
// for (let $2ndB of $2ndBefore){
//   $2ndB.style.border = '2px dotted aqua';
// }

//-------하는중---------
// const $two=[$first,$second];
// $liList.forEach(($li,idx)=>{
//   if
// })

const $3ndAfter = [...document.querySelectorAll('#list1 li:nth-child(n+3)')];
console.log($3ndAfter);
for (let $3ndA of $3ndAfter){
  $3ndA.style.border = '2px dashed violet';
}