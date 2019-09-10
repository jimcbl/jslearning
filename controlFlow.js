// {
//     statement_1;
//     statement_2;
//     .
//     .
//     .
//     statement_n;
//  }

while (x < 10) {
  x++;
}

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

// Condition Statement
if (condition_1) {
  /* statements here */
} else if (condition_2) {
  /* statements here */
} else {
  /* statements here */
}

switch (fruittype) {
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
