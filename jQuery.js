$(function () {
  let $centerX = $("html").width() / 2;
  let $centerY = $("html").height() / 2;
  $("window").resize(
    ($centerX = $("html").width() / 2),
    ($centerY = $("html").height() / 2)
  );
  $("html").mousemove((e) => {
    $("#border").css(
      "transform",
      `rotateX(${(
        ((e.pageY - $centerY) * -1) /
        $("#border").outerHeight() /
        2
      ).toFixed(2)}deg) rotateY(${(
        (e.pageX - $centerX) /
        $("#border").outerWidth() /
        2
      ).toFixed(2)}deg)`
    );
  });
});
