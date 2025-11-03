document.addEventListener("click", ourFunc())

function ourFunc() {
    alert("thank you for clicking")
}



function doubleMe(x){
    return x*2
}
document.writeln(doubleMe(20))


function createMultiply(multiplier){
    return function(x) {
        return x * multiplier
    }
}
let doubleme = createMultiply(2)
let tripleeme = createMultiply(3)
let quadrupleme = createMultiply(4)

document.writeln(doubleme(10))
document.writeln(tripleeme(10))
document.writeln(createMultiply(10)(10))

