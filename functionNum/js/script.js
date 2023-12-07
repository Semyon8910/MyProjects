function digits(number) {
    var temp = number;
    var digitsNumber = 0 ;
    while (temp>10) {
        temp=temp/10;
        digitsNumber++;
    }
    return digitsNumber;
}

//console.log(digits("2300"));
var grades = [3,4,5,6,7,45,34,56,456,34,56,7,8,9,56]

function bigNumber(numbers) {
    var topNumber = numbers[0];
    for (var i=1; i<numbers.length; i++) {
        if (numbers[i] > topNumber) {
            topNumber = numbers[i];
        }
    }
    return topNumber;
}

console.log(bigNumber(grades));
