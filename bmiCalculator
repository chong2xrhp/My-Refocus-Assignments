//BMI Calculator
//wgk is for Weight in Kilo grams
//feet is for Height in foot
let wkg = 67;
let feet = 5.4;

function calbmi(Kgs,feetInMeter){
    //Convert feet to meters and raise to exponential power of 2
    let x = Math.pow(feetInMeter * 0.3048,2); // get the value in meters
    let bmi = Kgs/x; //Get the bmi is Kilograms divided by x
    return bmi;
}


let bmiResult = calbmi(wkg,feet);
if(bmiResult < 18.5) {
    console.log(`BMI ${bmiResult} \nis in the underweight range.`);
} else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    console.log(`BMI ${bmiResult} \nis in the healthy weight range.`);
} else { console.log(`BMI ${bmiResult} \nis in the obese range`); } 
