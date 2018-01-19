function isValidArray(array) {
    return array.length > 0;
}

function sorting(numbers) {
    if (isValidArray(numbers)) {
        numbers.sort(function(a,b){
          return a - b;
        });
        return numbers;
    }
    else {
        throw new Error('Input is invalid');
    }
}



module.exports = {
    sorting: sorting
};