//게임데이터
const gameData = {
  secret: Math.floor(Math.random()*100)+1, // 실제정답
  answer: null,  // 사용자의 선택값
  min:1,    //최소 범위
  max: 100  //최대 범위
};

//랜덤정수를 범위에 맞게 생성하는 함수
function makeRandomNumber(range) {
  return Math.floor(Math.random()*range)+1;
}

//=================정의부====================

function gameStart(iconCount) {

  const $numbers = document.getElementById('numbers');
  
  //구슬을 iconCount개 만들어야함
  const makeIcon = () => {
    //<div class="icon">1</div>

    for(let n=1; n<=iconCount; n++) {
      const $icon = document.createElement('div');
      $icon.classList.add('icon');  //클래스 만들어주기
      $icon.textContent=n;
      $icon.dataset.iconNumber=n;

      // #numbers 의 자식으로
      $numbers.appendChild($icon);
    }   
  }
  makeIcon();

  //아이콘에 클릭 이벤트 부여하기
  $numbers.onclick = e => {
    // 배경부분 : numbers 부분 누르면 모두 클릭됨
    if (!e.target.matches('#numbers .icon')) return;
    // console.log(`${e.target.textContent}번구슬 클릭함!`);
        
    // 사용자가 클릭한 아이콘의 숫자를 answer에 저장
    gameData.answer = +e.target.dataset.iconNumber;
    console.log(gameData);

    //정답 검증 함수
    checkNumber();
  };
}

//정답 검증하는 함수
function checkNumber($target) {

  const {secret, answer} = gameData;
  //실제 정답이랑 선택값을 비교
  if (secret === answer) { //정답
    correctAnswer($target);
    console.log('정답');

  } else if (secret > answer) { // up
    caseUp($target);
    console.log('업업');

  }else {  // down
    caseDown();
    console.log('다운');
  }
}

function caseUp($icon) {
  // 1. #begin의 숫자값이 클릭값 +1 로 변경
  document.getElementById('begin').textContent
  = +$icon.dataset.iconNumber+1  //클릭한아이콘의값

  // 2. #down .selected 제거, #up에 추가
  document.getElementById('down').classList.remove('selected');
  document.getElementById('up').classList.add('selected');

  // 3. 자기 자신 아이콘 포함 이전 형제들 모두 삭제
  //부모태그.removeChild(나의 태그);
  //부모태그.removeChild(나의 이전형제);
  //부모태그.removeChild(나의 이전형제의 이전형제);
  const $numbers = document.getElementById('numbers');
  
  // iterator 디자인 패턴 : null이 나올때 까지 반ㅂㄱ
  // $numbers.removeChild($icon);
  // $numbers.removeChild($icon.previousElementSibling);
  
  let $delTarget = $icon;
  while ($delTarget) { // $delTarget !== null
    $numbers.removeChild($delTarget);
    $delTarget = $delTarget.previousElementSibling;
    // 다음 타겟은 형이야!

    
  }

}

function caseDown() {
  // 1. #begin의 숫자값이 클릭값 -1 로 변경

  // 2. #up .selected 제거, #down에 추가

  // 3. 자기 자신 아이콘 포함 다음 형제들 모두 삭제
}

function correctAnswer($correctIcon) {
  //1. finish 아이디 박스에 class 'show' 부여
  const $finish = document.getElementById('finish');
  $finish.classList.add('show');

  //2. #numbers 클릭 이벤트 해제
  document.getElementById('numbers').onclick=null;

  //3. 클릭한 아이콘에 id 'move' 부여
  $correctIcon.setAttribute('id','move');
  //$correctIcon : 클릭한 정답 아이콘
}






//=================실행부====================

// (함수정의)(); : 즉시실행 함수
(function() {

  gameStart(50);
})(); 



