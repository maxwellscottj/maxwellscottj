var postCategory;

function clearPosts() {
	postCategory = '';
	var postsToClear = [];
	for (let i = 0; i < wrapper.children.length; i++) {
		if (!wrapper.children[i].classList.contains('banner')) {
			postsToClear.push(wrapper.children[i]);
		}
	}
	for (let i = 0; i < postsToClear.length; i++) {
		wrapper.removeChild(postsToClear[i])
	}
}

function generatePost(posts) {
	clearPosts()
	postCategory = posts;
	var newScrollBox = document.createElement('div')
	newScrollBox.classList.add('scrollBox')
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
		newScrollBox.appendChild(newSection);
	}
	if (posts){
		wrapper.appendChild(newScrollBox);
	}
}

function bannerSwap(newBanner) {
	var bannerURL;
	var categoryCache = postCategory;
	clearPosts();
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
	newBanner.setAttribute('id','mainBanner');
	newBanner.classList.add('banner')
	newBanner.src = bannerURL;
	wrapper.appendChild(newBanner);
	mainBanner = newBanner;
	generatePost(categoryCache);
	console.log(mainBanner.src)
	
}

var dropDownOpened;

function openDropDown() {
	if (!dropDownOpened) {
		closeContact()
		dropDownOpened = true;
		navdropdown.classList.add('visible')
		nav.classList.remove('minimized')
		frameWrapper()
	}
}

function closeDropDown() {
	dropDownOpened = false;
	navdropdown.classList.remove('visible')
	nav.classList.add('minimized')
}

function tryCloseDropDown() {
	dropDownOpened = false;
	setTimeOut(function(){
		if (!dropDownOpened) {
			closeDropDown();
		}
	},1);
}

function interruptCloseDropDown() {
	dropDownOpened = true;
}

function toggleDropDown() {
	if(dropDownOpened){
		closeDropDown();
	} else {
		openDropDown();
	}
}

var contactOpened;

function openContact() {
	closeDropDown();
	contactOpened = true;
	contactpopup.classList.add('visible')
}

function closeContact(){
	contactOpened = false;
	contactpopup.classList.remove('visible')
	nav.classList.add('minimized')
}

function toggleContact(){
	if (contactOpened) {
		closeContact();
	} else {
		openContact();
		frameBio();
	}
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