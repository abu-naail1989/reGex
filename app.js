// Using the Test Method
// Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

// If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// The test method here returns true.

// Apply the regex myRegex on the string myString using the .test() method.

// Match Literal Strings
// In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

let testStr1 = "Hello, my name is Kevin.";
let testRegex1 = /Kevin/;
testRegex.test(testStr1);
// This test call will return true.

// Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN.

let wrongRegex = /kevin/;
wrongRegex.test(testStr1);
// This test call will return false.

// A future challenge will show how to match those other forms as well.

// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

// Match a Literal String with Different Possibilities
// Using regexes like /coding/, you can look for the pattern coding in another string.

// This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

// This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result1 = petRegex.test(petString);

// Ignore Case While Matching
// Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

// Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

// You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // Change this line
let result2 = fccRegex.test(myString);

// Extract Matches
// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

"string".match(/regex/);
/regex/.test("string");
// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line