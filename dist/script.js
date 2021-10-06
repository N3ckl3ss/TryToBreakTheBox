let main_hacked_page = document.querySelector(".main_hacked_page")
let job_assigment = document.querySelector(".job_assigment")
let accept = document.querySelector(".accept")
let form_game = document.querySelector(".form_game")
let user = document.querySelector(".user")
let password = document.querySelector(".password")
let submit = document.querySelector(".submit")
let mocking = document.querySelector(".mocking")
let win_screan = document.querySelector(".win_screan")
let actualpage = document.querySelector(".actualpage")
let hiddenlink = document.querySelector(".hiddenlink")
let theChuck = document.querySelector(".theChuck")
let note = document.querySelector(".notes")
let note1 = document.querySelector(".notes1")
let chuck
let joke
let bored
let correctPassword = false
let correctUser = false
let usrname = "Billy B"
let wins = 0
let newChuckPass
let passFromChuck
let annoyed = 1



accept.addEventListener("click", () => {
	job_assigment.classList.toggle("hidden")
	main_hacked_page.classList.toggle("hidden")
	document.body.style.background="#212121";
})


hiddenlink.addEventListener("click", () => {
	form_game.classList.toggle("hidden")
	main_hacked_page.classList.toggle("hidden")
})

user.addEventListener("keyup", () => {
	mocking.classList.add("hidden")
})

password.addEventListener("keyup", () => {
	mocking.classList.add("hidden")
	if(user.value != "john" && user.value != "Billy B" && user.value != "Confucius"){
		mocking.classList.remove("hidden")
		mocking.innerHTML = `<p>Ahhhhhh...Wrong user!<p>`
	}
	if(user.value == "Confucius"){
		FetchTheBored()
		if(password.value.length == passFromChuck.length - annoyed){
			password.value = bored.activity;
			annoyed = annoyed > 1 ? annoyed - 1 : 1
		}
	}
})

submit.addEventListener("click", () => {
	switch (user.value) {
		case "john":
			if(password.value == "Letm3in"){
				correctPassword = true
			}
			break
		case "Billy B":
			if(password.value == passFromChuck){
				correctPassword = true
			}
			break
		case "Confucius":
			if(password.value == passFromChuck){
				form_game.classList.toggle("hidden")
				actualpage.classList.toggle("hidden")
			}
			break
	}

	if (correctPassword) {
		form_game.classList.toggle("hidden")
		win_screan.classList.toggle("hidden")

		FetchTheNoris()
		theChuck.innerHTML = chuck.value + " <br> -by "+ usrname
		newChuckPass = chuck.value
		correctPassword = false
		
	} else {
		FetchTheJoke()
		mocking.classList.remove("hidden")
		mocking.innerHTML = `<p>${joke.joke}<p>`
	}
})

theChuck.addEventListener("click", () =>{
	form_game.classList.toggle("hidden")
	win_screan.classList.toggle("hidden")
	
	let chuckArray = newChuckPass.split(' ')
	let max = 0
	
	for(let words of chuckArray){
		if(words.length > max){
			max = words.length
			passFromChuck = words

		}
	}
	theChuck.innerHTML += ` ${max}`
	if(wins < 1){
		note.classList.remove("hidden")
		note.innerHTML = theChuck.innerHTML;
		usrname = "Confucius"
		wins++
	}else{
		note1.classList.remove("hidden")
		note1.innerHTML = theChuck.innerHTML;
	}
	
	console.log(passFromChuck)
})

//Spinnes the sunburst background
let rays = document.getElementById("rays"), degrees = 0, speed = 0.6;
setInterval(function () {
	degrees += speed;
	rays.setAttribute("style", "-webkit-transform:rotate(" + degrees + "deg)")
}, 20)

//Fetches

fetch("https://v2.jokeapi.dev/joke/Programming?&type=single", { //I needed to add it again because it wouldn't get the fetch again
	"method": "GET"
})
	.then(res => res.json())
	.then(data => joke = data)
	.catch(err => {
		console.error(err);
	});

function FetchTheJoke() { 
	fetch("https://v2.jokeapi.dev/joke/Programming?&type=single", {
		"method": "GET"
	})
		.then(res => res.json())
		.then(data => joke = data)
		.catch(err => {
			console.error(err);
		});
}
fetch("https://www.boredapi.com/api/activity", {
	"method": "GET",

})
	.then(res => res.json())
	.then(data => bored = data)
	.catch(err => {
		console.error(err);
	});

function FetchTheBored(){
	fetch("https://www.boredapi.com/api/activity", {
	"method": "GET",

})
	.then(res => res.json())
	.then(data => bored = data)
	.catch(err => {
		console.error(err);
	});

}
	fetch(`https://api.chucknorris.io/jokes/random?category=${"history"}`, {
		"method": "GET",

	})
		.then(res => res.json())
		.then(data => chuck = data)
		.catch(err => {
			console.error(err);
		});

function FetchTheNoris() {
	fetch(`https://api.chucknorris.io/jokes/random?category=${"history"}`, {
		"method": "GET",

	})
		.then(res => res.json())
		.then(data => chuck = data)
		.catch(err => {
			console.error(err);
		});
}




//Hack the box intro
console.log(`%c
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
.           The first step of the challenge!                                      .
.                                                                                 .
.                      uuuuuuu                                                    .
.                  uu$$$$$$$$$$$uu                                                .
.               uu$$$$$$$$$$$$$$$$$uu                                             .
.              u$$$$$$$$$$$$$$$$$$$$$u                                            .
.             u$$$$$$$$$$$$$$$$$$$$$$$u                                           .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                   K E E P  C A L M       .
.            u$$$$$$$$$$$$$$$$$$$$$$$$$u                                          .
.            u$$$$$$"   "$$$"   "$$$$$$u                        A N D             .
.            "$$$$"      u$u       $$$$"                                          .
.             $$$u       u$u       u$$$                        H A C K            .
.             $$$u      u$$$u      u$$$                                           .
.              "$$$$uu$$$   $$$uu$$$$"                         T H I S            .
.               "$$$$$$$"   "$$$$$$$"                                             .
.                 u$$$$$$$u$$$$$$$u                             B O X             .
.                  u$"$"$"$"$"$"$u                                                .
.       uuu        $$u$ $ $ $ $u$$       uuu                                      .
.      u$$$$        $$$$$u$u$u$$$       u$$$$                                     .
.       $$$$$uu      "$$$$$$$$$"     uu$$$$$$                                     .
.     u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$                                   .
.     $$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"                                   .
.      """      ""$$$$$$$$$$$uu ""$"""                                            .
.                uuuu ""$$$$$$$$$$uuu                                             .
.       u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$                                    .
.       $$$$$$$$$$""""           ""$$$$$$$$$$$"                                   .
.        "$$$$$"                      ""$$$$""                                    .
.          $$$"                         $$$$"                                     .
.                                                                                 .
.                 BTW user:John password:Letm3in                                  .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .`, "color:#9acc14; background:black; font-family: monospace")