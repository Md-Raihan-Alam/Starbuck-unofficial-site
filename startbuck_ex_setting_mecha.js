let inputExtraData=[
    {   
        img:"https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
        head:"Fun freebies",
        desc:`Not only can you earn free coffee, 
        look forward to a birthday treat plus coffee and tea refills.`,
    },
    {   
        img:"https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
        head:"Order & pay ahead",
        desc:`Enjoy the convenience of in-store,
         curbside or drive-thru pickup at select stores.`,
    },
    {
        img:"https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
        head:"Get to free faster",
        desc:`Earn Stars even quicker with
         Bonus Star challenges, Double Star Days and exciting games.`
    }
];
let linkData="Learn more";
const entertingTag=document.querySelector('.ex_starting_data');
document.addEventListener('DOMContentLoaded',function(){
    inputExtraData.map((e)=>{
        entertingTag.innerHTML+=`<div class="ex_rules_desing">
                    <div class="ex_er_space ex_rules_num">
                    <img src="${e.img}"/></div>
                    <div class="ex_rules_text">
                    <div class="ex_gr_space_one ex_rules_head">${e.head}</div>
                    <div class="ex_gr_space_two ex_rules_desc">${e.desc}<div>
                    </div>
                    <div class="ex_gr_space_two ex_link">Learn more</div>
                    </div>
        `
    })
});