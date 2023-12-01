var max = prompt("enter number MAX");
var den = prompt("enter number DEN");
var temp = 0;

while (temp<max) {
    temp++;
    if (temp%den == 0) {
        console.log(temp);
    }
}