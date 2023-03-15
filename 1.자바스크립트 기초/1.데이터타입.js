// var sentence ='<ul>
//                 <li> 
//                     <a>ddd</a>';

// var sentence ='<ul>\n\t<li> \n\t\t<a>ddd</a>';

var sentence = `
<ul>
  <li>
    <a>hhhh</a>
  </li>
</ul>
`
console.log(sentence);

var month=4;
var day=5;
var anniversary='식목일';

// var messge = month +'월'
//             + day + '일은'
//             + anniversary +'입니다.';

var message = `${month}월 ${day}일은 ${anniversary}입니다.`;

console.log(message);

var flag = false;
console.log(typeof flag);   //boolean