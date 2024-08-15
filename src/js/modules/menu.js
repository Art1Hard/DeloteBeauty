const introSection = document.querySelector(".__drawer");
const menu = document.querySelector(".menu");

const initMenu = () => {
	if (!introSection) {
		return;
	}

	introSection.addEventListener("click", (event) => {
		if (event.target.closest("#menu-open")) {
			event.preventDefault();
			menu.classList.add("__active");
		}

		if (event.target.closest("#menu-close")) {
			event.preventDefault();
			menu.classList.remove("__active");
		}
	});
};

export default initMenu;
