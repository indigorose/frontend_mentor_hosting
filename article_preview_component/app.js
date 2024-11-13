// Desktop share button interaction
const shareButtonDesktop = document.getElementById('share-button-desktop');

shareButtonDesktop.addEventListener('click', toggleDesktopShare);

function toggleDesktopShare() {
	const shareboxDesktop = document.querySelector('.sharebox__desktop');
	shareboxDesktop.classList.toggle('is-visible');
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
