var first = +prompt('첫번째 숫자를 입력!');
var second = +prompt('두번째 숫자를 입력!');
var sum = 0;
for (i=first; i<=second; i++) {
  sum+=first;
}
alert(`${first} ~ ${second}까지의 누적합: ${sum}`);