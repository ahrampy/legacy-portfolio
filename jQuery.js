$(function () {
  let $centerX = $("html").width() / 2;
  let $centerY = $("html").height() / 2;
  let $border = $("#border");
  $("html").mousemove((e) => {
    $border.css(
      "transform",
      `rotateX(${(
        ((e.offsetY - $centerY) * -1) /
        $border.outerHeight() /
        2
      ).toFixed(2)}deg) rotateY(${(
        (e.offsetX - $centerX) /
        $border.outerWidth() /
        2
      ).toFixed(2)}deg)`
    );
  });
});
