// global variables are set here
var saveBtn = document.querySelector(".btnSave");
var input = document.querySelector("#task");
var text = document.querySelector("#text");
// var timeNow = moment().hour();

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// This functions listens for a click on the save button and logs the text input for 9am        
        var saveText= document.querySelector("#task");

        saveBtn.onclick = function(){
            var value = saveText.value;
    
            // console.log(key);
            console.log(value);

            // Places the item into local storage
            localStorage.setItem("value",value);
        }

    // Use this to retrieve the information from local storage
    var timeBlock = localStorage.getItem("value");
    console.log (timeBlock);
    var setTime = $(".input-text0");
    setTime.append(timeBlock);
    

// This is to change the CSS (color) for the past, present, and future times. 
    $(".time-block").each(function(){
        var timeNow = moment().hour();
        console.log(timeNow);

        if (timeBlock < timeNow){
            $(".time-block").removeClass(".future");
            $(".time-block").removeClass(".present");
            $(".time-block").addClass(".past");

        } else if (timeBlock === timeNow){
            $(".time-block").removeClass(".future");
            $(".time-block").removeClass(".past");
            $(".time-block").addClass(".present");
            
        } else{
            $(".time-block").removeClass(".past");
            $(".time-block").removeClass(".present");
            $(".time-block").addClass(".future");
        }
    });
    
