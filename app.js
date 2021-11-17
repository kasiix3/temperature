//kelvin
const kelvin = 0;
//celcius = kelvin - 273
const celcius = kelvin - 273;
//fahrenheit = celcius * (9/5) + 32
var fahrenheit = celcius * (9/5) + 32;
//fahrenheit is rounded down
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
