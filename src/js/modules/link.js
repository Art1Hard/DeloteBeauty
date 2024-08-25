const homeLink = document.querySelector("#page-1");
const teamLink = document.querySelector("#page-2");
const priceLink = document.querySelector("#page-4");

const initLink = () => {
	setActiveLink("/", homeLink);
	setActiveLink("/team.html", teamLink);
	setActiveLink("/price.html", priceLink);
};

const setActiveLink = (pathname, page) => {
	if (window.location.pathname === pathname) page.classList.add("__active");
};

export default initLink;
