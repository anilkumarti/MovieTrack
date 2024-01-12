console.log("Person 1 shows ticket");
console.log("Person 2 shows ticket");
const preMovie= async ()=> {
    const promiseWifeBringsTicks=new Promise((resolve,reject)=> {
        setTimeout(()=> {
       resolve("tickets")
        },3000)
    })
    const getPopcorn= new Promise((resolve,reject)=> resolve(` Best popcorn`))
    const getButter= new Promise((resolve,reject)=> resolve(`  Best Butter`));
    const getColdDrinks= new Promise((resolve,reject)=> resolve(`Best colddrinks`))
     
     
    let ticket=await promiseWifeBringsTicks;
    console.log(`I got the ${ticket}`)
        console.log("We should go in")
        console.log("I want to eat something")
   
    let popcorn=await getPopcorn;
    console.log(`I got some ${popcorn}`)
    console.log("We should really go in")
    console.log("I want Butter in Popcorn");
    let butter=await getButter;
    console.log(`I got some ${butter}`);
    console.log("But I want colddrink");
    let coldDrink=await getColdDrinks;
    console.log(`Here is your colddrink ${ coldDrink}`)
    console.log("Now we should go in. ")

    return ticket;
} 
preMovie().then((m)=> console.log(m))

console.log("Person 4 shows ticket")
console.log("Person 5 shows ticket")