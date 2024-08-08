class QuestionController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  loadQuestions() {
    this.model
      .fetchQuestions()
      .then((questions) => {
        window.globalQuestions = questions.slice(0, this.view.questionsPerPage); // Armazena apenas o número de questões selecionadas
        this.view.displayQuestions(window.globalQuestions);
      })
      .catch(() =>
        this.view.showError(
          "Erro ao carregar as questões. Verifique o console para mais detalhes."
        )
      );
  }

  correctQuestions() {
    const questions = window.globalQuestions;
    let correctCount = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question-${index + 1}"]:checked`);
      if (selectedOption && selectedOption.value === question.respostaCorreta) {
        correctCount++;
      }
    });
  
    alert(`Você acertou ${correctCount} de ${questions.length} questões.`);

    const labels = document.querySelectorAll(".resposta-correta");
    labels.forEach(label => {
      label.style.color = "green";
    })
  }
  
}
