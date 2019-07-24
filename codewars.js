
var test = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];

var sortArr = function (array) {
var result = [];
while (array.length > 0) {
var min = Math.min(...array)
var min_loc = array.indexOf(min)
result.push(min)
console.log(array[min_loc])
var has_been = false;
temp_a = [];

for (i in array) {
if (has_been == false && array[i] == min) {
has_been = true;
} else {
temp_a.push(array[i])
}
}
array = temp_a
}
return result;
};

console.log(sortArr(test))