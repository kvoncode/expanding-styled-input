"use strict";

$(document).ready(function() {
  // From below width choose the smallest
  const widthLimitConst = 400;
  const viewportWidth = $(window).width();

  const widthLimit =
    widthLimitConst > viewportWidth ? viewportWidth : widthLimitConst;

  const initialInputWidth = $("#text-field").outerWidth(true);
  const initialInputInnerWidth = $("#text-field").width();

  const widthOffset = 2;

  // each time on keypress do following
  $("#text-field").keyup(function(e) {
    let inputText = $("#text-field").val();

    $("#width-measure").text(inputText);

    let newWidth = $("#width-measure").outerWidth(true);

    // compare outerWidth, but assign width

    if (newWidth < widthLimit && newWidth > initialInputWidth) {
      $("#text-field").width($("#width-measure").width() + widthOffset);
      console.log("TCL: newWidth", newWidth);
    } else if (newWidth < initialInputWidth) {
      $("#text-field").width(initialInputInnerWidth);
    }
  });
});
