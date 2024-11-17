// Desktop share button interaction
const shareButtonDesktop = document.getElementById('share-button-desktop');
const svgPath = shareButtonDesktop.querySelector('svg path');

shareButtonDesktop.addEventListener('click', toggleDesktopShare);

function toggleDesktopShare() {
	const shareboxDesktop = document.querySelector('.sharebox__desktop');
	shareboxDesktop.classList.toggle('is-visible');

	// Toggle the fill color of the SVG path
	if (svgPath.getAttribute('fill') === '#6E8098') {
		svgPath.setAttribute('fill', '#ecf2f8');
		shareButtonDesktop.style.backgroundColor = 'hsl(214, 17%, 51%)';
	} else {
		svgPath.setAttribute('fill', '#6E8098');
		shareButtonDesktop.style.backgroundColor = 'hsl(210, 46%, 95%)'; // Revert back to original color
	}
}

// Mobile share bar interaction

const profileContainerMobile = document.querySelector(
	'.profile__container-mobile'
);

const shareboxMobile = document.querySelector('.sharebox__mobile');

const shareboxBtn = document.querySelector('.share__button-mobile');

const shareboxMobileBtn = document.querySelector('.sharebox__button-mobile');

shareboxBtn.addEventListener('click', function () {
	profileContainerMobile.style.display = 'none';
	shareboxMobile.style.display = 'grid';
});

shareboxMobileBtn.addEventListener('click', function () {
	profileContainerMobile.style.display = 'grid';
	shareboxMobile.style.display = 'none';
});
