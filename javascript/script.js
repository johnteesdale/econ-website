var onOff = 0;


function hamburgerMenuOpen() {

  if (onOff < 1) {
    $(".hamburgerLine").css("background-color", "#10416B");
    $("#navMenu").show();
    console.log("work");
    onOff=1;
    console.log(onOff);
    $(document).bind('scroll',function () {
       window.scrollTo(0,0);
  });
  } else {
      $("#navMenu").hide();
      $(".hamburgerLine").css("background-color", "#A70505");
      onOff = 0;
      $(document).unbind('scroll');
  }
}

function tabOption1(){
  $(".tabOption1").css("display", "grid");
  $(".tabOption2").css("display", "none");
  $(".tabOption3").css("display", "none");

  console.log("work1");
}

function tabOption2() {
  $(".tabOption1").css("display", "none");
  $(".tabOption2").css("display", "grid");
  $(".tabOption3").css("display", "none");
  console.log("work2");
}

function tabOption3() {
  $(".tabOption1").css("display", "none");
  $(".tabOption2").css("display", "none");
  $(".tabOption3").css("display", "grid");
  console.log("work3");
}
