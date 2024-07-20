class QuestionView {
  constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.currentPage = 1;
      this.questionsPerPage = 2;
  }

  displayQuestions(questions) {
      this.container.innerHTML = '';
      const form = document.createElement('form');
      form.className = 'container mt-4'; // Bootstrap container

      const startIndex = (this.currentPage - 1) * this.questionsPerPage;
      const endIndex = startIndex + this.questionsPerPage;
      const questionsToShow = questions.slice(startIndex, endIndex);

      questionsToShow.forEach(question => {
          const questionElem = document.createElement('p');
          questionElem.textContent = question.questao;
          questionElem.className = 'fw-bold'; // Bootstrap font weight
          form.appendChild(questionElem);

          const ul = document.createElement('ul');
          ul.className = 'list-unstyled'; // No bullets for list

          question.alternativas.forEach(alt => {
              const li = document.createElement('li');
              const label = document.createElement('label');
              const input = document.createElement('input');
              input.type = 'radio';
              input.name = `question-${question.id}`;
              input.className = 'form-check-input me-2'; // Bootstrap form check
              input.value = alt;
              label.appendChild(input);
              label.append(alt);
              li.appendChild(label);
              ul.appendChild(li);
          });

          form.appendChild(ul);
          form.appendChild(document.createElement('hr'));
      });

      this.container.appendChild(form);
      this.addPaginationControls(questions.length);
  }

  addPaginationControls(totalQuestions) {
      const paginationDiv = document.createElement('div');
      paginationDiv.className = 'pagination pagination-lg justify-content-center'; // Bootstrap pagination

      const totalPages = Math.ceil(totalQuestions / this.questionsPerPage);

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.className = 'page-link'; // Bootstrap page link
          pageButton.textContent = i;
          pageButton.onclick = () => {
              this.currentPage = i;
              this.displayQuestions(window.globalQuestions);
          };
          const pageItem = document.createElement('li');
          pageItem.className = 'page-item'; // Bootstrap page item
          pageItem.appendChild(pageButton);
          paginationDiv.appendChild(pageItem);
      }
      this.container.appendChild(paginationDiv);
  }

  showError(message) {
      alert(message);
  }
}
