function fn() {
  let input = document.getElementById("input").value;
  let pref = document.querySelector('p')

  function factorial(input) {
    if (input == 0) {
      return 1;
    } else {
      return input * factorial(input - 1);
    }
  }
  if (input >= 0) {
    const result = factorial(input);
    pref.innerText ="Factorial of "+ input+" is : "+ result;
  } else {
    alert("Enter a positive inputber.");
  }
}

