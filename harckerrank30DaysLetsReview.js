function processData(input) {
    //Enter your code here
    let evens="";
    let odds="";
    
    var array = input.split("\n");
    
   // console.log(array)
  for(let i=1; i<array.length; i++){
    //console.log(array[i])
    let evens="";
    let odds=""; 
    for(let j=0; j<array[i].length; j++){
        //console.log(array[i][j])
        if(j%2 == 0){
            evens = evens +(array[i][j]);
        } else{
            odds += (array[i][j]);
        }
        
    }
    console.log(evens + " " + odds);
       
  }
  
  
    
} 