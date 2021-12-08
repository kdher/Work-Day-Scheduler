var today = moment();


$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    $(".saveBtn").on("click", function(){
        var planText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, planText);

    }); 
    
    $("#7am .description").val(localStorage.getItem("7am"));
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12am .description").val(localStorage.getItem("12am"));
    $("#13pm .description").val(localStorage.getItem("13pm"));
    $("#14pm .description").val(localStorage.getItem("14pm"));
    $("#15pm .description").val(localStorage.getItem("15pm"));
    $("#16pm .description").val(localStorage.getItem("16pm"));
    $("#17pm .description").val(localStorage.getItem("17pm"));
    $("#18pm .description").val(localStorage.getItem("18pm"));
    // add more rows for more time
    function timeChange(){
        var currentHour = moment().hour(); // Number
        
        $('.time-block').each(function(){
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour){
                $(this).addClass("past");
            } else if (idTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
    timeChange();
    var timeInterval = setInterval(timeChange, 1000);


});