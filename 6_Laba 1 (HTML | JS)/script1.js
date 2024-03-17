function calculate() {
  // Получаем элементы HTML-страницы
  const angleInput = document.getElementById("angle-input");
  const functionSelect = document.getElementById("function-select");
  const resultOutput = document.getElementById("result");

  // Проверяем корректность ввода угла
  const angle = angleInput.value;
  if (angle === " " || isNaN(angle) || angle < 0 || angle > 90) {
    resultOutput.innerText = "Недопустимое значение угла. Пожалуйста, введите значение от 0 до 90.";
    return;
  }

  // Получаем имя выбранной функции и вычисляем значение
  const functionName = functionSelect.value;
  const functionExpression = "Math." + functionName + "(" + (angle * Math.PI/180) + ")";
  const result = eval(functionExpression);
	resultOutput.innerText = "Результат: " + result.toFixed(2);
}
