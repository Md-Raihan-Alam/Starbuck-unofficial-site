let inputGettingData=[
    {   
        num:1,
        head:"Create an accout",
        desc:`To get started, <a href="#" class="rules_join">join now</a>.
                         You can also <a href="#" class="rules_join">join in the app</a> to get access to the full
                          range of Starbucks® Rewards benefits.`,
    },
    {   
        num:2,
        head:"Order and pay how you’d like",
        desc:`Use cash, credit/debit card or
         save some time and pay right through the app. You’ll collect Stars all ways. 
         <a href="#" class="rules_join">Learn how</a>`,
    },
    {
        num:3,
        head:"Earn Stars, get Rewards",
        desc:`As you earn Stars, you can redeem them for Rewards—like free food,
         drinks, and more. Start redeeming with as little as 25 Stars!`
    }
];
function settingDescription(){
    if(window.innerWidth<=760){
           inputGettingData[0].head=`Download the Starbucks® app`;
           inputGettingData[0].desc=`<a href="#" class="rules_join">Join in the app</a> to get access to the full range of Starbucks® Rewards benefits. 
        You can also <a href="#" class="rules_join">join online</a>.`
    }
    if(window.innerWidth>=761){
           inputGettingData[0].head=`Create an accout`;
           inputGettingData[0].desc=`To get started, <a href="#" class="rules_join">join now</a>.
                         You can also <a href="#" class="rules_join">join in the app</a> to get access to the full
                          range of Starbucks® Rewards benefits.`
    }
}
const inputGetting=document.querySelector('.gs_starting_rules');
function uploadingDescription(){
    inputGetting.innerHTML=``;
    settingDescription();
    inputGettingData.map((data)=>{
        inputGetting.innerHTML+=`<div class="gs_rules_desing">
                    <div class="gs_gr_space gs_rules_num">${data.num}</div>
                    <div class="gs_rules_text">
                    <div class="gs_gr_space gs_rules_head">${data.head}</div>
                    <div class="gs_gr_space gs_rules_desc">${data.desc}<div>
                    </div>
                    </div>`;
    });
}
document.addEventListener('DOMContentLoaded',uploadingDescription);
setInterval(uploadingDescription,100);
setInterval(settingDescription,100);