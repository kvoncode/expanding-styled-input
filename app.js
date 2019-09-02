$(document).ready(function() {
  const viewportWidth = $(window).width();
  const viewportLimit = viewportWidth - 10;

  const maxInputWidth = 400;

  const widthLimit =
    viewportLimit > maxInputWidth ? maxInputWidth : viewportLimit;

  const initialWidth = $("#text-field").outerWidth(true);

  const widthOffset = 12;

  $("#text-field").keyup(function(e) {
    const text = $("#text-field").val();

    $("#width-measure").text(text);

    const newWidth = $("#width-measure").outerWidth(true);

    if (newWidth + widthOffset > initialWidth && newWidth < widthLimit) {
      $("#text-field").outerWidth(newWidth + widthOffset, true);
    } else if (newWidth < initialWidth) {
      $("#text-field").outerWidth(initialWidth, true);
    }
  });
});
