// Banco de dados interno com os 6 posts sobre a vida escolar
const posts = [
    {
        titulo: "Dia 1: O Caos do Primeiro Dia de Aula",
        data: "03 de Fevereiro de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "O primeiro dia é sempre uma mistura de ansiedade e sono acumulado das férias. Reencontrar a galera no pátio foi a melhor parte, mas descobrir que a primeira aula era de matemática logo cedo quebrou o ritmo. A escola mudou algumas salas de lugar, então metade da turma se perdeu antes do sinal tocar."
    },
    {
        titulo: "Dia 2: Sobrevivendo à Primeira Prova Surpresa",
        data: "12 de Março de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "Ninguém estava esperando por isso. O professor de História entrou na sala, mandou guardar os cadernos e distribuiu uma folha de testes. O desespero foi geral. Felizmente, eu lembrava de alguns tópicos que li na semana passada, mas com certeza o recreio hoje foi tenso discutindo as respostas com o grupo."
    },
    {
        titulo: "Dia 3: O Piquenique Interativo no Intervalo",
        data: "25 de Abril de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "Hoje decidimos fazer algo diferente no horário do almoço. Juntamos três turmas no gramado central e cada um levou um lanche para compartilhar. Teve de tudo: bolo, salgadinhos e até refrigerante quente. Momentos assim fazem as aulas cansativas valerem a pena. Rimos muito antes de voltar para a aula de física."
    },
    {
        titulo: "Dia 4: Virando a Noite para o Trabalho de Biologia",
        data: "14 de Maio de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "O clássico erro do estudante: deixar para montar a maquete de células na véspera. Meu grupo veio para minha casa e passamos a noite cortando isopor, pintando e colando peças. O resultado ficou incrível, mas a base de café e energético. Apresentamos o trabalho hoje e o cansaço valeu a nota máxima!"
    },
    {
        titulo: "Dia 5: A Grande Final do Torneio Interclasses",
        data: "18 de Junho de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "Clima de Copa do Mundo na escola! Nossa sala chegou à final do campeonato de futsal contra o terceiro ano. O ginásio estava lotado, todo mundo gritando e batendo tambor. O jogo foi pegado e terminou empatado, mas ganhamos nos pênaltis. A comemoração no pátio foi inesquecível."
    },
    {
        titulo: "Dia 6: Alívio Pré-Férias e Despedidas",
        data: "03 de Julho de 2026",
        imagem: "https://unsplash.com",
        conteúdo: "Último dia do semestre! A maioria dos professores já fechou as notas, então passamos o dia conversando, jogando cartas no fundo da sala e limpando os armários. É uma sensação ótima de dever cumprido. Agora são 30 dias sem ouvir o despertador tocar às 6h da manhã. Boas férias para nós!"
    }
];

// Função para renderizar os posts na tela
function carregarPosts() {
    const container = document.getElementById("blog-container");

    posts.forEach(post => {
        // Criar o elemento do post
        const postElement = document.createElement("article");
        postElement.classList.add("post");

        // Inserir a estrutura HTML interna do post
        postElement.innerHTML = `
            <div class="post-date">${post.data}</div>
            <h2>${post.titulo}</h2>
            <img class="post-img" src="${post.imagem}" alt="${post.titulo}">
            <p>${post.conteúdo}</p>
        `;

        // Adicionar o post ao container principal
        container.appendChild(postElement);
    });
}

// Executar a função assim que a página carregar
window.onload = carregarPosts;
