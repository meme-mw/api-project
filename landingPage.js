function display(){
    console.log("m");
    let links=document.querySelectorAll(".nav-link");
    if(links[0].style.display==="block"){
      links.forEach((e)=>{e.style.display="none";})
    }else{
    links.forEach((e)=>{e.style.display="block";e.style.width="100%";e.style.textAlign="center";document.querySelector("#navbar").style="position:absolute;width:100vw;display:flex;justify-content:space-around !important;top:3.5rem;left:0"});}
  }
async function getPosts(){
    await fetch(`https://66e88223b17821a9d9dcefeb.mockapi.io/users/posts`, {
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
              
            </div>
          </div>
       `;
       document.querySelector(".con").innerHTML+=card;
       })
       
      
        
      }).catch(error => {
        // handle error
      })
}


getPosts();

function del(id){
    fetch(`https://66e88223b17821a9d9dcefeb.mockapi.io/users/posts/${id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // Do something with deleted task
      }).catch(error => {
        // handle error
      })
}