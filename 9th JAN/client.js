// const btn = document.querySelector(#a)const arr = [
const arr = [
  {
    question: 'Which of these phrases means "Bewakoof Banana"?',
    a: "Jhoote Phekna",
    b: "Topi Pahnana",
    c: "Note Lahrana",
    d: "Upvaas Karna",
    correct: "Topi Pahnana",
    money: "1,000",
  },
  {
    question: '"Kanya Pujan is a ritual associated with which Hindu festival',
    a: "Gangaur",
    b: "Navratri",
    c: "Hartalika Teej",
    d: "Ahoi Asthanmi",
    correct: "Navratri",
    money: "2,000",
  },
  {
    question:
      "With which part of a computer is the advertising slogan 'Intel Inside' associated",
    a: "BIOS",
    b: "RAM",
    c: "USB",
    d: "Processor",
    correct: "Processor",
    money: "5,000",
  },
  {
    question: "Mithila and Madhubani are also names of which kind of folk art",
    a: "Embroidery",
    b: "Handicraft",
    c: "Folk songs",
    d: "Painting",
    correct: "Painting",
    money: "10,000",
  },
  {
    question:
      "Muammar Gaddafi was the ruler of which country from 1969 to 2011?",
    a: "Libya",
    b: "Syria",
    c: "Sudan",
    d: "Egypt",
    correct: "Libya",
    money: "20,000",
  },
  {
    question:
      "Karnataka, one of the southern states of India, was known by which of these names before being renamed in 1973?",
    a: "Khandesh",
    b: "Mysore",
    c: "Coorg",
    d: "Madurai",
    correct: "Mysore",
    money: "40,000",
  },
  {
    question:
      "After their meeting at Ashoka Vatika, what object did Devi Sita give to Lord Hanuman to take to Lord Rama?",
    a: "Her necklace",
    b: "Her anklet",
    c: "Her hair ornament",
    d: "A piece of cloth",
    correct: "Her hair ornament",
    money: "80,000",
  },
  {
    question: "In which of these continents bats are not found",
    a: "Africa",
    b: "Australia",
    c: "South America",
    d: "Antarctica",
    correct: "Antarctica",
    money: "1,60,000",
  },
  {
    question:
      "In which of these positions did Sardar Vallabhbhai Patel not serve in the first cabinet of independent India?",

    a: "Deputy Prime Minister",
    b: "Minister of Information",
    c: "Minister of Defence",
    d: "Minister of Home Affairs and State",
    correct: "Minister of Defence",
    money: "3,20,000",
  },
  {
    question:
      "The desktop application of which web browser will be retired and will go without support from June 2022",
    a: "Opera",
    b: "Firefox",
    c: "Safari 14",
    d: "Internet Explorer",
    correct: "Internet Explorer",
    money: "6,40,000",
  },
  {
    question:
      "Which of the following dynasties did the Kanva dynasty overthrow to come to power around 73 BCE in Magadha?",
    a: "Maurya Dynasty",
    b: "Shunga Dynasty",
    c: "Pala Dynasty",
    d: "Cheera Dynasty",
    correct: "Shunga Dynasty",
    money: "12,50,000",
  },
  {
    question:
      "The trophy which is awarded to the winners of the women's singles at the Australian Open is named after which legendary tennis star?",
    a: "Daphne Akhurst",
    b: "Margaret Court",
    c: "Evonne Goolagong Cawley",
    d: "Lessley Bowery",
    correct: "Daphne Akhurst",
    money: "25,00,000",
  },
  {
    question:
      "Who became the first Chancellor of the ALigarh Muslim University in 1920?",
    a: "Sultan Jahan Begum",
    b: "Maulana Abdul Kalam Azad",
    c: "Sir Syed Ahmad Khan",
    d: "Mir Usman Ali Khan",
    correct: "Sultan Jahan Begum",
    money: "50,00,000",
  },
  {
    question:
      "Who is the first woman and also former astronaut to reach the deepest point of the ocean , Mariana Trench?",
    a: "Sally Ride",
    b: "Valentina Tereshkova",
    c: "Svetlana Savitskaya",
    d: "Kathryn D Sullivan",
    correct: "Kathryn D Sullivan",
    money: "1 Crore",
  },
  {
    question:
      "Where in Singapore dod Netaji Subhash Chandra Bose make the first proclamation of a Azad Hind government?",
    a: "Cathy Cinema Hall",
    b: "Fort Canning Park",
    c: "National University of Singapore",
    d: "National Gallery Singapore",
    correct: "Cathy Cinema Hall",
    money: "7 Crore",
  },
];
const que = document.querySelector(".ques");
const op1 = document.querySelector("#opt1");
const op2 = document.querySelector("#opt2");
const op3 = document.querySelector("#opt3");
const op4 = document.querySelector("#opt4");
const options = document.querySelectorAll(".options");
const contain = document.querySelector(".contain");
const win = document.querySelector(".win");
const lf1 = document.querySelector("#lf1");
const lf2 = document.querySelector("#lf2");
const lf3 = document.querySelector("#lf3");
const clue = document.querySelector(".clue");
const btn = document.querySelector(".btn");
const on = document.querySelector(".on");

const circle = document.querySelector(".circle");
const money = document.querySelector(".money");
var audio = new Audio("KBC.mp3");

const onn = document.querySelector(".onn");
const quit = document.querySelector(".quit");
// money.style.display = "flex";
// win.style.display = "flex";
// circle.style.display = "flex";
// contain.style.display = "flex";
// audio.play();
let score = 0;
let i = 0;
function loadquiz() {
  que.innerHTML = arr[i].question;
  op1.innerHTML = arr[i].a;
  op2.innerHTML = arr[i].b;
  op3.innerHTML = arr[i].c;
  op4.innerHTML = arr[i].d;
}

function moneys() {
  money.innerHTML = "₹ " + arr[i].money;
}

// ad.style.display="none";
function show() {
  contain.innerHTML = `<h2>Congratulations</h2>
    <p><h1>You won :${score}</h1></p>
    <p><button class="btn" onclick="location.reload()" style="width:174px; margin:15px;cursor:pointer;font-size:26px; border-radius:4px;"> Play Again </button></p>`;
  contain.style.backgroundColor = "gold";
  contain.style.height = "400px";
  contain.style.width = "600px";
  contain.style.color = "black";
  contain.style.fontSize = "30px";
  contain.style.margin = "10px";
  // muted('KBC.mp3');
  audio.muted = true;

  money.style.display = "none";
  win.style.display = "none";
  circle.style.display = "none";
}
quit.addEventListener("click", () => {
  setTimeout(() => {
    show();
  }, 600);
});
for (item of options) {
  item.addEventListener("click", function (e) {
    buttonText = e.target.innerText;

    if (buttonText == arr[i].correct) {
      score = "₹ " + arr[i].money;

      setTimeout(() => {
        e.target.style.background = "green";

        win.innerText = `You won: ${score}`;

        // console.log(score);
      }, 200);

      setTimeout(() => {
        i++;

        if (i < arr.length) {
          decolor();
          moneys();
          loadquiz();

          if (i <= 3) {
            circle.innerHTML = 30;
            timer = 30;
            clearInterval(interval);
          } else if (i > 3) {
            circle.innerHTML = 45;
            timer = 45;
            clearInterval(interval);
          }
        } else {
          show();
        }
      }, 1000);
    } else {
      setTimeout(() => {
        e.target.style.background = "red";
      }, 200);
      setTimeout(() => {
        if (i < 3) score = "₹ " + "0";
        else if (i > 3 && i < 8) score = "₹ " + "10, 000";
        else if (i > 8) score = "₹ " + "3,20,000";
        show();
        win.style.background = "black";
        win.style.color = "black";
      }, 1000);
    }
  });
}
function decolor() {
  options.forEach((curr) => {
    curr.style.background = "#2d035e";
  });
}
var timer = 30;
// const id = document.querySelector(".timer");

function time() {
  circle.innerHTML = 30;
  var interval = setInterval(function () {
    timer--;
    circle.innerHTML = timer;
    if (timer === 0) {
      clearInterval(interval);
      circle.style.color = "black";
      win.style.backgroundColor = "black";

      show();
    }
  }, 1000);
}

lf1.addEventListener("click", () => {
  clue.innerHTML = `Answer: ${arr[i].correct}`;
  // lf1.style.backgroundColor = "red";
  //  clue.style.color = "black";

  setInterval(() => {
    clue.innerHTML = "";
  }, 4000);
  lf1.disabled = true;
});

lf2.addEventListener("click", () => {
  clue.innerHTML = `Answer: ${arr[i].correct}`;
  // lf2.style.backgroundColor = "red";
  setInterval(() => {
    clue.innerHTML = "";
  }, 4000);
  lf2.disabled = true;
});

lf3.addEventListener("click", () => {
  clue.innerHTML = `Answer: ${arr[i].correct}`;
  setInterval(() => {
    clue.innerHTML = "";
  }, 4000);
  // clue.style.color = "black";
  lf3.disabled = true;
});

time();
loadquiz();
moneys();
