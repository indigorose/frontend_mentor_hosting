// Desktop share button interaction
const shareButtonDesktop = document.getElementById('share-button-desktop');

shareButtonDesktop.addEventListener('click', toggleDesktopShare);

function toggleDesktopShare() {
	const shareboxDesktop = document.querySelector('.sharebox__desktop');
	shareboxDesktop.classList.toggle('is-visible');
}
