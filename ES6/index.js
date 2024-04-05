// anything decleard outside the curly braces as global scope
// anything decleard inside the curly braces as block scope
// const firstName = "David"
// const course = "Software development."
// const school = "GMC"
// const sentence = "My name is " + firstName + " i am a student of " + school + " currently studying " + course 
// console.log(sentence)
// const sentencetwo = `my name is ${firstName}, i am currently studying ${course} at ${school}`
// console.log(sentencetwo)



// console.log(`This is a 
// multi-line
// string`)

// const initbal = 10000
// const cutbal = 30000
// const ttlbal = `${initbal + cutbal}`
// console.log(ttlbal)

// const nickName = "GODspeed"
// const passion = "Caligraphy"
// const sentence3 = `My name is ${nickName}, and i have a passion for ${passion}`
// console.log(sentence3)

// const age = 34
//  age <= 17 ? console.log("can't vote") : console.log("can vote")

//  const job = undefined
//  job == "dev" ? console.log("500k") : console.log("mini wage")

//  const childAge = 50
//  childAge <= 10 ? console.log("free food") : 
//  childAge >= 11 && childAge <=17 ? console.log("1k") :
//  childAge >=18  && childAge <= 30 ? console.log("2k") :
//  console.log("5k")

//  const profit = (cp,sp) => {
//     return (sp - cp)
//  }

//  const perprofit = (cp, sp) => {
//     let profit = sp - cp
//     let percentprofit = (profit/cp) * 100 
//     return (percentprofit) 
//  }
//  console.log(perprofit(5000,12000))


// const favFood = [ "Afang", "rice", "Tacos", "goat-meat", "pasta" ]
// const David = favFood[0]
// console.log(David)
// const omoh = favFood[4]
// console.log(omoh)
// const [David,chritiana,Nikke,Tboy,Omoh] = favFood
// console.log(David)
// console.log(chritiana)
// console.log(Nikke)
// console.log(Tboy)
// console.log(Omoh)
// const grades = ["A1", "B2", "B3", 'C4', "C5", 'C6', "D7", "E8", "F9","G10"]
//  const [David,chritiana,nike,Tboy,Omoh,idris,teteh,promt,toyiib,loid] = grades
// console.log(David)
// console.log(Tboy)
// console.log(nike)
// console.log(toyiib)
// console.log(idris)
// console.log(chritiana)
// console.log(teteh)
// console.log(promt)
// console.log(loid)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// const [first, second, third, fourth, ...rest] = numbers
// console.log(rest)
// rest[2]
// console.log(rest[2])


// const person = {
//     fullName : "Etim David Okon",
//     mail : "etimdavid407@gmail.com",
//     gender : "Male"
// }
// const {fullName : fname,mail,gender} = person
// console.log(fname)
// console.log(mail)
// console.log(gender)

// const person2 = {
//     haircolor : "black",
//     hobbies : ["caligraphy","programming","sport"],
//     height :  "176.32mm"
// }

// const person3 = {
//     ...person,...person2
// }
// console.log(person3)



// const students = [
//     {
//         name: "Etim",
//         phone : 8092938788,
//         gender : "male",
//         acct : 300044
//     },
//     {
//         name: "Idris",
//         phone : 827282718179,
//         gender : "male",
//         acct : 300022

//     },
//     {
//         name: "Teeboy",
//         phone : 827298261817,
//         gender : "female",
//         acct : 301100
//     },
//     {
//         name: "Victor",
//         phone : 92782927291,
//         gender : "female",
//         acct : 344000
//     },
//     {
//         name: "Liod",
//         phone : 90363572652,
//         gender : "female",
//         acct : 60000
//     }
// ]

// const findStudentGEN = (gender) => {
//     return students.find( (student) => student.gender == gender)
// }
// console.log(findStudentGEN("female"))

// const findStudent = (name) => {
//     return students.find( (student) => student.name  == name )
// }
// console.log(findStudent("Etim"))

// const findStudentphone = (phone) => {
//     return students.find( (student)  => student.phone == phone )
// }
// console.log(findStudentphone(8092938788))



// const printName = () => {
//     return students.forEach( (DEV) => alert(DEV.name) )
// }
// printName()

// const inBal = ()  => {
//     return students.forEach( (BAl) => alert(BAl.acct**2) )

// }
// inBal()

// const products = [

//     {
//         name : "milk",
//         price: 15,
//     },
//     {
//         name : "water",
//         price: 9
//     },
//     {
//         name : "bread",
//         price: 5,
//     },
//     {
//         name : "fish",
//         price: 7,
//     },
//     {
//         name : "juice",
//         price: 3.5,
//     }

// ]

// const cheapProduct = () => {
//     return products.filter( (product) => product.price < 10)
// }
// console.log(cheapProduct())

const numbers = [5, 10, 15, 20, 25, 30]
const response = numbers.reduce( (totalValue, currentValue ) => totalValue + currentValue)
console.log(response)

const string = [ "Dav", "id", "tboy" ]
const developer = string.reduce( (totalValue, currentValue) => totalValue + currentValue)
console.log(developer)