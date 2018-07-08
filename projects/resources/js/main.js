// DOG YEARS CALCULATOR
// Based on https://pets.webmd.com/dogs/how-to-calculate-your-dogs-age

function myFunction() {
  var dogSize = document.getElementById("size").value;

  var dogSize_value;
  if (document.getElementById("small").checked) {
    dogSize_value = document.getElementById("small").value;
  } else if (document.getElementById("medium").checked) {
    dogSize_value = document.getElementById("medium").value;
  } else if (document.getElementById("large").checked) {
    dogSize_value = document.getElementById("large").value;
  }

  var dogAge = parseInt(document.getElementById("age").value);

  var otpt = document.getElementById("output").innerHTML;

  // BASIC RULES

  // DELETE? Doesn't work anyway
  if (dogAge < 1 || dogAge > 16) {
    document.getElementById("output").innerHTML =
      "ERROR: Type in an age between 1 and 16.";
  }
  //

  if (dogAge !== "") {
    document.getElementById("output").innerHTML =
      "ERROR: Please type an age between 1 and 16.";
  }

  // First 5 years
  if (dogSize_value === "small" && dogAge === 1) {
    document.getElementById("output").innerHTML =
      "Your dog is 15 in human years.";
  }
  if (dogAge === 1 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 15 in human years.";
  }
  if (dogAge === 1 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 15 in human years.";
  }

  if (dogAge === 2 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 24 in human years.";
  }
  if (dogAge === 2 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 24 in human years.";
  }
  if (dogAge === 2 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 24 in human years.";
  }

  if (dogAge === 3 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 28 in human years.";
  }
  if (dogAge === 3 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 28 in human years.";
  }
  if (dogAge === 3 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 28 in human years.";
  }

  if (dogAge === 4 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 32 in human years.";
  }
  if (dogAge === 4 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 32 in human years.";
  }
  if (dogAge === 4 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 32 in human years.";
  }

  if (dogAge === 5 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 36 in human years.";
  }
  if (dogAge === 5 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 36 in human years.";
  }
  if (dogAge === 5 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 36 in human years.";
  }

  // SMALL 6-16
  if (dogAge === 6 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 40 in human years.";
  }
  if (dogAge === 7 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 44 in human years.";
  }
  if (dogAge === 8 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 48 in human years.";
  }
  if (dogAge === 9 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 52 in human years.";
  }
  if (dogAge === 10 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 56 in human years.";
  }
  if (dogAge === 11 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 60 in human years.";
  }
  if (dogAge === 12 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 64 in human years.";
  }
  if (dogAge === 13 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 68 in human years.";
  }
  if (dogAge === 14 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 72 in human years.";
  }
  if (dogAge === 15 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 76 in human years.";
  }
  if (dogAge === 16 && dogSize_value === "small") {
    document.getElementById("output").innerHTML =
      "Your dog is 80 in human years.";
  }

  // MEDIUM 6-16
  if (dogAge === 6 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 42 in human years.";
  }
  if (dogAge === 7 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 47 in human years.";
  }
  if (dogAge === 8 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 51 in human years.";
  }
  if (dogAge === 9 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 56 in human years.";
  }
  if (dogAge === 10 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 60 in human years.";
  }
  if (dogAge === 11 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 65 in human years.";
  }
  if (dogAge === 12 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 69 in human years.";
  }
  if (dogAge === 13 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 74 in human years.";
  }
  if (dogAge === 14 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 78 in human years.";
  }
  if (dogAge === 15 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 83 in human years.";
  }
  if (dogAge === 16 && dogSize_value === "medium") {
    document.getElementById("output").innerHTML =
      "Your dog is 87 in human years.";
  }

  // LARGE 6-16
  if (dogAge === 6 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 45 in human years.";
  }
  if (dogAge === 7 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 50 in human years.";
  }
  if (dogAge === 8 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 55 in human years.";
  }
  if (dogAge === 9 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 61 in human years.";
  }
  if (dogAge === 10 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 66 in human years.";
  }
  if (dogAge === 11 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 72 in human years.";
  } else if (dogSize_value === "large" && dogAge === 12) {
    document.getElementById("output").innerHTML =
      "Your dog is 77 in human years.";
  }
  if (dogAge === 13 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 82 in human years.";
  }
  if (dogAge === 14 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 88 in human years.";
  }
  if (dogAge === 15 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 93 in human years.";
  }
  if (dogAge === 16 && dogSize_value === "large") {
    document.getElementById("output").innerHTML =
      "Your dog is 120 in human years.";
  }

}
