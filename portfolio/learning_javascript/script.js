// var names = ["Tanmay", "Harshul"];
//
// // console.log(names[0]);
// //
// // for (var x = 1; x <= 10; x++){
// //     console.log(x);
// // }
// //
// // for (var i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }
// //
// // var tui = 0
// //
// // do {
// //     console.log(tui++);
// // } while (tui < 9);
// //
// // if (true && 1) {
// //     console.log("true and 1 are the same thing");
// // }
//
// // Using a function
// function printToConsole(message1, message2) {
//     console.log(message1 + message2);
//     return true;
// }
//
// console.log(printToConsole(names[0], names[1]));

// console.log(document.images);

var firstItem = document.getElementById('item-1')
// console.log(firstItem);

 var myList = document.getElementsByClassName("mylist");
// console.log(myList);
//
 var paras = document.getElementsByTagName("p");
// console.log(paras);
//
// var images = document.querySelectorAll("img");

firstItem.style.color = "red";
myList[1].style.display = "none";

for (var i = 0; i < paras.length; i++) {
    paras[i].style.color = "green";
}

var submitBtn = document.getElementById("submit");
var container = document.querySelector(".container")

submitBtn.addEventListener("click", function(event){
    console.log("EventListener triggered on click!");
    container.style.color = "red";
});
