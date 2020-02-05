// transform an array
 function capitalizeFirst (string) {
  return string[0].toUpperCase() + string.slice(1)
}


// const customerNames = customers.map(function (customer) {
//   // return customer.name.first[0].toUpperCase()+
//   // customer.name.first.slice(1)+
//   // ' '+
//   // customer.namelast[0].toUpperCase()+
//   // customer.namelast.slice(1)
//   return capitalizeFirst(customer.name.first)
//   ' ' +
// capitalizeFirst(customer.name.last)
// })
// console.log(customerNames)
// const customerListItems = customerNames.map(function (name))

// const ul document.createElement (ul)
// for (const li of customer)
function loadPage() {
// iterate over customers, define, use my template 
    for (const customer of customers) {
    const image = customer.picture.large
    const name = customer.name.first + ' ' + customer.name.last
    const email = customer.email
    const location = customer.location.street +
        ', ' + customer.location.city +
        ' ' + customer.location.state.postcode
    const DOB = customer.dob
    const dateBecameCustomer = customer.registered

        

        document.querySelector('#customers').insertAdjacentHTML('beforeend', customerHTML(image, name, email, location, DOB, dateBecameCustomer))
    }
}
// return block of HTML and use block to take each parameter and insert into those values
function customerHTML(image, name, email, location, DOB, dateBecameCustomer) {
    return `
    <div id=profileCard> 
        <div> <img class='style' src= ${image}> </div>
        <div> ${name} </div>
        <div> ${email} </div>
        <div> ${location} </div>
        <div> ${DOB} </div>
        <div> ${dateBecameCustomer} </div>
        </div>
   `
}
loadPage()







