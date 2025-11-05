document.addEventListener("click", function(){   // anonumous function
    alert("thank you for clicking")
})




document.addEventListener("click", () => ("thank you for clicking"))    // aero functalert



let myNumbers = [10, 50, 100]
// let doubleNumbers = myNumbers.map(function(x){
//     return x * 2 
// })
// console.log(doubleNumbers) 

let doubleNumbers = myNumbers.map((x) => x * 2 )
console.log(doubleNumbers) 



let john = {
    firstName: "john",
    lastName: "Doe" ,
    driveCar() {
        let imFunction = ()=> console.log(this) 
        imFunction()
        console.log(this.firstName + " " + this.lastName + " is driving a car")
    }
}

john.driveCar()