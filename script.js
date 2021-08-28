var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");


function compareValues(sum,luckyNumber){
  if(sum%luckyNumber == 0){
    outputBox.innerText = "your birthday is lucky 😃";
  }
  else{
    outputBox.innerText = "Sorry your birthday is not lucky ";
  }
}

function checkBirthDateIsLucky(){
  var dob = dateOfBirth.value;
  var sum = calculateSun(dob);
  if(sum&&dob)
  compareValues(sum,luckyNumber.value)
  else
  outputBox.innerText = "Please fill both the fields ";

}


function calculateSun(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let index = 0;index<dob.length;index++){
    sum = sum +Number(dob.charAt(index));
  }
  return sum;

}

function getValues(){
  console.log( dateOfBirth.value)
};

checkNumberButton.addEventListener("click",checkBirthDateIsLucky)