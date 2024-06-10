/*Exercise 1*/

temperature = 25

if(temperature < 0) {
    console.log("It's freezing")
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's Cold")
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's Mild")
} else if (temperature > 25) {
    console.log("It's warm")
}


switch (true) {
    case temperature < 0:
        console.log("It's freezing")
        break;

    case temperature <= 15:
        console.log("It's Cold")
        break;

    case temperature <= 25:
        console.log("It's Mild")
        break;

    case temperature > 25:
        console.log("It's Warm")
        break;

    default:
        break;
}


/* -------------------------------------*/
/*Exercise 2*/

num = 5

if(num % 2 == 0 && num % 3 == 0){
    console.log("Divisible by both")
} else if (num % 3 == 0){
    console.log("Divisible by 3")
} else if (num % 2 == 0 ){
    console.log("Divisible by 2")
} else {
    console.log("Not divisible")
}


switch (true) {
    case num % 2 == 0 && num % 3 == 0:
        console.log("Divisible by both")
        break;

    case num % 2 == 0:
        console.log("Divisible by 2")
        break;

    case num % 3 == 0:
        console.log("Divisible by 3")
        break;        
    default:
        console.log("Not Divisible")
        break;
}

/* ----------------------------------*/
/*Exercise 3*/


for(i = 1; i <= 10; i++){
    console.log("num "+ i)
}

/* ----------------------------------*/


for(i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

/* ----------------------------------*/


sum= 0

for(i = 1; i <= 100; i++){
    sum  += i
    
}
console.log("Sum: "+ sum)

/* ----------------------------------*/

const numbers = [1, 2, 3, 4, 5]

for(i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

/* ----------------------------------*/

const numbers1 = [3, 7, 2, 5, 10, 6]
largest = numbers1[0]

for(i = 1; i < numbers1.length; i++){
    if(numbers1[i] > largest){
        largest = numbers1[i]
    }
}
console.log(largest)

/* ----------------------------------*/

/*Exercise 4*/

i = 1
while (i <= 10){
    console.log("No "+ i)
    i++

}

/* ----------------------------------*/

i = 2

while (i <=20){
    console.log(i)
    i += 2
}

/* ----------------------------------*/

sum = 0
i = 1
while(i <= 100){
    sum += i
    i++
}

console.log("Sum of numbers: " + sum)

/* ---------------------------------------*/

i = 1
while(i *5 < 50){
    console.log(i * 5)
    i++
}