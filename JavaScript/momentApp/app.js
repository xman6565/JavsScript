const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
//const loginButton = document.querySelector("#login-form button");



function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit",onLoginSubmit);


//loginButton.addEventListener("click", onLoginBtnClick);



//====================================================================
/*
const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    h1.classList.toggle("clicked"); //toggle : classList에 class가 있으면 제거하고 없으면 추가 해주는 함수
    
    
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
    
}

h1.addEventListener("click", handleTitleClick);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }

    h1.style.color = newColor;
}

function handleMouseEnter(){
    h1.innerText = "마우스 올렸다!";
}

function handleMouseLeave(){
    h1.innerText = "마우스가 벗어났다";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("카피했다");
}
function handleWindowOffline(){
    alert("와이파이 꺼짐");
}
function handleWindwOnline(){
    alert("와이파이 온!!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindwOnline);
*/