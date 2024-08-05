class QuestionView {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.questionsPerPage = 5; // Garantir que o valor padrão seja 5
    }
  
    displayQuestions(questions) {
      this.container.innerHTML = "";
      const form = document.createElement("form");
      form.className = "container mt-4"; // Bootstrap container
  
      const questionsToShow = questions.slice(0, this.questionsPerPage); // Apenas pegar o número de questões selecionadas
  
      questionsToShow.forEach((question, index) => {
        const questionElem = document.createElement("p");
        questionElem.textContent = `${index + 1}. ${question.questao}`;
        questionElem.className = "fw-bold"; // Bootstrap font weight
        form.appendChild(questionElem);
  
        const ul = document.createElement("ul");
        ul.className = "list-unstyled"; // No bullets for list
  
        question.alternativas.forEach((alt) => {
          const li = document.createElement("li");
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `question-${index + 1}`;
          input.className = "form-check-input me-2"; // Bootstrap form check
          input.value = alt;
          label.appendChild(input);
          label.append(alt);
          li.appendChild(label);
          ul.appendChild(li);
        });
  
        form.appendChild(ul);
        form.appendChild(document.createElement("hr"));
      });
  
      this.container.appendChild(form);
    }
  
    showError(message) {
      alert(message);
    }
  }
  