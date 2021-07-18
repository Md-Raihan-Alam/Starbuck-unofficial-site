// alert('THIS IS AN UNOFFICIAL SITE, A CHALLNGE THAT I COMPLETED FROM "frontendpractive". So this link will not get you anywhere but you should click them to see some actions');
const menuItems=document.querySelectorAll('.menu_one_items');
const menuSection=document.querySelectorAll('.menu_icon');
const menuMediaSectionBtnOne=document.querySelector('.selection');
const menuMediaSectionBtntwo=document.querySelector('.closing');
const menuMediaSection=document.querySelector('.media_menu_section');
menuItems.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        let target=e.target;
        menuItems.forEach((e)=>{
            e.classList.remove('active');
        });
        target.classList.add('active');
    });
});
menuMediaSectionBtnOne.addEventListener('click',function(){
    menuMediaSection.classList.add('show');
    menuSection[0].classList.add('hide_icon');
    menuSection[0].classList.remove('show_icon');
    menuSection[1].classList.add('show_icon');
    menuSection[1].classList.remove('hide_icon');
});
menuMediaSectionBtntwo.addEventListener('click',function(){
       menuMediaSection.classList.remove('show');
    menuSection[0].classList.remove('hide_icon');
    menuSection[0].classList.add('show_icon');
    menuSection[1].classList.remove('show_icon');
    menuSection[1].classList.add('hide_icon');
});