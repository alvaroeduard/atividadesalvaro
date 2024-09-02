document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Solicita as credenciais do arquivo JSON
    fetch('credenciais.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);
            
            if (user) {
                // Credenciais corretas, redireciona para a página index.html
                window.location.href = "index.html";
            } else {
                // Credenciais incorretas, exibe mensagem de erro
                document.getElementById("loginMessage").textContent = "Usuário ou senha inválidos!";
            }
        })
        .catch(error => {
            console.error('Erro ao buscar credenciais:', error);
        });
});
