let questions = [{
    "q": "Quem é este bebê?",
    "img": "assets/images/ed_baby.png",
    "opt": ["Edson", "Laura"],
    "ans": 0
  }, {
    "q": "Qual será a reação da cacau ao ver o baby?",
    "img": "assets/images/cacau.png",
    "opt": ["Protetora", "Ciumenta"],
    "ans": undefined,
  }, {
    "q": "Quem é este bebê?",
    "img": "assets/images/lau_baby.png",
    "opt": ["Edson", "Laura"],
    "ans": 1,
  }, {
    "q": "Quem vai mimar mais o bebê?",
    "opt": ["Laura", "Edson"],
    "ans": 1,
  }, {
    "q": "Quem vai contar as melhores piadas para o bebê?",
    "opt": ["Edson", "Laura"],
    "ans": 0,
  }, {
    "q": "Quem vai ser mais bravo?",
    "opt": ["Laura", "Edson"],
    "ans": 0,
  }, {
    "q": "Para você? Menino ou menina?!",
    "opt": ["Menino", "Menina"],
    "ans": 1,
  }
];
var idx = 0;

function startButtonClicked() {
  var intro = document.getElementById("intro");
  var quizz = document.getElementById("quizz");
  intro.style.display = "none";
  quizz.style.display = "block";
  prepareQuestion();
}

function prepareQuestion() {
  let q = questions[idx];
  var title = document.getElementById("question");
  var opt1 = document.getElementById("opt1");
  var opt2 = document.getElementById("opt2");
  var img = document.getElementById("image");
  var result = document.getElementById("result");

  title.textContent = q.q;
  opt1.textContent = q.opt[0];
  opt2.textContent = q.opt[1];
  if (q.img) {
    img.src = q.img;
    img.style.display = "block";
    title.style.marginBottom = 0;
  } else {
    img.style.display = "none";
    title.style.marginBottom = "200px";
  }
  result.style.display = "none";
}

function onOptionSelected(el) {
  var msg = document.getElementById("msg");

  let clicked = el.id == "opt2";
  let answer = questions[idx].ans;
  if (answer === undefined || !(answer ^ clicked)) {

    document.getElementById("certa-resposta").play();
    msg.textContent = "certa resposta";
  } else {
    document.getElementById("errou").play();
    msg.textContent = "Errooou!";
  }

  var resultBlock = document.getElementById("result");
  result.style.display = "flex";

  idx++;
  if (idx == questions.length) {
    setTimeout(showEndVideo, 2 * 1000);
  }
}

function next() {
  document.getElementById("result").style.display = "none";
  if (idx < questions.length) {
    prepareQuestion();
  } else {
    showEndVideo();
  }
}

function showEndVideo() {
  document.getElementById("quizz").style.display = "none";
  document.getElementById("outro").style.display = "block";
}
