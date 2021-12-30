const login = document.querySelector('#login');
  login.addEventListener('click', function(){
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    
    if(username == "Ena Nuralizah" && password == "12345"){
      alert('Benar')
      document.body.innerHTML="<h1>ANDA BERHASIL LOGIN</h1>"
    }else{
      alert('password salah\nmasukkan\nusername: Ena Nuralizah\npassword: 12345')
    }
  })