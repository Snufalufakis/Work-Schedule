//current day
$("#currentDay").text(moment().format("MMMM Do YYYY"));

var today = new Date();
var currentTime = today.getHours();

$(document).ready(function () {
  //Save to local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".textEntry").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  $("#hr9 .textEntry").val(localStorage.getItem("hr9"));
  $("#hr10 .textEntry").val(localStorage.getItem("hr10"));
  $("#hr11 .textEntry").val(localStorage.getItem("hr11"));
  $("#hr12 .textEntry").val(localStorage.getItem("hr12"));
  $("#hr1 .textEntry").val(localStorage.getItem("hr1"));
  $("#hr2 .textEntry").val(localStorage.getItem("hr2"));
  $("#hr3 .textEntry").val(localStorage.getItem("hr3"));
  $("#hr4 .textEntry").val(localStorage.getItem("hr4"));
  $("#hr5 .textEntry").val(localStorage.getItem("hr5"));
  //Change colors in text as day passes
  function updater() {
    var currentTime = today.getHours();
    $(".time-slot").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      if (blockTime < currentTime) {
        $(this).addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past").addClass("present");
      } else {
        $(this).removeClass("past", "present").addClass("future");
      }
    });
  }
  updater();
});
