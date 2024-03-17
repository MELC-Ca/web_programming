const genderRadios = document.querySelectorAll('input[name="gender"]');
const tableCell = document.getElementById('genderTableCell');

genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            genderRadio = radio.value;
        }
    });
});

function submitForm() {
	var fio = document.getElementById("fullNameInput").value;
	var date = document.getElementById("birthYearInput").value;
	var faculty = document.getElementById("facultySelect").value;
	var specialization = document.getElementById("specialtyInput").value;
	var course = document.getElementById("courseInput").value;
	var hobby = document.getElementById("hobbyInput").value;
	var english = document.getElementById("languageInput").value;
	var music = document.getElementById("instrumentInput").value;
	var sport = document.getElementById("favoriteSportInput").value;
	var color = document.getElementById("favoriteColorInput").value;

  var formData = {
    fio: fio,
    date: date,
    genderRadio: genderRadio,
    faculty: faculty,
		specialization: specialization,
		course: course,
		hobby: hobby,
		english: english,
		music: music,
		sport: sport,
		color: color
  };

  var storedData = localStorage.getItem("data");
  if (storedData == null) {
    storedData = [];
  } else {
    storedData = JSON.parse(storedData);
  }

  storedData.push(formData);
  localStorage.setItem("data", JSON.stringify(storedData));

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
	var cell8 = row.insertCell(7);
	var cell9 = row.insertCell(8);
	var cell10 = row.insertCell(9);
	var cell11 = row.insertCell(10);
  cell1.innerHTML = "<span style='color:" + color + "'>" + fio + "</span>";
  cell2.innerHTML = "<span style='color:" + color + "'>" + date + "</span>";
  cell3.innerHTML = "<span style='color:" + color + "'>" + genderRadio + "</span>";
  cell4.innerHTML = "<span style='color:" + color + "'>" + faculty + "</span>";
	cell5.innerHTML = "<span style='color:" + color + "'>" + specialization + "</span>";
	cell6.innerHTML = "<span style='color:" + color + "'>" + course + "</span>";
	cell7.innerHTML = "<span style='color:" + color + "'>" + hobby + "</span>";
	cell8.innerHTML = "<span style='color:" + color + "'>" + english + "</span>";
	cell9.innerHTML = "<span style='color:" + color + "'>" + music + "</span>";
	cell10.innerHTML = "<span style='color:" + color + "'>" + sport + "</span>";
	cell11.innerHTML = "<span style='color:" + color + "'>" + color + "</span>";
	

	document.getElementById("surveyForm").reset();
}

