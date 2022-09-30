function openDropDown() {
	navdropdown.classList.add('visible')
	nav.classList.remove('minimized')
	frameWrapper()
}

function closeDropDown() {
	navdropdown.classList.remove('visible')
	nav.classList.add('minimized')
}

function toggleDropDown() {
	navdropdown.classList.toggle('visible')
	nav.classList.toggle('minimized')
}

function frameWrapper() {
	bio.classList.add('minimized')
	wrapper.classList.remove('minimized')
	main.classList.add('wrapperFrame')
}

function frameBio() {
	bio.classList.remove('minimized')
	wrapper.classList.add('minimized')
	main.classList.remove('wrapperFrame')
}