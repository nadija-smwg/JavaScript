let pets = [
    {name: "Meow", species: "cat", age: 2},
    {name: "bark", species: "dog", age: 1},
    {name: "purrsloud", species: "", age: 8},
]

console.log(pets.push({name: "huh", species: "dog", age: 12}))

let ourtest = pets.map(nameOnly)
function nameOnly(x) {
    return x.name
}
console.log(ourtest)


let dogs = pets.filter(dogonly)
function dogonly(x) {
    return (x.species === "dog")    
}

console.log(dogs)

let babyDogs = pets.filter(dogonly).filter(onlyBabies).map(nameOnly)
function onlyBabies(x) {
    return x.age < 3 
}
console.log(babyDogs)
