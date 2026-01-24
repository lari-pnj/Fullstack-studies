const telaEntrar = document.querySelector('.entrar');
const telaCadastrar = document.querySelector('.login');

const linkIrParaCadastro = document.getElementById('link-criar');
const linkIrParaLogin = document.getElementById('link-entrar');

linkIrParaCadastro.addEventListener('click', (event) => {
    event.preventDefault();
    telaEntrar.style.display = 'none';
    telaCadastrar.style.display = 'flex';
});

linkIrParaLogin.addEventListener('click', (event) => {
    event.preventDefault();
    telaCadastrar.style.display = 'none';
    telaEntrar.style.display = 'flex';
});