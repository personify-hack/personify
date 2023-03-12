var random = Math.floor(Math.random() * 2000) + 2000;
$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, random);
});
