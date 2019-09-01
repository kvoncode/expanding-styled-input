"use strict";

$(document).ready(function() {
  // From below width choose the smallest
  const widthLimitConst = 300;
  const viewportWidth = $(window).width();
  console.log("TCL: viewportWidth", viewportWidth);

  const widthLimit =
    widthLimitConst > viewportWidth ? viewportWidth : widthLimitConst;

  const inputMargin =
    $("#text-field").outerWidth(true) - $("#text-field").outerWidth();

  console.log("TCL: inputMargin", inputMargin);
  // each time on keypress do following
  $("#text-field").keyup(function(e) {
    let inputText = $("#text-field").val();

    $("#width-measure").text(inputText);

    let newWidth = $("#width-measure").outerWidth();

    if ($("#text-field").outerWidth(true) < widthLimit) {
      
      let oldWidth = $("#text-field").width();

      if (newWidth > oldWidth) {
        $("#text-field").width(newWidth);
        console.log("TCL: newWidth", newWidth);
      }
    }
  });
});
