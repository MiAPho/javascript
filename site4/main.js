'use strict';
window.onload=function(){
	class Menu{
		constructor(name,price,cal){
			this.name=name;
			this.price=price;
			this.cal=cal;
		}
		showInfo(){
			return `<td>${this.name}</td><td>${this.price}</td><td>${this.cal}</td>`;
		}
	}
	const name=document.getElementById('name');
	const price=document.getElementById('price');
	const cal=document.getElementById('cal');
	const bt=document.getElementById('bt');
	const table=document.getElementById('table');
	const total=document.getElementById('total');
	let ls=[];
	bt.addEventListener('click',()=>{
		let menu=new Menu(name.value,price.value,cal.value);
		ls.push(menu);
		let tr=document.createElement('tr');
		tr.innerHTML=menu.showInfo();
		table.appendChild(tr);
		total.textContent=`全${ls.length}件`;
		//for文
		for(let i=0;i<ls.length;i++){
			console.log(ls[i].name);
		}
		//for of
		for(let m of ls){
			console.log(m.showInfo());
		}
	});
};

