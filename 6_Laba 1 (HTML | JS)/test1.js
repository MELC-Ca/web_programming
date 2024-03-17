function addRow() {
	   var table = document.getElementById("myTable");
		 var row = table.insertRow(-1);   
		 var nameCell = row.insertCell(0);   
		 var ageCell = row.insertCell(1);   
		 var colorCell = row.insertCell(2);   
		 var name = document.getElementById("name").value;   
		 var age = document.getElementById("age").value;   
		 var color = document.getElementById("color").value;  
		 nameCell.innerHTML = name;   
		 ageCell.innerHTML = age;   
		 colorCell.innerHTML = "<div style='width: 20px; height: 20px; background-color: " + color + "'></div>"; 
		} 