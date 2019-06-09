//function f1(){
//	var n,p;
//	n = document.getElementById('num1').value;
//
//	//6a 7v
//	n = parseInt(n);
//
//    if (n==10) {
//		p.innerHTML = 'Погода прохолодна i дуже пасмурна або пасмурна, тому не поливаємо';
//	}
//	else if (n<20) {
//		p.innerHTML = 'Погода прохолодна i сонячна або дуже сонячна, то поливаємо нижче середнього';
//	}
//	else if (n<30) {
//		p.innerHTML = 'Погода пасмурна і не дуже сонячно, тому поливаємо всередньому';
//	}
//	else if (n<35) {
//		p.innerHTML = 'Погода тепла i сонячна, тому поливаємо вище середнього';
//	}
//	else {
//		p.innerHTML = 'Погода тепла i дуже сонячно, тому поливаємо сильно';
//	}
//}
//
//function f2(){
//	var n,p;
//	n = document.getElementById('num2').value;
//
//	//6a 7v
//	n = parseInt(n);
//	if (n==100) {
//		p.innerHTML = 'Погода прохолодна i дуже пасмурна або пасмурна, тому не поливаємо';
//	}
//	else if (n<300) {
//		p.innerHTML = 'Погода прохолодна i сонячна або дуже сонячна, то поливаємо нижче середнього';
//	}
//	else if (n<600) {
//		p.innerHTML = 'Погода пасмурна і не дуже сонячно, тому поливаємо всередньому';
//	}
//	else if (n<800) {
//		p.innerHTML = 'Погода тепла i сонячна, тому поливаємо вище середнього';
//	}
//	else {
//		p.innerHTML = 'Погода тепла i дуже сонячно, тому поливаємо сильно';
//	}
//}

//function f1(){
//    var n_1, n_2, p;
//    n_1 = document.getElementById('num1').value;
//    n_2 = document.getElementById('num2').value;
//
//
//    p = document.getElementById('out');
//    n_1 = parseInt(n_1);
//    n_2 = parseInt(n_2);
//
//    if (n_1 && n_2 == i_1()){
//    p.innerHTML = 'Погода прохолодна i дуже пасмурна або пасмурна, тому не поливаємо';
//    }
//    if (n_1 && n_2 == i_2){
//    p.innerHTML = 'Погода прохолодна i сонячна або дуже сонячна, то поливаємо нижче середнього';
//    }
//    if (n_1 && n_2 == i_3){
//    p.innerHTML = 'Погода пасмурна і не дуже сонячно, тому поливаємо всередньому';
//    }
//    if (n_1 && n_2 == i_4){
//    p.innerHTML = 'Погода тепла i сонячна, тому поливаємо вище середнього';
//    }
//    if (n_1 && n_2 == i_5){
//    p.innerHTML = 'Погода тепла i дуже сонячно, тому поливаємо сильно';
//    }
//
//
//    i_1 = function f_1(){if (n1==10 && n2==100 ) return true;}
//    i_2 = function f_2(){if (n1<20 && n2<300 ) return true;}
//    i_3 = function f_3(){if (n1<30 && n2<600 ) return true;}
//    i_4 = function f_4(){if (n1<35 && n2<800 ) return true;}
//    i_5 = function f_5(){if (n1>35 && n2>800 ) return true;}
//    console.log(p);
//    console.log("Hello world!");
//
//}

function f1() {
    var conditions =
    ["Якщо прохолодно i дуже пасмурно або пасмурно, то не поливаємо",
     "Якщо прохолодно i сонячно або дуже сонячно, то поливаємо нижче середнього",
     "Якщо тепло i пасмурно або не дуже сонячно, то поливаємо всередньому",
     "Якщо тепло i сонячно, то поливаємо вище середнього",
     "Якщо тепло i дуже сонячно, то поливаємо сильно",
     "Якщо інші показники, то вмикається сирена"
     ];

    var n,p;

	n = document.getElementById('num1').value;
	n1 = document.getElementById('num2').value;
    n = parseInt(n,);
    n1 = parseInt(n1);

    if (n<=10 && n1<=100) {
		document.getElementById("one").innerHTML = conditions[0];
	}
	else if (n>10 && n<=20 && n1>200 && n1<=300) {
		document.getElementById("one").innerHTML = conditions[1];
	}
	else if (n<=30 && n1<=600) {
		document.getElementById("one").innerHTML = conditions[2];
	}
	else if (n<=35 && n1<=800) {
		document.getElementById("one").innerHTML = conditions[3];
	}
	else if (n<=40 && n1<=1000) {
		document.getElementById("one").innerHTML = conditions[4];
	}
	else {
		document.getElementById("one").innerHTML = conditions[5];
	}



//    var txt = "";
//    var rng=document.getElementById('r1'); //rng - это Input
//    var p=document.getElementById('one'); // p - абзац
//    var n = document.getElementById('num1')value;
//    var n = document.getElementById('num2')value;
//    n = parseInt(n);
//
//    var i;
//        for (i = 0; i < conditions.length; i++) {
//        txt += "Attribute name: " + conditions[i].name + "<br>";
//}
//
//        p.innerHTML=rng.value;
}