const photoSelect = document.getElementById("photoSelect");
const photo = document.getElementById("photo");

photoSelect.addEventListener("change", () => {
  const selectedPhoto = photoSelect.value;
  photo.src = `${selectedPhoto}.jpg`;
});

/*Сначала получаем ссылки на элементы выбора фотографии 
	и на само изображение с помощью document.getElementById.

	Затем добавляем обработчик события change к выбору фотографии. 
	Когда пользователь выбирает другую фотографию, обработчик вызывается.

	В обработчике получаем выбранную фотографию с помощью photoSelect.value, 
	затем изменяем src свойство изображения на имя файла выбранной 
	фотографии с помощью photo.src = ${selectedPhoto}.jpg;. */