class QuestionView {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
  }

  displayQuestions(questions, numQuestions) {
      this.container.innerHTML = ''; // Limpa o conteúdo anterior
      const form = document.createElement('form');
      questions.slice(0, numQuestions).forEach(question => {
          const questionElem = document.createElement('p');
          questionElem.textContent = question.questao;
          form.appendChild(questionElem);
          
          question.alternativas.forEach(alt => {
              const label = document.createElement('label');
              const input = document.createElement('input');
              input.type = 'radio';
              input.name = `question-${question.id}`;
              input.value = alt;
              label.appendChild(input);
              label.append(` ${alt}`);
              form.appendChild(label);
          });

          form.appendChild(document.createElement('hr')); // Separação visual entre as questões
      });
      this.container.appendChild(form);
  }

  showError(message) {
      alert(message);
  }
  
}
