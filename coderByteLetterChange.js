let str = "NAber ya ^+2232 y0"

let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=> {
    if(char === "z"){
        return "a";
    } else {
        return String.fromCharCode(char.charCodeAt()+1)
    }
} )


let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, (char) => {
    char.toUpperCase();

    return vowelCapitalize;
})


