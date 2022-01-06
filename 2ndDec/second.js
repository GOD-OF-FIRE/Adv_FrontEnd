var count = 1;
var pin1 = document.getElementById("pin1");
var pin2 = document.getElementById("pin2");
var pin3 = document.getElementById("pin3");
var pin4 = document.getElementById("pin4");
var error_msg = document.getElementById("error_msg");
var success_msg = document.getElementById("success_msg");
var passcode = "1234";

function press_pin(key) {
  if (count == 1) {
    pin1.value = key;
  } else if (count == 2) {
    pin2.value = key;
  } else if (count == 3) {
    pin3.value = key;
  } else if (count == 4) {
    pin4.value = key;
  }
  count++;
}

function clear_pin() {
  count = 1;
  pin1.value = "";
  pin2.value = "";
  pin3.value = "";
  pin4.value = "";
  error_msg.innerHTML = "";
}

function enter_pin() {
  if (
    pin1.value == passcode[0] &&
    pin2.value == passcode[1] &&
    pin3.value == passcode[2] &&
    pin4.value == passcode[3]
  ) {
    pin1.value = "";
    pin2.value = "";
    pin3.value = "";
    pin4.value = "";
    error_msg.innerHTML = "";
    success_msg.innerHTML = "Correct";
    window.location.href = "second2.html";
  } else {
    count = 1;
    error_msg.innerHTML = "Incorrect";
    pin1.value = "";
    pin2.value = "";
    pin3.value = "";
    pin4.value = "";
  }
}
