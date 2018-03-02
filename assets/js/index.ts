// string
let myName = 'Max';
// myName = 28; // It's an Error   : 28 is not not assignable to type 'string'

// number
let myAge = 34;
// myAge = 'Max'; // It's an Error : Max is not assignable to type 'number'

// boolean
let hasHobbies = true;
// hasHobbies = 0; // It's an Error   : 1 is not assignable to type 'boolean'


// Assign Types
// let myRealAge; // <-- Any
let myRealAge: number; // <-- number
myRealAge = 27;
// myRealAge = '27'; // if myRealAge have assignment Number this line was reported an error of assignment.

// Array type
let hobbies = ["Cooking", "Sports", "Video Games"];
// hobbies = [100]; // Return an Error Type number[] is not assignale to type string[]

let myHobbies: any[] = ["Cooking", "Sport", "Video Games"];
console.log('myHobbies return : ', myHobbies); // <== Good Practise‡
console.log('type of myHobbies: ', typeof myHobbies); // <== Good Practise‡

// tuples
let address: [string, number] = ["Superstreet", 99]; // Order of types is very important.

// Enum
enum Color {
    Gray,
    Green,
    Blue
}

let myColor: Color = Color.Green;
console.log(myColor); // Return 1 = the index

// Any
let car : any = "BMW";
console.log('let car : any = "BMW" is a ', typeof car);
car = { "brand" : "BMW",  "model": "Z3", "year": 2013, "doors": 5 };
console.log('car = { "brand" : "BMW",  "model": "Z3", "year": "2013", "doors": 5 } is an ', typeof car);