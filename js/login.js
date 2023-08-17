document.getElementById('btn-submit').addEventListener('click',function(){
    let useremail = document.getElementById('user-email');
    let user = useremail.value;
    
    let userpassword = document.getElementById('user-password');
    let password = userpassword.value;
    
    if(user === 'rakib@gmail.com' && password === 'rakib'){
        window.location.href='./assect/mani.html';
    }else{
        alert("your Password is in carrect");
    }

})