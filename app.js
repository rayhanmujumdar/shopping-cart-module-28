function updateCaseNumber(isIncreasing){
    // debugger;
    const inputValue = document.getElementById("input-value");
    let caseNumber = inputValue.value
    if(isIncreasing == true){
        caseNumber = parseInt(inputValue.value) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1
    }
    inputValue.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerHTML = caseNumber * 59;
    console.log(caseNumber);
    console.log(caseTotal.innerHTML)
}
document.getElementById("value-update").addEventListener("click",function(){
    updateCaseNumber(true);
})
document.getElementById("case-minus").addEventListener("click",function(){
    updateCaseNumber(false);
})