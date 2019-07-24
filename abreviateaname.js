function abbrevName(name){
    return name.split (" ").map((word) => {return word[0];}).join('.').toUpperCase();
  
  
  }