var histogram = function(results) {
    let highest = Math.max(...results);
    let str = "";
    for(let i = highest; i >= 0; i--){
        str += Array(6).fill(0).map((a, idx) => (results[idx] === i && results[idx] !== 0) ? results[idx] : (results[idx] < i || results[idx] === 0) ? " " : "#").join(" ").replace(/\s*$/,"")+"\n";
    }
    return (highest) ?  str += "-----------\n1 2 3 4 5 6\n" : "-----------\n1 2 3 4 5 6\n";
}