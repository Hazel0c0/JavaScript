// var level =2;

for (var line=1; line<=9; line ++) {
  console.log(`${level} x ${line} = ${level*line}`);
}

for (var level=2; level<=9; level++) {
  for (var line=1; line<=9; line ++) {
    console.log(`${level} x ${line} = ${level*line}`);
  }
}