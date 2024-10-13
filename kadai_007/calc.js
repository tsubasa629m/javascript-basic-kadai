// 変数numの代入
let num =11

// 変数numの値によって出力する文字列を切り替える

if(num%5==0&&num%3==0){
console.log("３と５の倍数です");
}

else if(num % 5 == 0){
console.log("５の倍数です");
}

else if(num % 3 == 0){
console.log("３の倍数です");
}

else{
  console.log(num)
}
