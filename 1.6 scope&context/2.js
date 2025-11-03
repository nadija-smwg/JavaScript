// let myName = "nadija"

// function amazingfunction() {
//     if (2 + 2 == 4){
//         myName = "sudu"                    [ //   SHOW THE ERROR  ]
//     }
// }
// amazingfunction()
// console.log("in the global scope",myName)
   
function amazingfunction() {
    if (2 + 2 == 4){
       let myName = "sudu"
    }
}
myName = "nadija"        // BUT THIS IS CORRECT

amazingfunction()
console.log(myName)




//   let HAS BLOCK SCOPE  / VAR HAS FUNCTION SCOPE