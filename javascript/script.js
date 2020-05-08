var onOff = 0;
var drop = 1;

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


function dropdownMenu() {
  console.log("click work");
  if (drop < 2) {
    $(".dropdownMenu").css("position", "absolute");
    $(".dropdownMenu").show();
    drop = 3;
    console.log(drop);
  } else {
  $(".dropdownMenu").hide();
  drop = 1;
  console.log("else worked");
}
}

function fractionalReserveBankingCalculator() {
  var bankBalance = document.getElementById("bankBalance").value
  var reserveReq = document.getElementById("reserveReqNum").value
  if(isNaN(bankBalance) === false && isNaN(reserveReq) === false) {
    $(".output").css("color", "#070707");
    parseFloat(bankBalance);
    parseFloat(reserveReq);
    var economy = bankBalance*(1/(reserveReq/100));
    document.getElementById("economy").innerHTML = "$"+economy
  } else {
    console.log("else");
  }
}


function stockMarketCalculator() {
  var start = document.getElementById("start").value
  var years = document.getElementById("years").value
  if(isNaN(start) === false && isNaN(years) === false) {
    $(".output").css("color", "#070707");
    start = parseFloat(start);
    years = parseFloat(years);
    var stockReturn = (start + (start*.1*years));
    document.getElementById("return").innerHTML = "$"+stockReturn
  } else {
    console.log("else");
  }
}
