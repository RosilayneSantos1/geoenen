class QuestionModel {
    constructor(dataPath) {
        this.dataPath = dataPath; // Caminho para o arquivo JSON
    }

    fetchQuestions() {
        return fetch(this.dataPath)
            .then(response => response.json())
            .then(questions => this.shuffleArray(questions)) // Embaralha antes de retornar
            .catch(error => {
                console.error('Erro ao carregar as questões:', error);
                return []; // Retorna um vetor vazio em caso de erro
            });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca de elementos
        }
        return array;
    }
}
