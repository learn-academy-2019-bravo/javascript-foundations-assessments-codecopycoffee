# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.
String, number, boolean, undefined, null, NaN. I think string, number, and boolean are primitive.

2. What's the difference between =, ==, and === in JavaScript?
One equal sign assigns value. Two equal signs indicate same data type. Three equal signs indicate same data type and value.

3. What is the difference between an array's index and length?
The index is the position of value within the array, and the length is the number of values in an array. So if desserts = [pie, cookie, cupcake], cupcake is at an index of 2 but the length of the array is 3.

4. What are the three parts of a for loop?
Where it starts, how many times it loops, and in what increment/direction it loops. So in the example for (i=0;, i<desserts.length; i++) we're saying that we start at the index of 0, loop three times (one loop for each item in the array), and move forward by one through the array.

5. What is a function's declaration, argument, and call?
A function declaration is the name and definition of the function. The argument is what gets passed in, the information the function needs to execute its instructions. The call is the name of the function followed by parentheses, which tells the function you built to run.

6. What are the three main steps in saving work to github?
git add filename, git commit -m "message about what you changed", git push

7. What is the terminal command to move directories?
cd

8. Do you have a suggestion for a Check In question?
What is something that never fails to make you happy?

9. What was your favorite topic this week?
Higher order functions. It's really challenging, but I feel like now we're building on the foundation we've laid and are really starting to actually program.

10. What was your "A-ha!" moment this week?
I feel like I have a-ha moments followed by total confusion every hour, sometimes several times in the same hour. The one that's standing out in my mind is when we were building the pig latin translators and I realized I had to switch the last two lines of our function so that return was on the last line, because that was telling our function to stop running before outputting the translation on the page.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
I expected it would print inside because local variables take precedence over global variables of the same name within a function, but the actual result was undefined. When I moved var text = 'inside' above console.log(text) I got the result I expected, so it has something to do with the order for sure, but I don't understand why the result is undefined rather than outside in its current state.

2. What is JSON? How does it relate to javascript objects?
JSON stands for JavaScript Object Notation and it's a way of writing name/value pairs similar to the way objects are constructed in JavaScript. It's a syntax with two methods, .parse() and .stringify(), and is used for data interchange.

3. Describe a closure, what is it good for and how do you recognize one?
A closure is the combination of a function and the lexical environment within which that function was declared. So when you have a function that is declared within another function, a closure gives the inner function access to the outer function's local variables. When you see an inner function with the keyword return or pass, you know you're looking at a closure. Closures are used to enable data privacy and for stateful functions.
