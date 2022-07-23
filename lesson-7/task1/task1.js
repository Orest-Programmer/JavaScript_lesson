"use stric"
function btnTask(){
    let elements = document.getElementsByTagName('li');
    let amountLi = document.getElementById('amount-li');

    for(let i = 0; i < elements.length; i++){
        elements[i].innerText = i;
    }
    
    amountLi.innerText += elements.length;
}