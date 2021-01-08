let proudect = [
{ name:"Creme" , price: 4},
{ name:"Orea" , price: 4},
{ name:"Dates" , price: 4}
]

let cart=[]
let total = 0;
function add(index){
    let proudects = proudect[index]
    cart.push(proudects)
    let list = document.getElementById("list") ;

    list.innerHTML+=`<li> ${proudects.name} ${proudects.price}</li>`
   


    let price =proudects.price
    total= total+price
    document.getElementById("total").innerText = total

    
}
    
