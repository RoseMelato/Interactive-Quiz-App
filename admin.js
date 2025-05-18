function login() {
  const pwd = document.getElementById("adminPassword").value;
  if (pwd === "techQuizAdmin") {
    document.getElementById("questionForm").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
  } else {
    alert("Incorrect password.");
  }
}

function addQuestion() {
  const getVal = id => document.getElementById(id).value;
  const question = getVal("questionText");
  const options = {
    A: getVal("optionA"),
    B: getVal("optionB"),
    C: getVal("optionC"),
    D: getVal("optionD")
  };
  const correct = getVal("correctAnswer");
  const category = getVal("category");

  if (!question || !options.A || !options.B || !options.C || !options.D || !correct || !category) {
    alert("Fill in all fields before submitting.");
    return;
  }

  const newQuestion = {
    question,
    options,
    correctAnswer: correct,
    category
  };

  const stored = localStorage.getItem("quizQuestions");
  const saved = stored ? JSON.parse(stored) : [];
  saved.push(newQuestion);
  localStorage.setItem("quizQuestions", JSON.stringify(saved));

  alert("Question saved successfully.");

  ["questionText", "optionA", "optionB", "optionC", "optionD", "category"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("correctAnswer").value = "A";
}

