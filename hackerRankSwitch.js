/* Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

Function Description

Complete the getLetter function in the editor below.

getLetter has the following parameters:

string s: a string
Returns

string: a single letter determined as described above
Input Format

Stub code in the editor reads a single string denoting  from stdin.

Constraints

, where  is the length of .
String  contains lowercase English alphabetic letters (i.e., a through z) only.
Sample Input 0

adfgt
Sample Output 0

A
*/
function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]){
        case ("a" || "e" || "i" || "o" || "u"):
            return "A";
            break;
        
        case ("b" || "c" || "d" || "f" || "g"):
            return "B";
            break;
        
        case ("h" || "j" || "k" || "l" || "m"):
            return "C";
            break;
        
        default:
            return "D";
    }
    
    
    return letter;
}
