document.addEventListener('DOMContentLoaded', () => {
  const model = new QuestionModel('questoes.json');
  const view = new QuestionView('questoes');
  const controller = new QuestionController(model, view);

  document.querySelector('button').addEventListener('click', () => controller.loadQuestions());
  document.getElementById('numQuestions').addEventListener('change', (e) => {
      view.questionsPerPage = parseInt(e.target.value);
      controller.loadQuestions();
  });
});
