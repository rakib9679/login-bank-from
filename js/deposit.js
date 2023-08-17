document.getElementById('btn-Deposit').addEventListener('click', function(){
    let deposit = document.getElementById('deposit-fild');
    let depositValue= deposit.value;
    let depositconvat= parseFloat(depositValue);


    let depositamount= document.getElementById('deposit-amount');
    let depositcase = depositamount.innerText;
    let convatdeposit= parseFloat(depositcase);

    let totaldeposit= depositconvat + convatdeposit;
    depositamount.innerText = totaldeposit;

    let blanceeliment = document.getElementById('main-blance');
    let blance = blanceeliment.innerText;
    let prevblance= parseFloat(blance);
    let currentblance = prevblance + depositconvat;
    blanceeliment.innerText = currentblance;



// let totalblance= document.getElementById('main-blance');
// let casmainblance= totalblance.innerText;
// let convatblance = parseFloat(casmainblance);

// let totalblc = convatblance + convatdeposit;
// totalblance.innerText =  totalblc;





    deposit.value = "";

    

    

});