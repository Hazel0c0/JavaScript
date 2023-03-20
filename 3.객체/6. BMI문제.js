/*
 1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
 2. bmi지수를 계산하여 반환함과 동시에 
 3. bmi가 25.0이상이면 "당신은 과체중입니다." 
    18.5이하면 "당신은 저체중입니다." 
    나머지는 "당신은 정상체중입니다."를 출력하는 
    CalcBMI라는 함수를 정의하고 호출하세요. 
 # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
 # 출력 예시: 
 "키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
 */
 var h = 178.4, w = 78.2;
 var myBmi = calcBMI(h, w);

 function calcBMI(h,kg) {
   var m=h/100;
   var bmi=kg/(m*m);
   if (bmi>=25.0){
      console.log('당신은 과체중입니다');
   } else if (bmi<=18.5){
      console.log('당신은 저체중입니다');
   } else {
      console.log('당신은 정상체중입니다');
   }
    return bmi;
 }
 function round(number, digit){
   /*
   반올림 : 소수점 이하의 값 반올림
   24.5706..
   2째자리까지 : Math.round(number*10**2) / 10**2
      (10*10=100) -> 2457.06.. -> 2457 / 100 ->24.57
   */
   return Math.round(number *10 ** digit) / 10**digit;
 }
 
 console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);