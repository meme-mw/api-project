
let submit=document.querySelector("#submit");
async function signUp(){
    
    let name1=document.querySelector("#name").value;
let password=document.querySelector("#password").value;
let email=document.querySelector("#email").value;
if(name1.length>=5&&email.includes('@')&&password>=8){
 await fetch('https://66e88223b17821a9d9dcefeb.mockapi.io/users/users', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  body: JSON.stringify(
    {
        name:name1,
        email:email,
        password:password
    }
  )
}).then(res => {
  if (res.ok) {

      return res.json();
    
  }
  // handle error
}).then(user => {
    sessionStorage.setItem("user",user.id);
    window.location.assign("homePage.html");

}).catch(error => {
  // handle error
})}else{
 alert("name must be 5 letters , password 8 letters and email must be valid")
}

}


submit.addEventListener("click",signUp);