'use strict';
window.onload=function(){
    class Card{
        constructor(suit,num){
            this.suit=suit;
            this.num=num;
            this.front=`${this.suit}${this.num<10?'0':''}${this.num}.gif`;
        }
    }
    const cards=[];
    const suits=['s','d','h','c'];
    for(let i=0;i<suits.length;i++){
        for(let j=1;j<=13;j++){
            let card=new Card(suits[i],j);
            cards.push(card);
        }
    }
    shuffle();
    const table=document.getElementById('table');
    for(let i=0;i<suits.length;i++){
        let tr=document.createElement('tr');
        for(let j=0;j<13;j++){
            let td=document.createElement('td');
            let tempCard=cards[i*13+j];
            td.classList.add('card','back');
            td.style.backgroundImage=`url(images/${tempCard.front})`;
            td.onclick=flip;
            td.num=tempCard.num;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    function shuffle(){
        let i=cards.length;
        while(i>0){
            let index=Math.floor(Math.random()*i--);
            let temp=cards[index];
            cards[index]=cards[i];
            cards[i]=temp;
        }
    }
    let remain=52;
    let firstCard=null;
    let flipTimerId=NaN;
    function flip(e){
        let td=e.target;
        if(!td.classList.contains('back') || flipTimerId){
            return;
        }
        td.classList.remove('back');
        if(firstCard===null){
            firstCard=td;
        }else{
            if(firstCard.num===td.num){
                firstCard.classList.add('hidden');
                td.classList.add('hidden');
                firstCard=null;
                remain-=2;
                showInfo();
            }else{
                flipTimerId=setTimeout(
                    ()=>{
                        firstCard.classList.add('back');
                        td.classList.add('back');
                        flipTimerId=NaN;
                        firstCard=null;
                    },
                    1200
                );
            }
        }
    }
    const info=document.getElementById('info');
    let time=0;
    let timerId=this.NaN;
    function showInfo(){
        let msg;
        if(remain>0){
            msg=`残り:${remain}枚`;
        }else{
            msg='Clear!!';
            clearInterval(timerId);
        }
        info.textContent=msg+"("+time+"s)";

    }   
    function countStart(){
        const timerId=setInterval(()=>{
            time+=1;
            showInfo();
        },1000);
    }

    countStart();
};
