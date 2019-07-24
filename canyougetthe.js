function loop_size(node){
    //we have to create a place holder
    var holdMe = [];
    while(node && holdMe.indexOf(node)< 0){
      holdMe.push(node);
    node = node.next
    }
    
    var firstIndex = Math.max(0 , holdMe.indexOf(node));
     return holdMe.length - firstIndex;
      }