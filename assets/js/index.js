// string
var myName = 'Max';
// myName = 28; // It's an Error   : 28 is not not assignable to type 'string'
// number
var myAge = 34;
// myAge = 'Max'; // It's an Error : Max is not assignable to type 'number'
// boolean
var hasHobbies = true;
// hasHobbies = 0; // It's an Error   : 1 is not assignable to type 'boolean'
// Assign Types
// let myRealAge; // <-- Any
var myRealAge; // <-- number
myRealAge = 27;
// myRealAge = '27'; // if myRealAge have assignment Number this line was reported an error of assignment.
// Array type
var hobbies = ["Cooking", "Sports", "Video Games"];
// hobbies = [100]; // Return an Error Type number[] is not assignale to type string[]
var myHobbies = ["Cooking", "Sport", "Video Games"];
console.log('myHobbies return : ', myHobbies); // <== Good Practise‡
console.log('type of myHobbies: ', typeof myHobbies); // <== Good Practise‡
// tuples
var address = ["Superstreet", 99]; // Order of types is very important.
// Enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // Return 1 = the index
// Any
var car = "BMW";
console.log('let car : any = "BMW" is a ', typeof car);
car = { "brand": "BMW", "model": "Z3", "year": 2013, "doors": 5 };
console.log('car = { "brand" : "BMW",  "model": "Z3", "year": "2013", "doors": 5 } is an ', typeof car);
