class QuestionController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
  }

  loadQuestions() {
      this.model.fetchQuestions()
          .then(questions => {
              window.globalQuestions = questions; // Armazena globalmente para paginação
              this.view.displayQuestions(questions);
          })
          .catch(() => this.view.showError('Erro ao carregar as questões. Verifique o console para mais detalhes.'));
  }
}
