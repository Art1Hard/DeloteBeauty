const tab = document.querySelector(".project__nav");
let links;

if (tab) {
	links = tab.querySelectorAll("a");
}

const initTab = () => {
	if (tab)
		tab.addEventListener("click", (event) => {
			event.preventDefault();

			if (links)
				for (let i = 0; i <= links.length; i++)
					setActiveNavTab(event, `tab_0${i}`);
		});
};

const setActiveNavTab = (event, tabId) => {
	if (event.target.closest(`#nav-${tabId}`)) {
		links.forEach((link) => {
			link.classList.remove("__active");
		});

		document.querySelectorAll(".project__items").forEach((element) => {
			element.classList.remove("__active");
		});

		document.querySelector(`#nav-${tabId}`).classList.add("__active");
		document.querySelector(`#${tabId}`).classList.add("__active");
	}
};

export default initTab;
