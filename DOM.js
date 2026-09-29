let toggle = document.getElementById("toggle");  //toggle
let nav = document.querySelector("nav"); 
let mode = "light";
toggle.addEventListener("click", ()=> {
    if(mode==="light"){
        document.body.style.backgroundColor="#10121a";
        nav.style.backgroundColor="#10121a";
        nav.style.borderBottom="1px solid #30364a";
        document.body.style.color="white";
        toggle.innerText="🔆";
        mode="black";
    }
    else{
        document.body.style.backgroundColor="white";
        nav.style.backgroundColor="white";
        nav.style.borderBottom="1px solid #e2e5f0";
        document.body.style.color="black";
        toggle.innerText="🌙";
        mode="light";
    }
});

let container = document.getElementById("profile");
container.addEventListener("click", ()=>{
    container.innerText="😊";
});

