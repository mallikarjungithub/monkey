// // // // var data=new String();
// // // // this.data.name="malli";
// // // // console.log(data);

// // // // var malliDetails={
// // // //     firstName:"malli",
// // // //     lastName:"karjuna",
// // // //     get fullName(){
// // // //         return this.firstName + " " + this.lastName;
// // // //     }
// // // // }
// // // // console.log(malliDetails.fullName);

// // // var malliDetails={
// // //     firstName:"malli",
// // //     lastName:"karjuna",
// // //     email:"",
// // //     set  fullName(emailOutput){
// // //         return this.email=emailOutput;
// // //     }
// // // }
// // // malliDetails.email="mallikarjun327@gmail.com";
// // // console.log(malliDetails.fullNam


// // // normal fuction 
// // // function demo(){
// // //     alert("this is alert");
// // // }
// // // demo();


// // // expression function

// // // var test=function(a,b){
// // //     return a*b;
// // // }
// // // console.log(test(2,3));


// // // function as constructor

// // // var demo1=new Function("a","b","return a*b");
// // // console.log(demo1(3,4));

// // // function hoisting

// // // test();
// // //  function test(){
// // //     alert("this is function hoisting");
// // // }

// // // self invoking 

// // // (function(){
// // //     var a=3;
// // //     var b=4;
// // //     console.log(a+b);

// // // })
// // // ();

// // // var malliDetails = {
// // //     fName: "malli",
// // //     lName: "arjun",
// // // }
// // // var details = {
// // //     fName: "malli",
// // //     lName: "arjun",
// // // }
// // // var details1 = {
// // //     fullName: function () {
// // //         return this.fName + " " + this.lName;
// // //     }
// // // }
// // // console.log(details1.fullName.call(malliDetails));

// // var malliDetails = {
// //     fName: "malli",
// //     lName: "arjun",
// // }
// // var details = {
// //     fName: "malli",
// //     lName: "arjun",
// // }
// // var details1 = {
// //     fullName: function () {
// //         return this.fName + " " + this.lName;
// //     }
// // }
// // console.log(details1.fullName.apply(malliDetails));

// // 

// function para(a, b, c, d, e) {
//     return a + (b * c * d) + e;
// }
// console.log(para(3, 4, 5, 2, 2));

// function sumAll() {
//     var i;
//     var sum = 50;
//     for (i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sumAll(1, 3, 5));

// function mulAll() {
//     var i;
//     var mul = 50;
//     for (i = 0; i < arguments.length; i++) {
//         mul *= arguments[i];
//     }
//     return mul;
// }
// console.log(mulAll(1, 3, 5));


var data = [
    {
        slno: 1,
        name: "malli",
        email: "malli123@gmail.com",
        date: "27-09-2019"

    },
    {
        slno: 2,
        name: "mahi",
        email: "maheshi123@gmail.com",
        date: "27-09-2019"

    },
    {
        slno: 3,
        name: "lavanya",
        email: "lavanya123@gmail.com",
        date: "27-09-2019"

    },
    {
        slno: 4,
        name: "manu",
        email: "manu123@gmail.com",
        date: "27-09-2019"

    }
]
var result = JSON.stringify(data);
var resultParse=JSON.parse(result);
console.log(data);
console.log(result);
console.log(resultParse);

document.getElementById("employ");











