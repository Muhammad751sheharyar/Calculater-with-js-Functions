let cal = document.getElementById("calScreen");




// function DEL(){
//   cal.value.sl = document.getElementById("DEL");
// }
function Nine(){
  cal.value +=document.getElementById("9").innerText;
}
function AC(){
  cal.value="";
}
function Eight(){
  cal.value +=document.getElementById("8").innerText;

}
function seven(){
  cal.value +=document.getElementById("7").innerText;
}
function six(){
  cal.value +=document.getElementById("6").innerText;
}
function five(){
  cal.value +=document.getElementById("5").innerText;
}
function four(){
  cal.value +=document.getElementById("4").innerText;
}
function three(){
  cal.value +=document.getElementById("3").innerText;
}
function two(){
  cal.value +=document.getElementById("2").innerText;
}
function one(){
  cal.value +=document.getElementById("1").innerText;
}
function zero(){
  cal.value +=document.getElementById("0").innerText;
}

function Subtract(){
  cal.value +=document.getElementById("-").innerText;
}
function Add(){
  cal.value +=document.getElementById("+").innerText;
}
function Division(){
  cal.value +=document.getElementById("/").innerText;
}
  function Multiply(){
  cal.value +=document.getElementById("*").innerText;
}
function dot(){
  cal.value +=document.getElementById(".").innerText;
}
function Equal(){
  cal.value = eval(cal.value)
}
function DEL(){
  cal.value
}







// let userInput=prompt("Enter the fruit name");
// let fruits=[ "Apple","mango", "banana" ];
// let isFound=false;
// for(let i=0;i<fruits.length;i++){
//   if(userInput === fruits){
//     console.log("Fruits is Aviliable");
//     isFound=true;
//   }
// }
// if(isFound=false){
//   console.log("fruit is not avalible")
// }