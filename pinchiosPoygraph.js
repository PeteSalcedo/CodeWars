function extendPinocchioNose(words){
    words = words.toLowerCase().split(" ");
    for(let i = 0; i < words.length-1; i++)
        if(words[i+1].indexOf(words[i]) > -1)
            return true;
    return false;
}