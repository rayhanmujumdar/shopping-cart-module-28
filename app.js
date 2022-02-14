document.getElementById("value-update").addEventListener("click",function(){
    // console.log("hello rayhan")
    const inputValue = document.getElementById("input-value");
    const updateValue = parseInt(inputValue.value) + 1;
    inputValue.value = updateValue;
    console.log(inputValue.value)
})