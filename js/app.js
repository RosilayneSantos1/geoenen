document.addEventListener('DOMContentLoaded', () => {
  const model = new QuestionModel('questoes.json');
  const view = new QuestionView('questoes');
  const controller = new QuestionController(model, view);

  const selectElement = document.getElementById('numQuestions');
  selectElement.addEventListener('change', (e) => controller.updateQuestionCount(parseInt(e.target.value)));

  document.querySelector('button').addEventListener('click', controller.loadQuestions);
});
