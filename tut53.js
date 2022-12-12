console.log("This is tutorial 53")

function greet(name,GreetText = "Greetings from Javascript"){
    let name1 = "Ramesh";
    console.log(GreetText +", " + name);
    console.log(name + " is a good boy.\n\n");

}

function sum (a,b,c){
    let d = a+b+c;
    return d;
    // console.log("Hello world!");          //This line will never execute.(Unreachable code)
    
}

let name1 = "HK";
let name2 = "NR";
let name3 = "PG";
let name4 = "BKB";
let GreetText1 = "Good morning";

greet(name1,GreetText1);
greet(name2,GreetText1);
greet(name3,GreetText1);
greet(name4);

let returnValue = sum(10,12,13);
console.log(returnValue);

let returnValue2 = greet(name1);
console.log(returnValue2);


// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");