$(document).ready(function () {
  // ===== hamburger menu =====
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    $("#nav").toggleClass("active");
  });

  // ===== duck generator =====

  // generate image
  var click = false;
  $("#click-duck").click(function () {
    getapi("https://random-duck.api.stdlib.com/api@1.2.1/quack/gif/");
    $("#random-duck").show();
    click = true;
  });

  // hide/show button
  var degrees = 0;
  $("#close").click(function () {
    degrees += 180;
    $(this).css({
      transform: "rotate(" + degrees + "deg)",
    });
    if (click == true) {
      $("#click-duck").toggle();
      $("#random-duck").toggle();
    } else {
      $("#click-duck").toggle();
    }
  });
});

async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();
  // Copies data into array
  document.getElementById("random-duck").src = data.url;
}
