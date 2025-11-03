let myFavoriteNumber = 7
let myFavoriteNumbers = [1, 2, 9, 6]
let myWords = ["red", "white"]
let myPet = [{name: "meoow", species: "cat"}, {name: "bark", species: "dog"}]

myWords.push("black")
console.log(myWords)

let myName = "nadija"
console.log(myName.toUpperCase())

let myNumber = 7.89
console.log(myNumber.toFixed())

myWords.splice(0, 1)   //(index what i removed , how many item in this index)
console.log(myWords)

console.log(myFavoriteNumbers[2])
console.log(myPet[1].species)

myPet.push({name: "meow", species: "ct"})
console.log(myPet)
