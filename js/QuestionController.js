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
function corrigirQuestao(idQuestao, respostaUsuario) {
    const questao = questionsDB.questions.find(q => q.id === idQuestao);
    
    if (!questao) {
      return "Questão não encontrada";
    }
    
    if (respostaUsuario.trim().toLowerCase() === questao.correctAnswer.toLowerCase()) {
      return "Resposta correta!";
    } else {
      return "Resposta incorreta. A resposta correta é: " + questao.correctAnswer;
    }
  }
  
  // Exemplo de uso
  console.log(corrigirQuestao(1, "Assegurar a integridade territorial")); // Saída esperada: "Resposta correta!"
  console.log(corrigirQuestao(2, "Cristóvão Colombo")); // Saída esperada: "Resposta incorreta. A resposta correta é: Pedro Álvares Cabral"
  console.log(corrigirQuestao(3, "Rio de Janeiro")); // Saída esperada: "Questão não encontrada"