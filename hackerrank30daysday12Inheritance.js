/* 
 Day 12: Inheritance
Objective

Today, we’re delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video!
Task

You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

    A Student class constructor, which has 4 parameters:

    A string, firstName.
    A string, lastName.
    An integer, id.
    An integer array (or vector) of test scores, scores.

    A char calculate() method that calculates a Student object’s average and returns the grade character representative of their calculated average:

Grading Scale
Grading Scale
Input Format

The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments. It also calls the calculate method (which takes no arguments).

You are not responsible for reading the following input from stdin:
The first line contains firstName, lastName, and id, respectively. The second line contains the number of test scores. The third line of space-separated integers describes scores.
Constraints

    1 <= |firstName|,|lastName| <= 10
    |id| = 7
    0 <= score,average <= 100

Output Format

This is handled by the locked stub code in your editor. Your output will be correct if your Student class constructor and calculate() method are properly implemented.
Sample Input

1
2
3

	

Heraldo Memelli 8135627
2
100 80

Sample Output

1
2
3

	

Name: Memelli, Heraldo
ID: 8135627
Grade: O

Explanation

This student had 2 scores to average: 100 and 80. The student’s average grade is https://latex.codecogs.com/svg.latex?\frac{(100&space;+&space;80)}{2} = 90. An average grade of 90 corresponds to the letter grade O, so our calculate() method should return the character’O’.
*/



class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);

        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
    calculate(){
    let sum = 0;
    let average = 0;
    let grade = ("");
    let length = this.scores?.length;
    
        for (let i = 0; i < length; i++) {
            sum += this.scores[i];
        }
        
    average = sum/this.scores?.length;
    
            if (90 <= average && average <= 100) {
            grade = 'O';
        } else if (80 <= average && average < 90) {
            grade = 'E';
        } else if (70 <= average && average < 80) {
            grade = 'A';
        } else if (55 <= average && average < 70) {
            grade = 'P';
        } else if (40 <= average && average < 55) {
            grade = 'D';
        } else {
            grade = 'T';
        }
        return grade;
    
}
}