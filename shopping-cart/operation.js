let phnPlusBtn = document.querySelector('#phnplus_btn');
let phnMinusBtn = document.querySelector('#phnminus_btn')

// let newAmount ;
// let tax;
// phnPlusBtn.addEventListener('click' , function(){
//     let phnQuantity = document.querySelector('#phnQuantity').value;
// let phnQuantityNum = parseFloat(phnQuantity) ;
//     let newQuantity = phnQuantityNum + 1 ;
//     // phnQuantityNum = newQuantity;//needed if phnquantitynum is outside the function bcz then phnquantitynum value remains the same as before;
//     document.querySelector('#phnQuantity').value = newQuantity ;
//      newAmount = newQuantity * 1219 ;
//     document.querySelector('.total-amount').innerHTML = newAmount;
//     document.querySelector('.product-cost').innerHTML = newAmount;
//     tax = newAmount * 0.05 ;
//     document.querySelector('.tax').innerHTML = tax ;
//     document.querySelector('.total-cost').innerHTML = tax + newAmount;
// })
//  phnMinusBtn.addEventListener ('click',function(){
//     let newQuantity = phnQuantityNum - 1 ;
//     phnQuantityNum = newQuantity ;
//     document.querySelector('#phnQuantity').value = newQuantity ;
//      newAmount = newAmount - 1219 ;
//     document.querySelector('.total-amount').innerHTML = newAmount;
//     document.querySelector('.product-cost').innerHTML = newAmount;
//     document.querySelector('.tax').innerHTML = tax ;
//     document.querySelector('.total-cost').innerHTML = newAmount + tax;
// })
 
// document.querySelector('.product-cost').innerHTML = newAmount;
// phnPlusBtn.addEventListener ('click', function(){
//     let phnQuantity =document.querySelector('#phnQuantity');
//     let phnQuantityNum = parseInt(phnQuantity.value);
//     let newQuantity =phnQuantityNum + 1 ;
//     phnQuantity.value = newQuantity ;
// })
phnPlusBtn.addEventListener('click', function(){
   handlePhnCount(true , 'phnQuantity');
})
phnMinusBtn.addEventListener('click',function(){
 handlePhnCount(false , 'phnQuantity');
})
let casePlusBtn = document.querySelector('#caseplus-btn');
let caseMinusBtn =document.querySelector('#caseminus-btn');
casePlusBtn.addEventListener('click',function(){
    handlePhnCount(true , 'case-quantity');
})
caseMinusBtn.addEventListener('click', function(){
    handlePhnCount(false , 'case-quantity')
})


function handlePhnCount(isIncrease , itemId) {
    let itemQuantity = document.getElementById(itemId);
    let itemQuantityNum = parseInt(itemQuantity.value);
    let newQuantity ;
    if (isIncrease == true) {
         newQuantity = itemQuantityNum + 1 ;
        itemQuantity.value = newQuantity ;
    } else  if (isIncrease == false && itemQuantityNum >= 1){
         newQuantity = itemQuantityNum - 1 ;
        itemQuantity.value = newQuantity ;
    }
    let newAmount1 = 0;
    let newAmount2 = 0;
    if (itemId == 'case-quantity') {
        newAmount2 = newQuantity * 59;
    document.querySelector('.total-casecost').innerHTML = newAmount2 ;
    
    } else if(itemId == 'phnQuantity'){
        newAmount1 = newQuantity * 1219 ;
       
        document.querySelector('.total-phncost').innerHTML = newAmount1;
    }
    // calSubtotal();



    document.querySelector('.subtotal').innerHTML = newAmount1 + newAmount2;
    //in this either one of the newamounts will be added in the subtotal cause with each click it will either execute 'if' or 'else if' meaning if it execute 'else if' then the newamount2 inside 'if' wont be accessed and newAmount2 will be the initially set value zero.
    //  newAmount = newQuantity * 1219 ;
   
    // let tax = newAmount * 0.05;
    // document.querySelector('.tax').innerHTML = tax ;
    // let totalCost = newAmount + tax ;
    
}
function conversion(costClass) {
   let itemCost = document.querySelector(costClass);
   let itemCostNum = parseFloat (itemCost.innerHTML)
   return itemCostNum ;
}
function  calSubtotal(){
 let phncost = conversion('.total-phncost');
 let caseCost = conversion('.total-casecost');
 document.querySelector('.subtotal').innerHTML = phncost + caseCost ;
 console.log(phncost);
}
//just apply your ideas ,no one cares if its not working;