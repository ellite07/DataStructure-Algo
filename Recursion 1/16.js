

function revrse(str){
    //base
    if(str.length <= 1){
      return str;
    }
      // small ;
      var samll = revrse(str[0]);
  
    //return call
      return revrse(str.slice(1)) + samll; 
    
  }
  console.log(revrse("tushar"));