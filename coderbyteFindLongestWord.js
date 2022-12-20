const lonestWord = (str) => {

    const arr = str.replace(/[^a-zA-Z ]/g, "").split(" ");

    arr.sort((a,b)=>{
        return b.length - a.length
    })

    return arr[0]
}