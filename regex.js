// removing chars with regex

const arr = "naber ueütükdf '^+'^% Mahmut_";


function remove(str) {
    str = str.replace(/[^a-zA-Z ]/g, "")
    console.log(str)
    return str;
}

remove(arr);