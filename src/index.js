const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".close-menu-btn");
const closeMenuBtn = document.querySelector(".open-menu-button");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
	btn.addEventListener("click", () => {
		menu.classList.toggle("open");
		menu.style.transition = "transform 0.5s ease";
	});
});

menu.addEventListener("transitionend", () => {
	this.removeAttribute("style")
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
	arrow.addEventListener("click", function () {
		this.closest(".dropdown").classList.toggle("active");
	});
});