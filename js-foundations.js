// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const divisibleByThree = (num) => {
  if (num % 3 === 0) {
    console.log(`${num} is divisible by 3`);
  } else {
    console.log(`${num} is divisible by 3`)
  }
}

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
const helloMe = {
  first_name: "Gina",
  last_name: "Verrastro",
  fuel: "coffee",
  amount: 2,
  getDescription: function() { return `${this.first_name} ${this.last_name} runs on ${this.fuel} and has enjoyed ${this.amount} cups today.` }
}

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
const groceryItems = ["lemonade", "yogurt", "bread", "cheese", "salami"]

const oneThreeFive = (groceryList) => {
  const newGroceries = []
  newGroceries.push(groceryList[0], groceryList[2], groceryList[4])
  const groceryString = newGroceries.join(", ")
  return groceryString
}

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
const alphabetSoup = (str) => {
  const alphabetical = str.split("").sort().join("")
  return alphabetical
}

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const animalNums = (numbers, animals) => {
  const finalArray = []
  for (i=0; i<numbers.length; i++) {
    for (i=0; i<animals.length; i++) {
      finalArray.push(`${numbers[i]} ${animals[i]}`)
    }
  }
  return finalArray
}

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
const numbers = [1, 3, 13, 29, 87]

const timesFive = (nums) => {
  const multiplied = []
  for (i=0; i<nums.length; i++) {
    multiplied.push(nums[i] * 5)
  }
  return multiplied
}
