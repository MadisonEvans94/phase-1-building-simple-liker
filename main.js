// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", init);

function init() {
	function toggleLike(likeElement) {
		if (likeElement.innerText === EMPTY_HEART) {
			likeElement.innerText = FULL_HEART;
		} else if (likeElement.innerText === FULL_HEART) {
			likeElement.innerText = EMPTY_HEART;
		}
	}

	function handleCall(like) {
		mimicServerCall()
			.then((response) => {
				console.log(response);
				toggleLike(like);
			})
			.catch((error) => console.log(error));
	}

	const likes = document.querySelectorAll(".like-glyph");
	likes.forEach((like) =>
		like.addEventListener("click", () => {
			console.log("clicked");

			handleCall(like);
		})
	);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject("Random server error. Try again.");
			} else {
				resolve("Pretend remote server notified of action!");
			}
		}, 300);
	});
}
