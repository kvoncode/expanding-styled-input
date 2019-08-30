
// each time on keypress do following
$("#text-field").keypress(function (e) { 

  let offset = 10;
  let widthLimit = 300;

  let inputText = $("#text-field").val();

  $("#width-measure").text(inputText);

  let newWidth = $("#width-measure").outerWidth() + offset;
  

  let oldWidth = $("#text-field").width();

  if (newWidth > widthLimit) {
    return;
  } else if (newWidth > oldWidth) {
    $("#text-field").width(newWidth);
  }
  
});
