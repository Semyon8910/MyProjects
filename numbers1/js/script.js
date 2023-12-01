var number = prompt("enter the number from 1 to 9999");
if (number%10 == number) {
    alert("1 digit");
} else
if (number%100 == number) {
    alert("2 digits");
} else
if (number%1000 == number) {
    alert("3 digits");
} else {
    alert("4 digits");
}