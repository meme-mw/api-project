
function display(){
  console.log("m");
  let links=document.querySelectorAll(".nav-link");
  if(links[0].style.display==="block"){
    links.forEach((e)=>{e.style.display="none";})
  }else{
  links.forEach((e)=>{e.style.display="block";e.style.width="100%";e.style.textAlign="center";document.querySelector("#navbar").style="position:absolute;width:100vw;display:flex;justify-content:space-around !important;top:3.5rem;left:0"});}
}

let submit=document.querySelector("#submit");
async function logIn(){
    console.log("start");
    let name1=document.querySelector("#name").value;
let password=document.querySelector("#password").value;
 await fetch('https://66e88223b17821a9d9dcefeb.mockapi.io/users/users', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {

      return res.json();
    
  }
  // handle error
}).then(users => {
users.find((user)=>{
   console.log(name1,password);
    if(user.name===name1&&user.password===password){
        sessionStorage.setItem("user",user.id);
            window.location.assign("homePage.html");
            
        }else{
            console.log("l");
        }
  });
  
}).catch(error => {
  // handle error
})}

submit.addEventListener("click",logIn);