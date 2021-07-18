const menuImagesDest=[
    {
        id:1,
        img:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png",
        head:"Customize your drink",
        desc:"Make your drink just right with an extra espresso shot,dairy substitute or a dash of your favorite syrup."
    },
    {
        id:2,
        img:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png",
        head:"Brewed hot coffee, bakery item or hot tea",
        desc:"Pair coffee cake or an almond croissant with your fresh cup of hot brew."
    },
    {
        id:3,
        img:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png",
        head:"Handcrafted drink, hot breakfast or parfait",
        desc:"Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
    },
    {
        id:4,
        img:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
        head:"Salad, sandwich or protein box",
        desc:"Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
    },
    {
        id:5,
        img:"https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
        head:"Select merchandise or at-home coffee",
        desc:"Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
    }
];
const img=document.querySelector('.image_update');
const imageHead=document.querySelector('.menu_image_header');
const imageDesc=document.querySelector('.menu_image_text');
const moneyMenuTag=document.querySelectorAll('.mn_money');
const star=document.querySelectorAll('.fas .fa-star');
const marker=document.querySelector('.color');
function imageAllUpdate(event){
    const eventData=event.target.dataset.id;
    menuImagesDest.forEach((e)=>{
        if(e.id==eventData){
            img.src=`${e.img}`;
            imageHead.innerText=`${e.head}`;
            imageDesc.innerText=`${e.desc}`;
        }
    })
}
function indicator(e){
    marker.style.left=e.offsetLeft+'px';
    marker.style.width=e.offsetWidth+'px';
}
moneyMenuTag.forEach((e)=>{
    e.addEventListener('click',function(e){
        imageAllUpdate(e);
        indicator(e.target);
    });
});
