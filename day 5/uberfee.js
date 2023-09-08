{
let baseFee = .44
let cities = ["vellore", "chennai", "bangalore" ]
let uberRates = [2500, 300, 4500]

let customerName = "sanjay" 
let customerCity = "chennai" 

console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerCity) {
 
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
 
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)
}

