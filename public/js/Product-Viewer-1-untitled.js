$(function () {
  var $image = $(".product-image .image");
  var currImage;
  $(".product-thumbnails img").on("click", function () {
    $image.css("background-image", "url(" + $(this).attr("src") + ")");
    currImage = "";
  });
  $(".product-thumbnails img").hover(
    function () {
      currImage = $image.css("background-image");
      $image.css("background-image", "url(" + $(this).attr("src") + ")");
    },
    function () {
      if (currImage !== "") {
        $image.css("background-image", currImage);
      }
    }
  );

  // Zoom in on mouseover and zoom out on mouseout
  $(".product-image .image")
    .on("mouseover", function () {
      $(this).css("transform", "scale(2)");
    })
    .on("mouseout", function () {
      $(this).css("transform", "scale(1.0)");
    })
    .on("mousemove", function (e) {
      $(this).css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%",
      });
    });
});
