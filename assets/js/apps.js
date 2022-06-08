//current day
$("#currentDay").text(moment().format("MMMM Do YYYY"));

var today = new Date();
var currentTime = today.getHours();
console.log(currentTime);

$(document).ready(function () {
  //Save to local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".textEntry").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });
// storeing the current text entry in local storage
  $("#hr-9 .textEntry").val(localStorage.getItem("hr-9"));
  $("#hr-10 .textEntry").val(localStorage.getItem("hr-10"));
  $("#hr-11 .textEntry").val(localStorage.getItem("hr-11"));
  $("#hr-12 .textEntry").val(localStorage.getItem("hr-12"));
  $("#hr-13 .textEntry").val(localStorage.getItem("hr-13"));
  $("#hr-14 .textEntry").val(localStorage.getItem("hr-14"));
  $("#hr-15 .textEntry").val(localStorage.getItem("hr-15"));
  $("#hr-16 .textEntry").val(localStorage.getItem("hr-16"));
  $("#hr-17 .textEntry").val(localStorage.getItem("hr-17"));
  //Change colors in text as day passes
  function updater() {
    var currentTime = today.getHours();
 
    $(".time-slot").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
      console.log(blockTime);
    });
  }
  updater();
});
