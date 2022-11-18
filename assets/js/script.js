
// add a button that save the info to local storage
// when the page refreshes its still saves

var currentHour = moment().hour();
console.log(currentHour);

// var moment = require('moment');
// moment().format();
var presentDay = document.querySelector("#currentDay");
var timeBlock = document.querySelectorAll(".time");
var currentDate = moment().format("YYYY-MM-DD");

var rowInfo = document.querySelectorAll(".row.info")


timeBlock.forEach((block) => {
    var parent = block.parentElement;
    var theTextArea = parent.childNodes[3];
  let blockHour = block.getAttribute("id");
  console.log(blockHour);
  if (blockHour < currentHour) {
    theTextArea.setAttribute("class", "past");
  } else if (blockHour == currentHour) {
    theTextArea.setAttribute("class", "present");
  } else {
    theTextArea.setAttribute("class", "future");
  }
});


// function saveLocal(index){
//   alert('saved to local storage');
//   var event = rowInfo
// localStorage.setItem(index,event);
// };
// var compressedLocal = localStorage.getItem('compressedLocal');
// var saveLocal = eval('(' + compressedLocal + ')');
// saveLocal();

presentDay.textContent = currentDate;
