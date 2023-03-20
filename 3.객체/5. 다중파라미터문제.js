/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
var result = calcNumbersTotalAndAverage(90, 80, 100, 90); 
//360과 90이 리턴되어야 함!

function calcNumbersTotalAndAverage(...Numbers){
  
  var total=0;
  for(var i of Numbers){
    total+=i;
  }
  
  result={
    "total": total,
    avg: total/Numbers.length,
  }
  console.log(`총합: ${result.total}, 평균: ${result.avg}`);
}
