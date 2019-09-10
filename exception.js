function getMonthName(month) {
  month = month - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  if (months[month]) {
    return months[month];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try {
  // statements to try
  myMonth = 13;
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  console.error(e); // pass exception object to error handler -> your own function
}

// throw statement
// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
};

// Create an instance of the object type and throw it
throw new UserException("Value too high");
