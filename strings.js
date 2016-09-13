
// Shouter
// Create a function that takes a single argument: whatToShout.
//  The function 
// should return an all caps version of the string it's given,
//  with three exclamation points !!! at the end.

// Given the text shouter('as you can hear i am whispering'),
//  the function should return "AS YOU CAN HEAR I AM WHISPERING!!!".


function shouter(whatToShout) {
  // your code here
  return whatToShout.toUpperCase() + '!!!';
  
}

// Text normalizer
// Create a function called textNormalizer that takes a single argument, text.
//  The function should return an all lowercase string.
//   Any spaces at the beginning or end of text should be 
//   stripped off.

// When called like this `textNormalizer(" let's GO SURFING NOW 
//   everyone is learning how ") should return the 
// value "let's go surfing now everyone is learning how".

function textNormalizer(text) {
  // your code here
  return text.toLowerCase().trim();
}

// Typo corrector
// Write a function called typoCorrector that takes three arguments: 
// sourceText, target, newValue. When called like this:

// typoCorrector("cats dogs cats dogs", "cats", "dogs");
// this function should return dogs dogs dogs dogs.
//  It should also log how many replacements it's going 
//  to make before making them. So running it like above 
//  would log "Replacing two instances of 'cats' 
// with 'dogs'" in the JavaScript console.


function typoCorrector(sourceText, target, value) {
  // your code here
  var matchPattern = new RegExp(target, 'g');
    var matchCount = (sourceText.match(matchPattern) || []).length;
  console.log(
    "Replacing " + matchCount + " instances of " + target + " with " + value);
  return sourceText.replace(matchPattern, value);
}