document.addEventListener("DOMContentLoaded", () => {
    fetch('http://167.234.254.164:8088/professores')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data);  // Verifique os dados recebidos no console
            const tableBody = document.querySelector('#professoresTable tbody');
            tableBody.innerHTML = '';  // Limpa o corpo da tabela
            
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(professor => {
                    console.log('Processando professor:', professor);  // Verifique cada item no console
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${professor.id}</td>
                        <td>${professor.nome}</td>
                        <td>${professor.email}</td>
                        <td>${professor.cpf}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.log('Nenhum dado encontrado ou dados não são um array');
            }
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
