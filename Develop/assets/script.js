var saveBtn = document.querySelector(".btnSave");
var input = document.querySelector(".input");

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


    saveBtn.addEventListener("click", function(saveInput){
        console.log("You've clicked me");
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".input").val();
        console.log(text);
        var time = $(this).parent().attr(".time-block");
        console.log(time);

        var userText = input

        // right now is saving blank information
        var saveInput = function(){
            localStorage.setItem("input", JSON.stringify(input));  
    };
        saveInput();
    });
  
    JSON.parse(window.localStorage.getItem("input"));
