console.log("Person 1 shows ticket");
console.log("Person 2 shows ticket");
const promiseWifeBringsTicks=new Promise((resolve,reject)=> {
    setTimeout(()=> {
   resolve("tickets")
    },3000)
})
const getPopcorn=promiseWifeBringsTicks.then((t)=> {
    console.log("I got the tickets")
    console.log("We should go in")
    console.log("I want to eat something")
   return new Promise((resolve,reject)=> resolve(` ${t} and popcorn`))
})
 const getButter=getPopcorn.then((t)=> {
    console.log("I got some popcorn")
    console.log("We should really go in")
    console.log("I want Butter in Popcorn")
   return new Promise((resolve,reject)=> resolve(` ${t} and Butter`))
})
getButter.then((t)=> console.log(t))
console.log("Person 4 shows ticket")
console.log("Person 5 shows ticket")