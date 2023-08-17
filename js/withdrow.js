document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowfild= document.getElementById('withdrow-fild');
    let newwithdrow = withdrowfild.value;
    let changwithdrow = parseFloat(newwithdrow);
    

    const withdrowvalu = document.getElementById('withdrow-valu');
     const casevalu = withdrowvalu.innerText;
     const changwith = parseFloat(casevalu);
     const currentwithdrow = changwith + changwithdrow;

     withdrowvalu.innerText = currentwithdrow;

     const mainblance= document.getElementById('main-blance');
     const casmainblance = mainblance.innerText;
     const changmainblance= parseFloat(casmainblance); 
     const newblancetotal = changmainblance -  changwithdrow;
     mainblance.innerText= newblancetotal;



     withdrowfild.value= "";

});