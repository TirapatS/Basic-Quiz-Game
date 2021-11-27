//	References

const imgEl = document.querySelector("img");
const profileImg = document.querySelector("#profile-img")
const scoreEL = document.querySelector(".correct");

const newGameBtn = document.querySelector("#newGame")
const btnOption = document.querySelector(".optionBtn")
const button = document.querySelector("#buttonEl")
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");



const students = [
	{
		"name": "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name": "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name": "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name": "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name": "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name": "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name": "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name": "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name": "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name": "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name": "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name": "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name": "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name": "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name": "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name": "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name": "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name": "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name": "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name": "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name": "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name": "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name": "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name": "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name": "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name": "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name": "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name": "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name": "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name": "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name": "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name": "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name": "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name": "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name": "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name": "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name": "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name": "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name": "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];



const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];



//	Variables
let score = 0;
const totalImages = students.length;
let correctStudent;
let answers = [];
let passedStudents = [];
let currentStudent;
let studentNames;

//	! Adis bild blev större än de andra bilderna så jag lade till 500x500 i html koden om du undrar varför eftersom du sa du ha gjort alla bilder lika stora. :)


//	Array shuffle
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

//	When clicked run startGame function
newGameBtn.addEventListener('click', startGame)

function startGame() {
	profileImg.classList.remove("hide");
	button.classList.remove("hide");
	newGameBtn.classList.add("hide")
	currentStudent = 0;
	passedStudents = [];
	score = 0;
	shuffleArray(students);
	answers = [];
	getAnswers();
	nextStudent();
}

//	Get answers/options to buttons	
function getAnswers() {
	//	Get one RANDOM STUDENT name
	let randomStudent = Math.floor(Math.random() * students.length);
	correctStudent = students[randomStudent];
	studentNames = students.filter((item) => item.name != correctStudent.name)	//	Create new array, inside new array filter out the correctStudent to not get the same name on muliple options/choices/answers.
	answers = []	//	Empty answers array before storing answers.
	answers = studentNames.slice(0,3)	//	Slice the first 3 index of StudentNames
	answers.push(correctStudent) // Pushes in correct THE answer
	
}

//	Next student in line
function nextStudent() {
	//	Removing to prevent stacking.
	a1.removeAttribute('click');
	a2.removeAttribute('click');
	a3.removeAttribute('click');
	a4.removeAttribute('click');

	getAnswers()

	if (!passedStudents.includes(correctStudent) ) {	//	Check if correct student / current student is in passed students. If not, then run the 	code inside brackets.
		shuffleArray(students)
		shuffleArray(answers);	//	Shuffle the answers in a random index.
		imgEl.setAttribute("src", correctStudent.image)	//	Show student image
		a1.innerHTML = `${answers[0].name}`
		a2.innerHTML = `${answers[1].name}`
		a3.innerHTML = `${answers[2].name}`
		a4.innerHTML = `${answers[3].name}`
		passedStudents.push(correctStudent)	//	Pushes the correct student into passed students array to not get the same picture.
		console.log("Passed Students",passedStudents, correctStudent)
	}
	else {
		nextStudent()
	}

	endResults();
}



function endResults() {
	if (passedStudents.length == totalImages) {
		if(score == totalImages) {
			scoreEL.innerHTML = `Game Over! <br>${score} out of ${totalImages} correct! You completely aced it!`;
		} else {
			scoreEL.innerHTML = `Game Over! <br>${score} out of ${totalImages} correct!`;
		}
		profileImg.classList.add("hide");
		button.classList.add("hide");
		newGameBtn.classList.remove("hide")	
	} else {
		scoreEL.innerHTML = `Current score is ${score} out of ${totalImages} total!`
	}
}


a1.addEventListener('click', () => {
	if (correctStudent.name == answers[0].name) {
		score++;

	}
	nextStudent()
})
a2.addEventListener('click', () => {
	if (correctStudent.name == answers[1].name) {
		score++;

	}
	nextStudent()
})
a3.addEventListener('click', () => {
	if (correctStudent.name == answers[2].name) {
		score++;

	}
	nextStudent()
})
a4.addEventListener('click', () => {
	if (correctStudent.name == answers[3].name) {
		score++;

	}
	nextStudent()
})


startGame()
