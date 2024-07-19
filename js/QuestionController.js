class QuestionController {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.numQuestions = 10; // Valor padrão

      // Binding this to class methods
      this.loadQuestions = this.loadQuestions.bind(this);
      this.updateQuestionCount = this.updateQuestionCount.bind(this);
  }

  loadQuestions() {
      this.model.fetchQuestions()
          .then(questions => this.view.displayQuestions(questions, this.numQuestions))
          .catch(() => this.view.showError('Erro ao carregar as questões. Verifique o console para mais detalhes.'));
  }

  updateQuestionCount(num) {
      this.numQuestions = num;
      this.loadQuestions();
  }
}
