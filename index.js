class Numbers {
  constructor(data) {
    if (typeof data === "string") {
      this.data = data.split(",").map((number) => Number(number));
    } else {
      this.data = data;
    }
  }
  count() {
    return this.data.length;
  }
  printNumbers() {
    this.data.forEach((number, index) => {
      console.log(`Index ${index}: ${number}`);
    });
  }
  odds() {
    return this.data.filter((number) => number % 2 !== 0);
  }
  evens() {
    return this.data.filter((number) => number % 2 === 0);
  }
  sum() {
    return this.data.reduce((acc, number) => acc + number, 0);
  }
  product() {
    return this.data.reduce((acc, number) => acc * number, 1);
  }
  greaterThan(target) {
    return this.data.filter((number) => number > target);
  }
  howMany(target) {
    return this.data.filter((number) => number === target).length;
  }
}
const str = prompt(
  "Enter some numbers separated by commas, like this",
  "1,2,3,3,5,6"
);

const n1 = new Numbers(str);
console.log(`Count of numbers: ${n1.count()}`);
console.log("Numbers with their indexes:");
n1.printNumbers();
console.log("Odd numbers: " + n1.odds());
console.log("Even numbers: " + n1.evens());
console.log("Sum of numbers: " + n1.sum());
console.log("Product of numbers: " + n1.product());
console.log("Numbers greater than 3: " + n1.greaterThan(3));
console.log("Count of the number 3: " + n1.howMany(3));