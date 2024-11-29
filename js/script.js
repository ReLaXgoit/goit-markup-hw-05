// Отримуємо модальне вікно і кнопку закриття
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");

// Функція відкриття модального вікна
function openModal() {
  modalOverlay.style.display = "flex";
}

// Функція закриття модального вікна
function closeModal() {
  modalOverlay.style.display = "none";
}

// Закриваємо модальне вікно при кліку на кнопку
modalClose.addEventListener("click", closeModal);

// Для демонстрації відкриття модального вікна
// (Це можна замінити на виклик кнопки для відкриття)
document.addEventListener("DOMContentLoaded", () => {
  openModal(); // Автоматичне відкриття після завантаження сторінки
});
