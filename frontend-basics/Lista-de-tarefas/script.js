const form = document.getElementById('form-tarefas');
const input = document.getElementById('tarefa-input');
const listaTarefas = document.getElementById('tarefas-lista');
const progressBar = document.getElementById('file');

/*Função para atualizar a barra de tarefas*/
function atualizarProgresso(){
    const total = listaTarefas.querySelectorAll('li').length;
    const completas = listaTarefas.querySelectorAll('li.completa').length;
    console.log('total:', total, "Completas:", completas);

    if (total === 0) {
        progressBar.value = 0;
    } else {
        const porcentagem = (completas / total) * 100;
        progressBar.value = porcentagem; 
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // evita o carregamento da pagina

    if (input.value.trim() === "") return;

    // Cria um novo item de tarefa
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="tarefa-info">
            <input type="checkbox" class="check-tarefa">
            <span>${input.value}</span>
        </div>
        <button class="btn-excluir">excluir</button>
    `;

    const checkbox = li.querySelector('.check-tarefa');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completa');
        atualizarProgresso();
    })
    
    // remove a tarefa ao clicar no botão de excluir
    li.querySelector('.btn-excluir').addEventListener('click', () => {
        li.remove();
        atualizarProgresso();
    });

    listaTarefas.appendChild(li);
    input.value = ""; 
    atualizarProgresso();
});