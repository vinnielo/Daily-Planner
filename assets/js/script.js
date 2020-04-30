var planner = localStorage.getItem('planner')? JSON.parse(localStorage.getItem("planner")) : {};
console.log(planner)
//add ready event listener to the document
$(document).ready(function () {
  console.log("document is ready to go!");
  //render the current time
  var getCurrentTime = function () {
    var currentTime = moment().format("LLLL");
    $("#currentDay").text(currentTime);
  };

  //update the hours div with past, present future classes
  var setTimeColor = function () {
    //get current time
    var getCurrentHourValue = moment().hours();
    //get all div
    var $allTimeBlocksArr = $(".row.time-block");
    //check current time
    for (var i = 0; i < $allTimeBlocksArr.length; i++) {
      var $targetBlock = $($allTimeBlocksArr[i]);
      var timeAttr = $targetBlock.attr("time");
      //compare time attr with current hour value
      if (getCurrentHourValue > timeAttr) {
        $targetBlock.find(".description").addClass("past");
      } 
       if (getCurrentHourValue < timeAttr) {
        $targetBlock.find(".description").addClass("future");
      }  
      if (getCurrentHourValue == timeAttr) {
        $targetBlock.find(".description").addClass("present");
      }
      console.log(getCurrentHourValue)
      console.log(timeAttr)
      var txt = document.getElementById(`hour-${i+9}`);
      txt.childNodes[3].textContent = planner[`hour-${i+9}`];

    }
  };
  //local storage button function
  //addEventListener
  $(".saveBtn").on("click", function () {
    event.preventDefault();
    var parent = this.parentNode;
    var txt = parent.childNodes[3];
    var plannerText = txt.value
    var key = parent.id
    planner[key] = plannerText
    localStorage.setItem("planner", JSON.stringify(planner))

  });
  //get textarea value //event.target .closest() .find()
  //parse in JSON format
  //setItem into local storage

  //get localstorage item then populate page

  //run the functions
  getCurrentTime();
  setTimeColor();
});
