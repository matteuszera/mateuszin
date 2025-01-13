const usernames = ['matteuszera', 'GlawckHSilva', 'F0Xdesuu', 'DarttVader', 'RYANLOPESFAC']; 
const grid = document.getElementById('student-grid');

usernames.forEach(username => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${data.avatar_url}" alt="${data.name}">
                <h3>${data.name || data.login}</h3>
                <p>Tecnologias: Repositórios: <strong>${data.public_repos}</strong></p>
                <a href="${data.html_url}" target="_blank">Perfil no GitHub</a>
            `;
            grid.appendChild(card);
        })
        .catch(error => {
            console.error('Erro ao obter dados do usuário:', error);
        });
});
