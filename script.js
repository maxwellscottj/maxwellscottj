var postCategory;

function clearPosts() {
	postCategory = '';
	for (let i = 0; i < wrapper.children.length; i++) {
		if (!wrapper.children[i].classList.contains('banner')) {
				wrapper.removeChild(wrapper.children[i])
		}
	}
}

function generatePost(posts) {
	clearPosts()
	postCategory = posts;
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
				newImage.classList.add('galleryItem')
				newImage.src = parsedPost.Images[i].url
				newImage.alt = parsedPost.Images[i].alt
				newSection.appendChild(newImage);
				if (parsedPost.Images[i].caption) {
					var newCaption = document.createElement('p');
					newCaption.innerHTML = parsedPost.Images[i].caption;
					newSection.appendChild(newCaption);
				}
			}
		}
		if (parsedPost.Videos){
			for (let i = 0; i < parsedPost.Videos.length; i++) {
				var newVideo = document.createElement('iframe');
				newVideo.src = parsedPost.Videos[i].url
				newImage.alt = parsedPost.Images[i].alt
				newSection.appendChild(newVideo);
				if (parsedPost.Videos[i].caption) {
					var newCaption = document.createElement('p');
					newCaption.innerHTML = parsedPost.Videos[i].caption;
					newSection.appendChild(newCaption);
				}
			}
		}
		wrapper.appendChild(newSection);
	}
	
}

function bannerSwap(newBanner) {
	var bannerURL;
	switch (newBanner) {
		case 'Code':
			bannerURL = 'images/CodeBanner.png'
			break;
		case '2D':
			bannerURL = 'images/2DBanner.png'
			break;
		case '3D':
			bannerURL = 'images/3DBanner.png'
			break;
	}
	mainBanner.parentNode.removeChild(mainBanner);
	var newBanner = document.createElement('img');
	newBanner.id = 'mainBanner'
	newBanner.classList.add('banner')
	newBanner.src = bannerURL;
	wrapper.appendChild(newBanner);
	mainBanner = newBanner;
	console.log(mainBanner.src)
	if (postCategory) {
		clearPosts();
		generatePost(postCategory);
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
	clearPosts();
}