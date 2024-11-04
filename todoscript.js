// let but=document.getElementsByTagName("button")
let but=document.querySelector("button")
but.addEventListener("click",function(){
    console.log("clicked")
    let task=document.querySelector("input").value
    let newtask=document.createElement('li')
    newtask.innerText=task
    let delbtn=document.createElement("button")
    delbtn.innerText="Delete"
    delbtn.classList.add("delete")
    
    newtask.appendChild(delbtn)
    let lis=document.querySelector("ul")
    lis.appendChild(newtask)
    // delbtn.addEventListener("click",function(){
    //     console.log("delete clicked")
    //     this.parentElement.remove()
    // });
})
// let delbtns=document.querySelectorAll(".delete");
// for(btns of delbtns){
//     btns.addEventListener("click",function(){
//     console.log("delete clicked")
//     this.parentElement.remove()
// });
// }
let ull=document.querySelector('ul')
ull.addEventListener("click",function(event)
{
    console.log("clicked on li")
    if(event.target.nodeName=="BUTTON")
    {
        console.log("clicked on button")
        event.target.parentElement.remove();
    }
})