var num_1 = 1;
var num_2 = -1;
var num_3 = 0;





function checkPolarity(num){
  if (num < 0){
    console.log(num.toString() + " is negative");
  }
  else if (num > 0) {
    console.log(num.toString() + " is positive");
  }
  else { //(num_1 > num_2)
    console.log(num.toString() + " is 0");
  }
}

checkPolarity(num_1)
checkPolarity(num_2)
checkPolarity(num_3)
