'use strict';
window.onload=function(){
	const table=document.getElementById('table');
	const MAX=9;
	for(let i=0;i<=MAX;i++){
		let tr=document.createElement('tr');
		for(let j=0;j<=MAX;j++){
			let td;
			if(i===0){
				td=document.createElement('th');
				if(j===0){
					td.textContent='X';
				}else{
					td.textContent=j;
				}
			}else{
				if(j===0){
					td=document.createElement('th');
					td.textContent=i;
				}else{
					td=document.createElement('td');
					td.textContent=i*j;
				}
			}
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
};

