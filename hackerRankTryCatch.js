
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join(""); // reversing input
      
    } catch(err){
        console.log(err.message);
        
    } finally {
        console.log(s);
    }
}

