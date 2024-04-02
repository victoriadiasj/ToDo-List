function addTask() {
  // Recupera o campo de entrada e a lista de tarefas do HTML
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  // Verifica se o valor do campo de entrada não está vazio após remover os espaços em branco
  // Se não estiver vazio, o operador && permite que o código continue, senão, ele para aqui
  taskInput.value.trim() && taskList.appendChild(
    // Cria um novo elemento de lista (li) e configura suas propriedades
    Object.assign(document.createElement('li'), {
      // Define o texto da nova tarefa como o valor do campo de entrada
      textContent: taskInput.value,
      // Adiciona um evento de clique à nova tarefa
      onclick() {
        // Alterna a classe 'completed' quando a tarefa for clicada
        this.classList.toggle('completed');
      }
    })
  );
  
  // Limpa o campo de entrada após adicionar a tarefa à lista
  taskInput.value = '';
}
