const homePage = document.querySelector("#page-1");
const teamPage = document.querySelector("#page-2");

const initLink = () => {
	if (window.location.pathname === "/") homePage.classList.add("__active");
	if (window.location.pathname === "/team.html")
		teamPage.classList.add("__active");
};

export default initLink;
