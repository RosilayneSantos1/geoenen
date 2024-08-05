class QuestionModel {
  constructor(dataPath) {
    this.dataPath = dataPath;
  }

  fetchQuestions() {
    return fetch(this.dataPath)
      .then((response) => response.json())
      .then((questions) => {
        return questions.map((question) => {
          // Remover caracteres de controle do enunciado da questão
          question.questao = question.questao.replace(
            /[\x00-\x1F\x7F-\x9F]/g,
            ""
          );
          return question;
        });
      })
      .then((questions) => this.shuffleArray(questions))
      .catch((error) => {
        console.error("Erro ao carregar as questões:", error);
        return [];
      });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
