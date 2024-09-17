function display(){
  console.log("m");
  let links=document.querySelectorAll(".nav-link");
  if(links[0].style.display==="block"){
    links.forEach((e)=>{e.style.display="none";})
  }else{
  links.forEach((e)=>{e.style.display="block";e.style.width="100%";e.style.textAlign="center";document.querySelector("#navbar").style="position:absolute;width:100vw;display:flex;justify-content:space-around !important;top:3.5rem;left:0"});}
}

let user=sessionStorage.getItem("user");
sessionStorage.setItem("user",user);
console.log(user);
async function getUser(){
 await fetch(`https://66e88223b17821a9d9dcefeb.mockapi.io/users/users/${user}`, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {

      return res.json();
    
  }
  // handle error
}).then(user => {
   console.log(user);
   document.querySelector(".name").innerHTML=`${user.name}`;
   document.querySelector(".email").innerHTML=`${user.email}`;

  
}).catch(error => {
  // handle error
})}



async function getPosts(){
    await fetch(`https://66e88223b17821a9d9dcefeb.mockapi.io/users/users/${user}/posts`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
      
            return res.json();
          
        }
        // handle error
      }).then(posts => {
       posts.map((e)=>{
        let card=` 
        <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${e.img}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              
              <p>${e.content}</p>
              <button type="button" class="btn btn-danger" onclick="del(${e.userId},${e.id})">Delete</button>
            </div>
          </div>
      `;
       document.querySelector(".container").innerHTML+=card;
       })
       
      
        
      }).catch(error => {
        // handle error
      })
}
function del(userId,id){
  fetch(`https://66e88223b17821a9d9dcefeb.mockapi.io/users/users/${userId}/posts/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(post => {
      
      location.reload();
      // Do something with deleted task
    }).catch(error => {
      // handle error
    })
}
getUser();

getPosts();