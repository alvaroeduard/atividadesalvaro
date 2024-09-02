document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch('credenciais.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password);
            
            if (user) {
                // Criar um token e armazená-lo
                const token = 'seu_token_unico_aqui';
                localStorage.setItem('authToken', token);
                window.location.href = "repositorio.html";
            } else {
                document.getElementById("loginMessage").textContent = "Usuário ou senha inválidos!";
            }
        })
        .catch(error => {
            console.error('Erro ao buscar credenciais:', error);
        });
});
