const imgEl = document.querySelector("img");
const correctCounterEl = document.querySelector(".correct");
const missingstudentsEl = document.querySelector("#studentsImg404");
const honorableStudentsEl = document.querySelector(".missingStudents");
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");



const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
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
let correctCounter = 0;
const totalImages = students.length;
let currentStudentIndex = students[0];
let correctAnswer = students[0].name;
let currentStudent = 0;
let answers = [];
let passedStudents = [];

//	Get Student Group, where X is correct and rest is randomized  
function getanswers(x) {
	answers = [];
	answers.push(students[x]) // Pushes in correct answer
	for(let i = 0; i < 3; i++) { //	Get random alternatives
			answers.push(students[i])
		if (i > students.length) {	//	Checks if students actually exists
			answers.push(students[x])
		}	
	}
	console.log(answers)
}

//	Array shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
	getanswers();
	nextStudent()
}

const btn = document.getElementById("newgame");

btn.addEventListener("click", startGame);

let correctStudent;

//	Next student in line
function nextStudent() {
			
		//	Get one RANDOM STUDENT name aka choice generator.
		let randomStudent = Math.floor(Math.random() * students.length);
		// for (let i = 0; i < students.length; i++){
		// 	if (students[randomStudent] == students[i].name) {
		// 		correctStudent = students[i];
		// 	}
		// }
		correctStudent = students[randomStudent];
		getanswers(randomStudent);
	if(!passedStudents.includes(correctStudent)) {
		shuffleArray(students);
		shuffleArray(answers);
		correctAnswer = correctStudent.name;
		imgEl.setAttribute("src", correctStudent.image)
		a1.innerHTML = `${answers[0].name}`
		a2.innerHTML = `${answers[1].name}`
		a3.innerHTML = `${answers[2].name}`
		a4.innerHTML = `${answers[3].name}`
		currentStudent = currentStudent + 4;
		checkResults()
		passedStudents.push(correctStudent)
	} else {
		nextStudent()
		for (let i = 0; i < passedStudents.length; i++) {
			console.log(passedStudents[i].name)
		}
	}
}


//	Check results after each student "guess". If "currentStudentIndex" is EQUAL to "totaLImages", end the game and show students without images and player score out of possible score.
function checkResults() {
    if (currentStudentIndex == totalImages) {
        correctCounterEl.innerHTML = `Game Over! <br>${correctCounter} out of ${totalImages} correct!`;
        imgEl.classList.add(".hide")        
		honorableStudentsEl.classList.remove("missingStudents")
		missing_students.forEach(mStuds => {
			missingstudentsEl.innerHTML += `
				<li>
					${mStuds.name}.
				</li>
			`;
		}) 
    } else {
        correctCounterEl.innerHTML = `Your current score is ${correctCounter} out of ${totalImages}`
    }
}


