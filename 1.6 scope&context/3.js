let john = {
    firstName: "john",
    lastName: "Doe" ,
    driveCar() {
        function imFunction () {
            console.log(this)
        }
        imFunction()
        console.log(this.firstName + " " + this.lastName + " is driving a car")
    }
}

john.driveCar()   // methode call the function

function breathe(){
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled")
   
}

breathe.call(john)   // function call the methode
