function display(){
    console.log("m");
    let links=document.querySelectorAll(".nav-link");
    links.forEach((e)=>{e.style.display="block";document.querySelector("#navbar").style="position:absolute;width:80%;display:flex;top:3.5rem;"});
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