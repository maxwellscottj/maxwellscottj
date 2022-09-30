function generatePost (posts) {
	wrapper.innerHTML='';
	for (let i = 0; i < posts.length; i++) {
		var parsedPost = posts[i];
		console.log(parsedPost)
		var newSection = document.createElement('section');
		var newHeader = document.createElement('h2');
		var newPara = document.createElement('p');
		newHeader.innerHTML=`${parsedPost.Title}`;
		newPara.innerHTML=`${parsedPost.TextBody}`
		newSection.appendChild(newHeader);
		newSection.appendChild(newPara);
		if (parsedPost.Images){
			for (let i = 0; i < parsedPost.Images.length; i++) {
				var newImage = document.createElement('img');
				newImage.src = parsedPost.Images[i].url
				newSection.appendChild(newImage);
			}
		}
		wrapper.appendChild(newSection);
	}
}

function openDropDown() {
	closeContact()
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

function openContact() {
	closeDropDown();
	contactpopup.classList.add('visible')
	nav.classList.remove('minimized')
	frameBio();
}

function closeContact(){
	contactpopup.classList.remove('visible')
	nav.classList.add('minimized')
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