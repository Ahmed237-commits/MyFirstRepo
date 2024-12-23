window.onload=function (){
/*
Defining Object
Dot notation Vs Bracket Notation
[1] object litral
*/
/*let user={
//proprties 
firstname:"ahmed",
lastname:"eissa",

//methods
getfullname:() => `Full Name: ${user.firstname} ${user.lastname}`

}
//Acssesin Object proprties   
console.log(user.firstname)//Dot nation
console.log(user["firstname"])//BRACKET NOTAION
console.log(user.getfullname())
//For In Loop
const user={
name:"Ahmed",
country:"Egypt",
age:37,
};
for (let info in user) {
console.log(user[info])
}
*/
//Constractor Function
/*function Phone(serial,color,price){
this.serial=serial;
this.color=color;
this.price=price-20;
}
let Pohon1=new Phone(123,"red",500)
console.log(Pohon1.price)
function Names(NewWorkers){
this.NewWorkers=NewWorkers
}
let ahmed=new Names("ahmed")
console.log(ahmed.NewWorkers)
//ProtoType
function User(name){
this.name=name;
this.welcome=function (){
    return `welcome ${this.name}`
}
}
let User1=  new User("ahmed");
let User2=new User("Ali")
console.log(User.prototype)
User.prototype.addtitle=function (){
return `hello ${this.name}`
}
User.prototype.hello="hello"
let MyObject={a:1,b:2}
console.log(MyObject)
class User{
//Static Proprty
    static counter=0;
constructor(name,email){
this.name=name
this.email=email;
User.counter++;
this.sayhello=function (){

    return `hello ${this.name}`

} 
}
static countObjects=function (){
    return `${this.counter} `
}
}
let User1=new User("Ahmed","Ahmed@gmil.com")
let User2=new User("Ahmed","Ahmed@gmil.com")
//let User2= User("Osama","Osama@gmail.com")//Error
console.log(User1)
console.log(User.countObjects())
class User{
    constructor(name,email){
        this.name=name
        this.email=email;
        User.counter++;
         sayhello(){
        
            return `hello ${this.name}`
       } 
    }
}
class Admis extends User{
constructor(name,email){
    super(name,email)
}
}
let admin1=new Admis("Osama","Ahmed@gmail.com")
const myObject={
a:1,
b:2,
};
Object.defineProperty(myObject,"c",{
writable:false, 
enumerable:true,
configurable:true,
value:500,
})
console.log(Object.getOwnPropertyDescriptor(myObject,"a"))
import {a,hello} from "./main.js";
console.log(a)
console.log(hello())
*/ 
 // // Ahmed Ali Aliaa
//  for (let i=0;i<theemployees.length;i++){
// if(theemployees[i][0][0]=="A"){
// console.log(`Hello ${theemployees[i]}`)
// }
// if (theemployees[i][2][0]=="M"){
// console.log(`Hello ${theemployees[i]}`)
// } 
// } 
// for(let j=0;j<theemployees.length;j++){
// console.log(`Hello ${theemployees[j]}`)
// }
// }
// let re=/\w+@gmail.\w+/ig;
// console.log(theemployees.match(re))
// let theajax=new XMLHttpRequest(); 
// theajax.onreadystatechange= function (){
//     if(this,this.readyState===4 && this.status===200){
// console.log(theajax.responseText)
// let Object=JSON.parse(theajax.responseText)
// console.log(Object["0"].Samsong1)
// class Samsongs{
//     constructor (name,price){
// this.name=name
// this.price=price    
// }
// }
// let thefirstPhone=new Samsongs(Object["0"].Samsong1,`${Object["1"].A15price + "pounds"} or The Price By Dollar =${Object["2"].DollarA15price+"$"}`)
// console.log(thefirstPhone)
// let thesecondPhone=new Samsongs(Object["0"].Samsong3,Object["1"].A25price + "pounds")
// console.log(thesecondPhone)
// }
// }
//  theajax.open("GET","phones.json",true)
//  theajax.send()
//  console.log(theajax)
// }
// let TheAdmins=["Ahmed","Mohmmed","Ali","Mahmoud"]
// function* Genretor(){
// yield* TheAdmins;
// }
// for(let i=0;i<TheAdmins.length;i++){
// console.log(TheAdmins[i])
// }
// let theGen=Genretor();
// console.log(theGen.next().value)
// console.log(theGen.next().value)
// console.log(theGen.next().value)
// console.log(theGen.next().value)
// let theinput=document.querySelector("input")
// let theButton=document.querySelector("button")
// theButton.onclick=function (){
// if(theinput.value==''){
// console.log("Bad")
// } else{
//     if(!isNaN(parseInt(theinput.value))==true){
// let thedate=new Date()
//         console.log("Good")
// let theinputDate=new Date(theinput.value)    
// console.log(theinputDate)
// let TheDateByYear=thedate.getFullYear()-theinputDate.getFullYear();
// console.log(TheDateByYear)
// theinput.value=''

// }else{
//         console.log("The Beast")

//     }
//     console.log(!isNaN(parseInt(theinput.value)))
// console.log(typeof theinput.value)
// }
// }
// 
let thenames=["Ahmed","Mohmmed","Ali","Asmaa"]
let themapfunction=thenames.map(function (element){
return element.startsWith("A") 
})
let thefilterfunction=thenames.filter(function (element){
    return element.startsWith("A") 
    })
let names=[1,2,3,1,2,3]
let Setnames=new Set(names)  
console.log(Setnames)
console.log(themapfunction)
console.log(thefilterfunction)
}