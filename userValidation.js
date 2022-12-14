/*  username 4 - 25 char long
    it must start with letter
    it can only contain letters, and the underscore char
    it cannot end with underscore

    if valid return true 
    */

user = "ha__sdeA_"

function validation(str) {
if (
    str.length >= 4 && str.length <= 25
    && (/[a-zA-Z]/).test(str[0])
    && (/^\w+$/).test(str)
    && (/[a-zA-Z0-9]/).test(str.slice(-1))
    
) {
    console.log("login succesful")
    return true;
} else {
    console.log("login failed")
    return false;
}

}

validation(user);