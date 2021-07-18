const enteringSection=document.querySelector('.en_extra');
const extraDetails=[
    {
        id:true,
        mnAmount:"1★ per dollar",
        mnWay:"Pay as you go",
        imageSrc:"https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png",
        mnDesc:"Scan and pay separately",
        mnText:" Use cash or credit/debit card at the register.",
        imgSrcTwo:"https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png",
        mfHeader:"Save payment in the app",
        mfText:"Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able toorder ahead or scan and pay at the register in one step."
    },
    {
        id:true,
        mnAmount:"2★ per dollar",
        mnWay:"Add funds in the app",
        imageSrc:"https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png",
        mnDesc:"Preload",
        mnText:"To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
        imgSrcTwo:"https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png",
        mfHeader:"Register your gift card",
        mfText:"Then use it to pay through the app. You can even consolidate balances from multiple cards in one place"
    },
    {
        id:false,
        mnAmount:"Up to 3★ per dollar",
        mnWay:"With Starbucks® Rewards Visa® Card",
        imageSrc:"https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png",
        mnDesc:"Earn Stars even faster",
        mnText:`Earn Stars on all purchases you make with our <a href="#" class="rules_join">credit card</a> opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.`,
        imgSrcTwo:null,
        mfHeader:null,
        mfText:null,

    }
];
document.addEventListener('DOMContentLoaded',()=>{
    extraDetails.map((data)=>{
        data.id===true?
        enteringSection.innerHTML+=`
        <div class="mg_space"></div>
            <div class="paying_option">
                <div class="money_section">
                    <div class="money_amount">
                        ${data.mnAmount}
                    </div>
                    <div class="money_way">
                        ${data.mnWay}
                    </div>
                </div>
                <div class="moeny_way_desc">
                    <div class="mn_one">
                        <div class="mn_image">
                            <img class="mn_image_size" src="${data.imageSrc}">
                        </div>
                        <div class="mn_desc">
                            <div class="mn_desc_header">
                                ${data.mnDesc}
                            </div>
                            <div class="mn_desc_text">
                                ${data.mnText}
                            </div>
                        </div>
                    </div>
                    
                    <div class="mn_two">
                        <div class="mn_d_f">
                            <div class="mn_d_f_img">
                                <img class="mn_image_size" src="${data.imgSrcTwo}">
                            </div>
                            <div class="mn_d_f_desc">
                                <div class="mn_d_f_header">
                                    ${data.mfHeader}
                                </div>
                                <div class="mn_d_f_text">
                                    ${data.mfText}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border_solid">
            
            </div>
        `:enteringSection.innerHTML+=`
        <div class="mg_space"></div>
            <div class="paying_option">
                <div class="money_section">
                    <div class="money_amount">
                        ${data.mnAmount}
                    </div>
                    <div class="money_way">
                        ${data.mnWay}
                    </div>
                </div>
                <div class="moeny_way_desc">
                    <div class="mn_one">
                        <div class="mn_image">
                            <img class="mn_image_size" src="${data.imageSrc}">
                        </div>
                        <div class="mn_desc">
                            <div class="mn_desc_header">
                                ${data.mnDesc}
                            </div>
                            <div class="mn_desc_text sp_width">
                                ${data.mnText}
                            </div>
                        </div>
                    </div>
                </div>`;
    });
});