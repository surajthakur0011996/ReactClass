// // Definition 
// // Arrow Function

// const test = () => {
//     return(
//         <>
//             <h1>heading</h1>
//             <p>para</p>
//         </>
//     );
// }

// export default test

// // Template Literals 
// var name = "John";
// var message = "Hello my name is" + name + "that is it";

// var name = "Doe";
// var message = `Hello my name is ${name} that is it`;

// // Var Let Const


// ES5 in 2009
// ES6 in 2015

// ES5
// var 

// abd 

// ES6 let and const


// ES 5

// function Demo(){

// }

// ES6
// const Demos = () => {
//     return(
//         <>
//             <h1>heading</h1>
//             <p>para</p>
//         </>
//     );
// }

// object destructring 
const obj = {
    firstname: 'Abhishek',
    lastname: 'Kumar',
    age: 28,
    address: 'Mohali',
    fullName: ()=>{
     return `${obj.firstname} ${obj.lastname} `;
    },
    full: function fullName() {
        return `${this.firstname} ${this.lastname} `;
    }
};

// without 
// console.log(obj.full());

// with

let {address,firstname,lastname,age,fullName} = obj;
//console.log(address,firstname,lastname,age,fullName());

//Difference between let, var and const.

//console.log(a);
//var a = 40;
//let a = 8;
//console.log(a);

// function show() {
//     let b = 20;
//     let a = 30;
//     if(a > b) {
//         let c = 44;
//         console.log(c);
//     }
//     console.log('b', b);
// }
// show();
// console.log(b);
//console.log('b', b);


const abc = 40;

function abcd() {
    const abc = 20;
    console.log(abc);
    {
        const abc = 60;
    console.log(abc);
    }
}
abcd();
console.log(abc);

// function show() {
//     let b = 20;
//     let a = 30;
//     if(a > b) {
//         let c = 44;
//         console.log(c);
//     }
//     console.log('b', b);
// }
// show();
// console.log(b);
// console.log('b', b);


// let a = 40;
// const abc = 9;
// function show() {
//     let b = 20;
//     let a = 30;
//     if(a > b) {
//         let c = 44;
//         console.log(c);
//     }
//     console.log('b', b);
// }
// show();
// console.log(b);

