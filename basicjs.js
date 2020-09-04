/*------------Map--------
const arr = [{name:"sonali",age:20}, {name:"krishna",age:21}]
const person_names = arr.map(person => person.name)
console.log(person_names);
*/

/*---filter-----
const fruits = [
    {name:"orange",color:"orange"},
    {name:"apple",color:"red"},
    {name:"mango",color:"yellow"}
]
const filteredFruits = fruits.filter(fruit => fruit.color ==="yellow");
console.log(filteredFruits)
*/

/*-------find---

let x = [
    {name:"sonali", age:20},
    {name:"lucky", age:15}
]
let d = x.find(obj => obj.name === "lucky");

console.log(d);
*/

//----some----//

//let names = ["sona","deepika","chanchal","krishna"];
//let f=names.some(name => name.length > 4)
//console.log(f);



//------Every----//
//let names = ["sona","deepika","chanchal","krishna"];
//let f =names.every(name => name.length > 4)
//console.log(f);


//---Reduce---//
//const numbers = [1,2,3,4,5]
//let sum = 0
//for(let i=0;i<numbers.length;i++){
//   sum += numbers[i]
//}
//console.log(sum);
//let R = numbers.reduce((sum, numbers) => sum + numbers,0);
//console.log(R);



//----for Each method------//

//const arr = [1,2,3,4,5]
//arr.forEach(item => console.log(item))


/* let arr1 = [{name:"sonali", age:26},{name:"krishna",age:26}]
let temp = []
for(let i = 0; i < arr1.length; i++){
    temp.push(arr1[i].name)
}
console.log(temp);
alt+shift+a//shortcut of multiline comment
*/



//------findIndex------//
/*var ages = [3, 10, 18, 20];

var found=ages.find(Element=>Element<10);

console.log(found);
*/



//-----includes----//
/*var str = "Hello world, welome to the India.";
var n = tr.includes("world");

console.log(n);
*/



//------key value entity--------//

/*let users=[
    {name:"sonali",
      id:112233,
      salary:50000,
      department:"web developer"},
      {name:"krishna",
        id:12345,
        salary:55000,
        department:"java developer"},
]
console.log(object.values(users))
console.log(object.keys(users))
console.log(object.entries(users))
*/
//let entries = object.entries(...users);
//console.log(entries);

//let entries = object.value(...users);
//console.log(entries);



//-------spice------//
/*var fruits=["apple","kiwi","graps"]

fruits./*-----map-----
const arr = [{name:"sonali", age:20},{name:"krishna",age:21}]
const person_name = arr.map(person => person.name)
console.log(person_names);
*/


/*---filter-----
const fruits = [
    {name:"apple",color:"red"},
    {name:"watermelon",color:"green"},
    {name:"kiwi",color:"darkgreen"}
]
const filteredFruits = fruits.filter(fruit => fruit.color === "red");
console.log(filteredFruits)
*/


/*-----find-----

let x = [
    {name:"chanchal",age:11},
    {name:"anurag",age:15}
]
    let d= x.find(obj => obj.name ==="anurag");

    console.log(d);
    */


    //-----some----//

    //let names = ["sonali","kumari"];
    //let f=names.some(name => name.length > 4)
    //console.log(f);


    //---Every------//
    //let names = ["sonali","kumari"];
    //let f=names.every(name => name.length > 4)
    //console.log(f);


    //------Reduce-----//
    //const numbers = [1,2,3,4,5]
    //let sum = 0
    //for(let i=0;i<numbers.length;i++){
    //   sum += numbers[i]    
    //}
    //console.log(sum);
    //let R = numbers.reduce((sum,numbers) => sum + numbers, 0);
    //console.log(R);



    //------For Each Method-----//

    //const arr = [1,2,3,4]
    //arr.forEach(item => console.log(item))


    /* let arr1 = [{name:"sonali",age:20}, {name:"krishna",age:23}]
    let temp =[]
    for (let i=0; i< arr1.length; i++){
        temp.push(arr1[i].name)
    }
    console.log(temp);
    alt+shift+a//shortcut of multiline comment
    */




    //-----findIndex------//
    /*var ages = [3, 10, 18, 20];

    var found= ages.find(Element=>Element<10);

    console.log(found);
    */



    //------includes-----//
    /*var str = "Hello world, Welcome to the universe.";
    var n = str.includes("World");

    console.log(n);
    */


    //------key value entity------//
    /*let users=[
        {name:"sonali",
        id:123456,
        salary:50000,
        department:"java developer"
    },
    {name:"krishna",
      id:123456,
       salary:60000,
       department:"fullstack developer"
    },
    ]
    console.log(object.values(users))
    console.log(object.keys(users))
    console.log(object.entries(users))
    */
   //let entries=object.entries(...users);
   //console.log(entries);

   //let entries=object.value(...users);
   //console.log(entries);



   //-----splice-----//

   /*---var fruits=["banana","kiwi","apple"]

   fruits.splice(2,1,"lemon","mango")
   console.log(fruits);
   */


   /*------push------

   let array=["chanchal","krishna","deepika","sonali"]
   array.push("krishna")

   console.log(array);
   array.pop("krishna")
   console.log(array);
   */


   /*-----shift and unshift----

   let array=["chanchal","krishna","deepika","sonali"]

   array.shift();
   array.unshift();
   console.log(array);



   splice(2,1,"lemon","mango")
   console.log(fruits);
   */


   /*------push-------
   let array=["chanchal","krishna","deepika","sonali"]
   array.push("krishna")

   console.log(array);
   array.pop("krishna")
   console.log(array);
   */





   /*-----shift and unshift------*/
   let array=["chanchal","krishna","deepika","sonali"]
   array.shift();
   array.unshift();
   console.log(array);

