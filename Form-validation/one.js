function myform(){
    let name = document.getElementById('username').value 
    
    
    if(name==""){
        document.getElementById('usermessage').innerHTML="please enter the name"
        return false
    }
    
    let password=document.getElementById('pass').value
    let confirmpassword=document.getElementById("repass").value
    if(password!==confirmpassword){
         document.getElementById('userpass').innerHTML="please enter correct password"
         return false
    }
    
    let number = document.getElementById('num').value
    if(number.length < 10 || number.length > 10){
        document.getElementById('phone').innerHTML="please enter 10 digit number" 
        return false
    
    }
   return true
}