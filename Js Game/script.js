var clickplus = 1;
var coast1 = 50;
var coast2 = 200;
var coast3 = 500;
var coast4 = 1000;
var coast5 = 5000;
var coast6 = 10000;



var coast11 = 1000;
var coast12 = 10000;
var coast13 = 30000;
var coast14 = 100000;
var coast15 = 500000;
var coast16 = 1000000;




var clickplus1 = update1.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast1) {
		clickplus = +clickplus + 0.5;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast1;
		money1.innerHTML = money;
		coast1 = +coast1 * 1.2;
		coastClickUp1.innerHTML = coast1.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast1)
	}
}

var clickplus2 = update2.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast2) {
		clickplus = +clickplus + 2;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast2;
		money1.innerHTML = money;
		coast2 = +coast2 * 1.2;
		coastClickUp2.innerHTML = coast2.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast2)
	}
}

var clickplus3 = update3.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast3) {
		clickplus = +clickplus + 5;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast3;
		money1.innerHTML = money;
		coast3 = +coast3 * 1.2;
		coastClickUp3.innerHTML = coast3.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast3)
	}
}


var clickplus4 = update4.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast4) {
		clickplus = +clickplus + 10;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast4;
		money1.innerHTML = money;
		coast4 = +coast4 * 1.2;
		coastClickUp4.innerHTML = coast4.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast4)
	}
}


var clickplus5 = update5.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast5) {
		clickplus = +clickplus + 50;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast5;
		money1.innerHTML = money;
		coast5 = +coast5 * 1.2;
		coastClickUp5.innerHTML = coast5.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast5)
	}
}


var clickplus6 = update6.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast6) {
		clickplus = +clickplus + 100;
		var money = document.querySelector('#money1').innerHTML;
		var money = +money - +coast6;
		money1.innerHTML = money;
		coast6 = +coast6 * 1.2;
		coastClickUp6.innerHTML = coast6.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast6)
	}
}


var persec1 = update11.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast11) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - +coast11;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 1;
		money1.innerHTML = money.toFixed(1);
		}
		coast11 = +coast11 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp1.innerHTML = coast11.toFixed(1);
	} else {
		alert("You have not got enough money. You need" + coast11);
	}
}


var persec2 = update12.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast12) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - +coast12;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 10;
		money1.innerHTML = money;
		}
		coast12 = +coast12 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp2.innerHTML = coast12.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast12);
	}
}


var persec3 = update13.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast13) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - coast13;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 30;
		money1.innerHTML = money;
		}
		coast13 = +coast13 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp3.innerHTML = coast13.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast13);
	}
}


var persec4 = update14.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast14) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - coast14;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 100;
		money1.innerHTML = money;
		}
		coast14 = +coast14 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp4.innerHTML = coast14.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast14);
	}
}


var persec5 = update15.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast15) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - coast15;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 500;
		money1.innerHTML = money;
		}
		coast15 = +coast15 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp5.innerHTML = coast15.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast15);
	}
}


var persec6 = update16.onclick = function() {
	if (document.querySelector('#money1').innerHTML >= coast16) {
		var money = document.querySelector('#money1').innerHTML;
		var money3 = +money - coast16;		
		setInterval(func, 1000);function func() {
		var money = +document.querySelector('#money1').innerHTML + 500;
		money1.innerHTML = money;
		}
		coast16 = +coast16 * 1.1;
		money1.innerHTML = money3;
		coastPersecUp6.innerHTML = coast16.toFixed(1);
	} else {
		alert("You have not got enough money. You need " + coast16);
	}
}


var clickFun = window.onclick = function() {
	var money = document.querySelector('#money1').innerHTML;
	var money = +money + clickplus;
	money1.innerHTML = money;
}


function clear() {
	var money = +document.querySelector('#money1').innerHTML;
	var money123 = money.toFixed(1);
	money1.innerHTML = money123;	
}
setInterval(clear , 500);
coastClickUp1.innerHTML = coast1.toFixed(1);
coastClickUp2.innerHTML = coast2.toFixed(1);
coastClickUp3.innerHTML = coast3.toFixed(1);
coastClickUp4.innerHTML = coast4.toFixed(1);
coastClickUp5.innerHTML = coast5.toFixed(1);
coastClickUp6.innerHTML = coast6.toFixed(1);
coastPersecUp1.innerHTML = coast11.toFixed(1);
coastPersecUp2.innerHTML = coast12.toFixed(1);
coastPersecUp3.innerHTML = coast13.toFixed(1);
coastPersecUp4.innerHTML = coast14.toFixed(1);
coastPersecUp5.innerHTML = coast15.toFixed(1);
coastPersecUp6.innerHTML = coast16.toFixed(1);