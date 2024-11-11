// Desktop share button interaction
const shareButtonDesktop = document.getElementById('share-button-desktop');

shareButtonDesktop.addEventListener('click', toggleDesktopShare);

function toggleDesktopShare() {
	const shareboxDesktop = document.querySelector('.sharebox__desktop');
	shareboxDesktop.classList.toggle('is-visible');
}

// Mobile share bar interaction

const profileContainer = document.querySelector('.profile__container');

const shareboxMobile = document.querySelector('.share-button');

const shareboxMobileBtn = document.querySelector('.share__button-mobile');

shareboxMobileBtn.addEventListener('click', function () {
	profileContainer.style.display = 'none';
	shareboxMobile.style.display;
});
