const joinText=document.querySelector('.join_btn');
const linkText=document.querySelector('.link_join_app_section');
function windowSize(){
if(window.innerWidth<=760){
    joinText.innerText='Join in the app';
    linkText.innerText='Or join online';
    linkText.classList.add('underline');
}else{
    joinText.innerText='Join now';
    linkText.innerHTML=` Or <a href="#" class="join_section">join in the app</a> for the best experience`;
    linkText.classList.remove('underline');
}
}
setInterval(windowSize,100);