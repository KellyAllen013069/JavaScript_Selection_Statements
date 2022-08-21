console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

//Exercise 1
let fav = 8;
let min = 1;
let max = 100;
let input = prompt("Guess a number between 1 and 100");
alert(`You guessed ${input}`);

input = parseInt(input);


if (isNaN(input) || input > max || input < min) {
 
  if (input < fav){
    console.log("Number to low");
  }
    else if (input > fav) {
      console.log("Number to high");
    }
      else {
        console.log("Congrats"); 
      }
  //else {
   // console.log("You didn't follow the instructions.")
 // }
}

  //Exercise 2

  let birthMonth = prompt("What is your birth month?");

  switch (parseInt(birthMonth)) {
    case 12:
    case 1:
    case 2: 
      console.log("You were born in the winter!");
      break;

    case 3:
    case 4:
    case 5: 
      console.log("You were born in spring!");
      break;

    case 6:
    case 7:
    case 8: 
      console.log("You were born in summer!");
      break;

    case 9:
    case 10:
    case 11: 
      console.log("You were born in fall!");
      break;
    
  }

  //exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

/* if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
} */

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type= "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve"
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "other"
}




/* if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
} */

switch(colorId) {
  case "BL":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default: 
    color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

