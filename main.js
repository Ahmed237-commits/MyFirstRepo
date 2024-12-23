window.onload=function (){
/*let datenow=new Date()
console.log(datenow)                                                                                                  
console.log(Date.now())
let years=Date.now()/1000/60/60/24/365
console.log(years)
console.log(datenow.getTime())
console.log(datenow.getFullYear())
console.log(datenow.getDate())
console.log(datenow.getMonth())
console.log(datenow.getDay())
console.log(datenow.getHours())
console.log(datenow.getMinutes())
console.log(datenow.getSeconds())
let datenow=new Date()
console.log(datenow)
datenow.setTime(100000000)
console.log(datenow)
console.log("#".repeat(66))
datenow.setFullYear(2020)
console.log(datenow)
//Date.Parse
//Gnerte functions
function* genereteyeares(){
    yield 1
    yield 2
    yield 3
    }
//Delegete
    function* genereletterss(){
yield "A"
yield "B"
yield "C"
}
function* genereteAll(){
    yield* genereteyeares()
yield* genereletterss()
yield* [4, 5, 6];
}
//Modules|Import|Export
export let a=1
export function Hello(){
return `Hello`
}
function* generetor(){
let index=14;
while (true){
yield index++;
}
}
let gen=generetor()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log("#".repeat(40))
function* getnumbers(){
yield*[1,2,2,2,3,4,5]
}
let setnums=new Set(getnumbers())
console.log(setnums)
function* getletters(){
    yield*["A","B","B","B","C","D"]
    }
    let setletters=new Set(getletters())
    function* GenAll(){
yield*setnums
yield* setletters
}
let Delegete= GenAll()
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
console.log(Delegete.next())
//Json "Java Script Object Notation"
//Api
//JSON.Parse
const myjsonobjectfromsever='{"username":"Eissa","Age":14}';
console.log(typeof myjsonobjectfromsever)
console.log(myjsonobjectfromsever)
const myJsObject=JSON.parse(myjsonobjectfromsever)
console.log(typeof myJsObject)
console.log(myJsObject)
//JSON.Stringify
const MyjsonObjectToSever=JSON.stringify(myJsObject)
console.log(typeof MyjsonObjectToSever)
console.log(MyjsonObjectToSever)
//Java Script Is a-Single-Threaded
//Synchronos
console.log("A")
console.log("B")
alert("Hello")
console.log("C")
//Asynchronos
setTimeout(()=> console.log("hello"),3000) 
console.log("A")
console.log("B")
console.log("C")
//Web API Concept:LIFO "Last In First Out" And It Is Synchronos 
setTimeout(()=> console.log("hello"),0) 
function One(){
  console.log("One")  
}
function Two(){
    One();
    console.log("two")  
  }
  function Three(){
    Two();
    console.log("three")  
  }
  Three();  
//Event Loop And Call Back
setTimeout(()=>{
console.log(mylet)
},0)
let mylet=10
mylet+=10
//AJAX
let req=new XMLHttpRequest()
console.log(req)
let req=new XMLHttpRequest()
console.log(req)
req.open("Get","test.json")
console.log(req)
let request=new XMLHttpRequest();
request.open("GET","test.json",true)
request.send()
console.log(request)
//Callback Pyramid
//Promise
//CORS
const MyPromise=new Promise(function (resolved,rejected){
let connect=true;
if(connect===false){
resolved("Good for you")
}else{
rejected(Error('Bad'))
}
}).then((resolvedvalue) =>console.log(`Good ${resolvedvalue}`),
(rejectedvalue) =>console.log(`Bad ${rejectedvalue}`)
);
console.log(MyPromise)
*/
let theemployees=["Ahmed","Ali","Mohmmed","Mazen","Aliaa","Mahmoud","Gerges","Gamal"] 
// Ahmed Ali Aliaa
 for (let i=0;i<theemployees.length;i++){
if(theemployees[i][0][0]=="A"){
console.log("Good")
}
 }
console.log("ffff")































}