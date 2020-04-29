console.log("script file is laoded!");
//add ready event listener to the document
$(document).ready(function() {
    console.log("document is ready to go!");
    //render the current time
    var getCurrentTime = function() {
        var currentTime = moment().format('LLLL');
        $('#currentDay').text(currentTime);
    }

    //update the hours div with past, present future classes
    var setTimeColor = function() {
        //get current time
        var getCurrentHourValue = moment().hours();
        //get all div
        var $allTimeBlocksArr = $(".row.time-block");
        //check current time
        for (var i = 0; i < $allTimeBlocksArr.length; i++) {
            var $targetBlock = $($allTimeBlocksArr[i]);
            var timeAttr = $targetBlock.attr('time');
            //compare time attr with current hour value
            if (getCurrentHourValue > timeAttr) {
                $targetBlock.find(".description").addClass('past');
            } else if (getCurrentHourValue < timeAttr) {
                $targetBlock.find(".description").addClass('future');
            } else if (getCurrentHourValue === timeAttr) {
                $targetBlock.find(".description").addClass('present');
            }
        }
    }

    //local storage button function
        //addEventListener
        //get textarea value //event.target .closest() .find()
        //parse in JSON format
        //setItem into local storage

    //get localstorage item then populate page

    //run the functions
    getCurrentTime();
    setTimeColor();

});