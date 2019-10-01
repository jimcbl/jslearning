const range = (from, to) => {
  return {
    [Symbol.iterator]: function() {
      return this;
    },
    next: function() {
      if (from < to) {
        from++;
        return { value: from - 1, done: false };
      }
      return { done: true };
    }
  };
};

for (let i of range(1, 10)) {
  console.log(i);
}

//// even numbers
const list = evenNumbers();
console.log(list.slice(0, n));

const evenNumbers = () => {
  let index = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      index += 2;
      return { value: index, done: false };
    },

    take(n) {
      let values = [];
      for (let i = 0; i < n; i++) {
        values.push(this.next().value);
      }
      return values;
    }
  };
};
