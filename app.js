console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i+=2){
    console.log(i);
}
    //You could do Exercise 1 like this as well.
/*for(let i = 1; i <= 100; i++)
    if(i % 2 == 0){
        continue;}
        else{
            console.log(i)
        }*/
        
    // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i,'FIZZBUZZ');
    }
    else if(i % 3 == 0){
        console.log(i,'FIZZ');
    }
    else if(i % 5 == 0){
        console.log(i,'BUZZ');
    }
    else{
        console.log(i);
    }
}

 //Exercise 3 Section
    console.log("EXERCISE 3:\n==========\n");
//exercise 1 in a while loop
console.log("EXERCISE 3a: \nexercise 1 in a while loop\n");
    let i = 1
    while(i < 100){
        if(i % 2 != 0){
            console.log(i);
    }
    i++;
    }

    //exercise 1 in a do while loop
     console.log("EXERCISE 3a: \nexercise 1 in a do while loop\n");
    let x = 1
    do {
        if(x % 2 != 0){
            console.log(x);
    }
    x++;
    }while(x < 100);

    //exercise 2 in a while loop
    console.log("EXERCISE 3b: \nexercise 2 in a while loop\n");
     i = 1;

    while(i <= 100){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(i,'FIZZBUZZ');
        }
        else if(i % 3 == 0){
            console.log(i,'FIZZ');
        }
        else if(i % 5 == 0){
            console.log(i,'BUZZ');
        }
        else{
            console.log(i);
        }
        i++;
    }

    //exercise 2 in a do while loop
    console.log("EXERCISE 3b: \nexercise 2 in a do while loop\n");

    let y = 1
do{
    if(y % 3 == 0 && y % 5 == 0){
        console.log(y,'FIZZBUZZ');
    }
    else if(y % 3 == 0){
        console.log(y,'FIZZ');
    }
    else if(i % 5 == 0){
        console.log(y,'BUZZ');
    }
    else{
        console.log(y);
    }
    y++;
    
}while(y <= 100);


console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500

let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 0; i <= n; i++){
    if(i == numberToFind){
        console.log(`Found ${numberToFind} within 1 - ${n}!`);
        break;
    }
    if(i== n){
        console.log(`Did not find ${numberToFind} within 1 - ${n}`);
    }
}

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++){
    let output = "";

    if(i % fizzDivisor == 0){
        output += "FIZZ";
    }
    if(i % buzzDivisor == 0){
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);