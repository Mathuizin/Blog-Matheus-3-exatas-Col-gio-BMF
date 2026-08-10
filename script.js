// Banco de dados interno atualizado com IDs, curtidas, comentários e imagens locais em .jpeg
const posts = [
    {
        id: 1,
        titulo: "Dia 1: O Caos do Primeiro Dia de Aula",
        data: "03 de Fevereiro de 2026",
        imagem: img/foto1.jpeg,
        conteúdo: "O primeiro dia é sempre uma mistura de ansiedade e sono acumulado das férias. Reencontrar a galera no pátio foi a melhor parte, mas descobrir que a primeira aula era de matemática logo cedo quebrou o ritmo. A escola mudou algumas salas de lugar, então metade da turma se perdeu antes do sinal tocar.",
        curtidas: 12,
        curtido: false,
        comentarios: ["Nossa, eu também me perdi todinha!", "Matemática no primeiro horário é maldade."]
    },
    {
        id: 2,
        titulo: "Dia 2: Sobrevivendo à Primeira Prova Surpresa",
        data: "12 de Março de 2026",
        imagem: "imagens/foto2.jpeg",
        conteúdo: "Ninguém estava esperando por isso. O professor de História entrou na sala, mandou guardar os cadernos e distribuiu uma folha de testes. O desespero foi geral. Felizmente, eu lembrava de alguns tópicos que li na semana passada, mas com certeza o recreio hoje foi tenso discutindo as respostas com o grupo.",
        curtidas: 8,
        curtido: false,
        comentarios: ["Quase chorei nesse dia kkkk"]
    },
    {
        id: 3,
        titulo: "Dia 3: O Piquenique Interativo no Intervalo",
        data: "25 de Abril de 2026",
        imagem: "imagens/foto3.jpeg",
        conteúdo: "Hoje decidimos fazer algo diferente no horário do almoço. Juntamos três turmas no gramado central e cada um levou um lanche para compartilhar. Teve de tudo: bolo, salgadinhos e até refrigerante quente. Momentos assim fazem as aulas cansativas valerem a pena. Rimos muito antes de voltar para a aula de física.",
        curtidas: 24,
        curtido: false,
        comentarios: ["Melhor dia do ano!", "Levem bolo de cenoura na próxima."]
    },
    {
        id: 4,
        titulo: "Dia 4: Virando a Noite para o Trabalho de Biologia",
        data: "14 de Maio de 2026",
        imagem: "imagens/foto4.jpeg",
        conteúdo: "O clássico erro do estudante: deixar para montar a maquete de células na véspera. Meu grupo veio para minha casa e passamos a noite cortando isopor, pintando e colando peças. O resultado ficou incrível, mas a base de café e energético. Apresentamos o trabalho hoje e o cansaço valeu a nota máxima!",
        curtidas: 15,
        curtido: false,
        comentarios: ["O meu ficou horrível, inveja kk", "Biologia dá muito trabalho."]
    },
    {
        id: 5,
        titulo: "Dia 5: A Grande Final do Torneio Interclasses",
        data: "18 de Junho de 2026",
        imagem: "imagens/foto5.jpeg",
        conteúdo: "Clima de Copa do Mundo na escola! Nossa sala chegou à final do campeonato de futsal contra o terceiro ano. O ginásio estava lotado, todo mundo gritando e batendo tambor. O jogo foi pegado e terminou empatado, mas ganhamos nos pênaltis. A comemoração no pátio foi inesquecível.",
        curtidas: 42,
        curtido: false,
        comentarios: ["Jogaram muito!!", "A torcida deu show."]
    },
    {
        id: 6,
        titulo: "Dia 6: Alívio Pré-Férias e Despedidas",
        data: "03 de Julho de 2026",
        imagem: "imagens/foto6.jpeg",
        conteúdo: "Último dia do semestre! A maioria dos professores já fechou as notas, então passamos o dia conversando, jogando cartas no fundo da sala e limpando os armários. É uma sensação ótima de dever cumprido. Agora são 30 dias sem ouvir o despertador tocar às 6h da manhã. Boas férias para nós!",
        curtidas: 37,
        curtido: false,
        comentarios: ["FÉRIAS FINALMENTE!", "Até agosto galera!"]
    }
];

// Função para renderizar os posts na tela
function carregarPosts() {
    const container = document.getElementById("blog-container");
    container.innerHTML = ""; // Limpa o container antes de renderizar

    posts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.classList.add("post");

        // Cria a lista de comentários em HTML
        const listaComentariosHTML = post.comentarios
            .map(comentario => `<li class="comment-item">${comentario}</li>`)
            .join("");

        postElement.innerHTML = `
            <div class="post-date">${post.data}</div>
            <h2>${post.titulo}</h2>
            <img class="post-img" src="${post.imagem}" alt="${post.titulo}">
            <p>${post.conteúdo}</p>
            
            <!-- ÁREA DE CURTIR -->
            <div class="post-actions">
                <button class="like-btn ${post.curtido ? 'liked' : ''}" onclick="alternarCurtida(${post.id})">
                    <i class="${post.curtido ? 'fa-solid' : 'fa-regular'} fa-heart"></i> 
                    <span>${post.curtidas} Curtidas</span>
                </button>
            </div>

            <!-- ÁREA DE COMENTÁRIOS -->
            <div class="comments-section">
                <h3>Comentários</h3>
                <div class="comment-form">
                    <input type="text" id="input-post-${post.id}" class="comment-input" placeholder="Escreva um comentário...">
                    <button class="comment-submit" onclick="adicionarComentario(${post.id})">Enviar</button>
                </div>
                <ul class="comments-list" id="lista-post-${post.id}">
                    ${listaComentariosHTML}
                </ul>
            </div>
        `;

        container.appendChild(postElement);
    });
}

// Função para dar/remover curtida
function alternarCurtida(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        if (post.curtido) {
            post.curtidas--;
            post.curtido = false;
        } else {
            post.curtidas++;
            post.curtido = true;
        }
        carregarPosts(); // Recarrega os posts para atualizar o visual
    }
}

// Função para enviar um novo comentário
function adicionarComentario(id) {
    const input = document.getElementById(`input-post-${id}`);
    const textoComentario = input.value.trim();

    if (textoComentario !== "") {
        const post = posts.find(p => p.id === id);
        if (post) {
            post.comentarios.push(textoComentario);
            input.value = ""; // Limpa a caixa de texto
            carregarPosts(); // Recarrega os posts para mostrar o novo comentário
        }
    }
}

// Executar a função assim que a página carregar
window.onload = carregarPosts;
