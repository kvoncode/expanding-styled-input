$("#text-field").keypress(function(e) {
  let offset = 10;
  let maxWidth = 300;

  let inputText = $("#text-field").val();

  $("#width-measure").text(inputText);

  let newWidth = $("#width-measure").outerWidth();
  console.log("TCL: newWidth", newWidth);

  let currentWidth = $("#text-field").width();
  console.log("TCL: currentWidth", currentWidth);

  if (newWidth + offset > maxWidth) {
    return;
  } else if (newWidth + offset > currentWidth) {
    $("#text-field").width(newWidth + offset);
  }
});
