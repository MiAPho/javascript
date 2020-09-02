'use strict';
window.onload=function(){
	const name=document.getElementById('name');
	const age=document.getElementById('age');
	const bt=document.getElementById('bt');
	const result=document.getElementById('result');
	bt.addEventListener('click',()=>{
		let dogName=name.value;
		let dogAge=age.value;
		console.log(typeof dogAge);
		dogAge=Number(dogAge);
		console.log(typeof dogAge);
		result.textContent=`${dogName}(${dogAge}才)は人間の年齢だと${dogAge*7}才です。`;
	});
};

