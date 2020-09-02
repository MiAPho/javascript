'use strict';
window.onload=function(){
	const ans=Math.floor(Math.random()*100)+1;
	const userInput=document.getElementById('userInput');
	const bt=document.getElementById('bt');
	const list=document.getElementById('list');
	let count=1;
	bt.addEventListener('click',function(){
		let li=document.createElement('li');
		let userAns=userInput.value;
		userAns=Number(userAns);
		let msg=`${count++}回目:${userAns}`;
		if(userAns===ans){
			li.textContent=msg+'正解';
		}else if(userAns>ans){
			li.textContent=msg+'もっと下だよ';
		}else{
			li.textContent=msg+'もっと上だよ';
		}
		list.appendChild(li);
	});
};

