let birth_month = 1;
let birth_year = 1980;


const current_month = new Date().getMonth();
let current_year = new Date().getFullYear();
current_year -= 1;

var age = current_year - birth_year;
console.log(`Patient's age: ${age}`)
if(birth_month <= current_month) {
    age++;
    
}
console.log(`Patient's Accurate Age: ${age}`);
