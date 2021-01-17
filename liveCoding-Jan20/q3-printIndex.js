const arrayOfInts = [1,2,3,4,5,6,1,2,3,4,5,0,2,391,2,3,2,34,34,2,12,345,5,7,34];
const arrayOfStrings = ['this', 'is', 'a', 'word', 'and', 'another', 'word', 'and', 'again'];


/* Write a function that will loop through a list of integers and print the index of each element after 
a 3 second dlelay.

Types of loops:
  - for
  - while
  - do while
  - for.. in (should use on objects only)
  - for .. of (arrays, iterators)
  - forEach (arrays only)

What do we need?
  Way to loop through
  Index of each loop
  A way to delay the output
  A way to print out the result

  Topics:
    setTimeout: https://javascript.info/settimeout-setinterval
                https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    
    loops:
      for loop - https://javascript.info/while-for#the-for-loop
      forEach - https://javascript.info/array-methods#iterate-foreach
      for of - https://javascript.info/array#loops (talk about but don't use it here); */


for(let i = 0; i < arrayOfInts.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000 * (i + 1));
}


/* arrayOfInts.forEach( async (each, index) => {
  setTimeout(() => {
    console.log(index);
  },3000 * (index + 1))
}) */