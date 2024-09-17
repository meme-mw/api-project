let user=sessionStorage.getItem("user");
let submit=document.querySelector("#submit");
async function addPost(){
    
let title=document.querySelector("#title").value;
let img=document.querySelector("#img").value;
let content=document.querySelector("#textArea").value;
if(title.length>1&&img.length>1&&content.length>1){
 await fetch('https://66e88223b17821a9d9dcefeb.mockapi.io/users/posts', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  body: JSON.stringify(
    {
        title:title,
        img:img,
        content:content,
        userId:user
    }
  )
}).then(res => {
  if (res.ok) {

      return res.json();
    
  }
  // handle error
}).then(posts => {
    sessionStorage.setItem("user",user);
    window.location.assign("index.html");

}).catch(error => {
  // handle error
})}else{
 alert("field shouldn't be empty")
}

}


submit.addEventListener("click",addPost);