$(document).ready(function () {
  var $header_close = $(".close");

  $header_close.click(function () {
    $(".adver").css({
      display: "none",
    });
  });
});
