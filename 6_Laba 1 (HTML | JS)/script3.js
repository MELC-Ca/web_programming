window.onload = function () {
	document.getElementById("fio").innerHTML = localStorage.getItem("fioo");
	document.getElementById("sel").innerHTML = localStorage.getItem("selectingg");
	document.getElementById("fac").innerHTML = localStorage.getItem("facultyy");
	document.getElementById("spe").innerHTML = localStorage.getItem("specializationn");
	document.getElementById("cou").innerHTML = localStorage.getItem("coursee");
	document.getElementById("hob").innerHTML = localStorage.getItem("hobbyy");
	document.getElementById("mus").innerHTML = localStorage.getItem("musicc");
	document.getElementById("spo").innerHTML = localStorage.getItem("sportt");
	document.getElementById("eng").innerHTML = localStorage.getItem("englishh");
		 
	document.getElementById("age").innerHTML = new Date().getFullYear()-localStorage.getItem("selectingg");
	document.getElementById("data").innerHTML = new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString();
 }