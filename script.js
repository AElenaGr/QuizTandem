document.addEventListener('DOMContentLoaded', function () {
  const questionContainer = document.getElementById('question-container');
  const hintBtn = document.getElementById('hint-btn');
  let currentQuestionIndex = 0;
  let score = 0;

  // Cargar las preguntas desde el archivo JSON
  fetch('preguntas.json')
      .then(response => response.json())
      .then(data => {
          // Mostrar la primera pregunta
          showQuestion(data[currentQuestionIndex]);
          
          // Manejar clic en el botón de pista
          hintBtn.addEventListener('click', function () {
              alert(data[currentQuestionIndex].pista);
          });
      });

  function showQuestion(question) {
      questionContainer.innerHTML = `
          <h2>${question.pregunta}</h2>
          <img src="${question.imagen}" alt="Imagen de la pregunta">
      `;
      
      question.respuestas.forEach((respuesta, index) => {
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = 'respuesta';
          input.value = index;

          const label = document.createElement('label');
          label.appendChild(input);
          label.appendChild(document.createTextNode(respuesta));

          questionContainer.appendChild(label);
      });
  }
});
