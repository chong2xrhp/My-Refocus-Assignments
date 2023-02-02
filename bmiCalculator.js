//BMI Calculator
//wgk is for Weight in Kilo grams
//feet is for Height in foot
const myFunction = {

    calbmi(Kgs,feetInMeter){
       //Convert feet to meters and raise to exponential power of 2
       let x = Math.pow(feetInMeter * 0.3048,2); // get the value in meters
       let bmi = Kgs/x; //Get the bmi is Kilograms divided by x
       return bmi;
   }

}

module.exports = myFunction;