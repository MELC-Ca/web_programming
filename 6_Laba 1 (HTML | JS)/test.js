
const surveyForm = document.getElementById("survey");
const resultsTable = document.getElementById("results");


surveyForm.addEventListener("submit", (event) => {
  event.preventDefault();


  const genderAnswer = document.querySelector('input[name="gender"]:checked').value;
  const ageAnswer = document.querySelector('input[name="age"]:checked').value;
  const colorAnswer = document.querySelector('input[name="color"]:checked').value;


  document.getElementById("genderAnswer").textContent = genderAnswer;
  document.getElementById("ageAnswer").textContent = ageAnswer;
  document.getElementById("colorAnswer").textContent = colorAnswer;


  resultsTable.style.display = "block";
};