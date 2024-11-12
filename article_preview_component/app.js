// Desktop share button interaction
const shareButtonDesktop = document.getElementById('share-button-desktop');

shareButtonDesktop.addEventListener('click', toggleDesktopShare);

function toggleDesktopShare() {
	const shareboxDesktop = document.querySelector('.sharebox__desktop');
	shareboxDesktop.classList.toggle('is-visible');
}

// Mobile share bar interaction

const profileContainer = document.querySelector('.profile__container-mobile');

const shareboxMobile = document.querySelector('.sharebox__mobile');

const shareboxBtn = document.querySelector('.sharebox__button-mobile');

const shareboxMobileBtn = document.querySelector('.mobile__btn');

shareboxBtn.addEventListener('click', function () {
	profileContainer.style.display = 'none';
	shareboxMobile.style.display = 'flex';
});

shareboxMobileBtn.addEventListener('click', function () {
	profileContainer.style.display = 'flex';
	shareboxMobile.style.display = 'none';
});
