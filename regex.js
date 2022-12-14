// removing chars with regex

const arr = "naber ueütükdf '^+'^% Mahmut_";


function remove(str) {
    str = str.replace(/[^a-zA-Z ]/g, "") // ^ means all
    console.log(str)
    return str;
}

remove(arr);