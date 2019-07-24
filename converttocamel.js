function capitalize(str, index) {
    str = str.split("");
    str[index] = str[index].toUpperCase();
    return str.join("");
}

function toCamelCase(str){
    for(var i = 1; i < str.length; i++){
        if(str[i-1] === "-" || str[i-1] === "_")
            str = capitalize(str, i);
    }
    return str.replace(/[\_\-]/g, "");
}