// global varaible set
var saveBtn = document.querySelector(".btnSave");
var input = document.querySelector(".input");
var timeNow = moment().hour();

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// This functions listens for a click on the save button and logs the text input for 9am
    saveBtn.addEventListener("click", function(saveInput){
        console.log("You've clicked me");
        
        var text = $(this).siblings(".input").val();
        console.log(text);
        
        var saveText= document.getElementsByClassName(".input").value;
        localStorage.setItem("input", input);
    });

    

    // Use this to retrieve the information from local storage
    localStorage.getItem("input");
 
// Using this to add the infromation from local storage to the correct time block
    var timeBlock = localStorage.getItem(input);
    var setTime = $(".time-block");
    setTime.append(timeBlock);

//This is to change the CSS (color) for the past, present, and future times. 
    $(".time-block").each(function(){
        console.log(timeNow);

        if (timeBlock < timeNow){
            $(this).removeClass(".future");
            $(this).removeClass(".present");
            $(this).addClass(".past");

        } else if (timeBlock === timeNow){
            $(this).removeClass(".future");
            $(this).removeClass(".past");
            $(this).addClass(".present");
            
        } else{
            $(this).removeClass(".past");
            $(this).removeClass(".present");
            $(this).addClass(".future");
        }
    });
    
