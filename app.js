function updateProductNumber(isIncreasing,product,price){
    // debugger;
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value
    if(isIncreasing == true){
        productNumber = parseInt(productInput.value) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerHTML = productNumber * price;
    // calculate total
    calculteTotal();
}
function getInputValue(product){
    const phoneInput = document.getElementById(product+'-number')
    const productNumber = phoneInput.value;
    return productNumber;
}
// calculate total price tax;
function calculteTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const TaxtotalPrice = subTotal / 10;
    const totalPrice = subTotal + TaxtotalPrice;
    // update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-total").innerText = TaxtotalPrice;
    document.getElementById("total").innerText = totalPrice;
}
// handle phone increase decrease events
document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductNumber(true,"phone",1219);
})
document.getElementById("phone-minus").addEventListener("click",function(){
    updateProductNumber(false,"phone",1219);
})
// handle case increase decrease events
document.getElementById("value-update").addEventListener("click",function(){
    updateProductNumber(true,"case",59);
})
document.getElementById("case-minus").addEventListener("click",function(){
    updateProductNumber(false,"case",59);
})


function taxTotalcal(productPrice,inputId){
    const phoneTotal = getInputValue(inputId) * productPrice;
    const parcentige = parseInt(phoneTotal / 10);
    const taxInput = document.getElementById("tax-total");
    const taxValue = Math.floor(taxInput.innerText);
    const lessThenToMobileprice = taxValue - parcentige;
    taxInput.innerText = lessThenToMobileprice;
}
// remove item;
const removeItem = document.getElementsByClassName('remove-item')
for(const remove of removeItem){
    remove.addEventListener("click",function(e){
        e.target.parentNode.parentNode.style.display = "none"
        const casePrice = e.target.parentNode.children[1].childNodes[1].innerText
        let subTotalInput = document.getElementById("sub-total");
        const subTotalPrice = subTotalInput.innerText
        const currentTotalPrice = parseInt(subTotalPrice) - parseInt(casePrice);
        subTotalInput.innerText = currentTotalPrice;
        // total input change
        let totalInput = document.getElementById("total");
        totalInput.innerText = currentTotalPrice;
        // tax total changes
        if(e.target.classList[1] == 'phone'){
            taxTotalcal(1219,"phone")
        }else{
            taxTotalcal(59,"case")
        }
    })
}