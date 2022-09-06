// $(document).ready(function () {});

$(function () {
    // let elem = document.querySelector("h4");
  
    let elem = $("#products h4");
  
    //   for (const item of elem) {
    //     console.log(item);
    //   }
  
    $("#products button")
      .first()
      .click(function () {
        // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
        $("#products .box").hide(1000);
        $("h4").css({
          "font-size": "100px",
          color: "crimson",
        });
      });
  
    $("#products button")
      .first()
      .next()
      .click(function () {
        // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
        $("#products .box").show(1000, function () {
          $("#products .box").css("background-color", "blue");
        });
      });
  
    $("#products button")
      .last()
      .click(function () {
        // console.log($(this).html(`<span class="text-danger">Bye bye</span>`));
        $("#products .box").toggle(1000, function () {
          $("#products .box").css("background-color", "blue");
        });
      });
  });
  