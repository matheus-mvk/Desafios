const btn = document.querySelector(".btn");
const divMessage = document.querySelector(".alert");

const msg = "Promise is pending";

function ativar(msg){
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    //Loading
    const load = document.createElement("div");
    load.classList.add("loading");
    
    divMessage.appendChild(load)

    

    setTimeout(()=>{
        message.style.display = "none";
        load.style.display = "none";
    }, 3000)
}


btn.addEventListener("click",()=>{
    ativar(msg)
});