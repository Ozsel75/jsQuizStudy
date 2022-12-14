// finding longest word 
const arra = "naber ueütükdf '^+'^% Mahmut_";

function findLongestWord(str) {
    // var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    //   return currentWord.length > longest.length ? currentWord : longest;
    // }, "");
    // return longestWord;

    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    

    return longestWord[0];
  }
  
  let r = findLongestWord(arra);

  console.log(r)