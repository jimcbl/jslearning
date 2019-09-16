function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [100, 2, 1, 5, 36];
console.log(bubbleSort(arr));

// do while
var a = 0;
do {
  a++;
  console.log(a);
} while (a <= 5);

//labeled
markLoop: while (theMark == true) {
  doSomething();
}

//break
for (var i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}

var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 5 && x === 5) {
      break labelCancelLoops;
    } else if (z === 5) {
      break;
    }
  }
}
