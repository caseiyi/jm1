const loginBtn = document.querySelector('#login-btn');
const firstPage = document.querySelector('.first-page');
const secondPage = document.querySelector('.second-page');
loginBtn.addEventListener('click', function(){
 firstPage.style.display = 'none';
 secondPage.style.display = 'block';
})
let currBalance = document.querySelector('.curr-balance').innerText;
const currBalanceNum = parseFloat(currBalance);
const addDepo = document.querySelector('#add-deposite');
addDepo.addEventListener ('click',  function(){
    const currDeposite = document.querySelector('.current-deposite').innerText;
    const currDepNum = parseFloat( currDeposite);
    const depAmount = document.querySelector("#deposit-amount").value;
    const depAmountNum = parseFloat(depAmount);
    const totalDeposite = depAmountNum + currDepNum ;
    document.querySelector('.current-deposite').innerHTML = totalDeposite;
    // document.querySelector("#deposit-amount").innerHTML ='';
    // document.querySelector("#deposit-amount").value =0;
    const newCurrBalance = currBalanceNum + totalDeposite ;
    document.querySelector('.curr-balance').innerText = newCurrBalance ;
//alternate
//calculation(current-deposite , depAmountNum){
//}
})
// function calculation(id_class ,depAmountNum) {
//     const currDeposite = document.querySelector('id_class').innerText;
//     const currDepNum = parseFloat( currDeposite);
//     const totalDeposite = depAmountNum + currDepNum ;
  //  document.querySelector('id_class').innerHTML = totalDeposite;

  
const addWithraw = document.querySelector('#add-withraw');
addWithraw.addEventListener ('click',  function(){
    const currWithraw = document.querySelector('.current-withraw').innerText;
    const currWithrawNum = parseFloat(currWithraw);  
    const withrawAmount = document.querySelector("#withraw-amount").value;
    const withrawAmountNum = parseFloat(withrawAmount);
    const totalWithraw = withrawAmountNum + currWithrawNum ;
    document.querySelector('.current-withraw').innerHTML = totalWithraw;
    document.querySelector("#deposit-amount").innerHTML ='';
    // document.querySelector("#withraw-amount").value =0;
    const newCurrBalance = currBalanceNum - totalWithraw ;
    document.querySelector('.curr-balance').innerText = newCurrBalance ;
//alternate
//calculation(current-deposite , depAmountNum){
//}
})