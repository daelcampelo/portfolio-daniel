/* ==========================================
   NAVEGAÇÃO
========================================== */

const linksNavegacao =
    document.querySelectorAll(
        ".link-navegacao"
    );


const paginas =
    document.querySelectorAll(
        ".pagina"
    );


const linksMenu =
    document.querySelectorAll(
        "#menu .link-navegacao"
    );


const menu =
    document.getElementById(
        "menu"
    );


const botaoMenu =
    document.getElementById(
        "botao-menu"
    );


const cabecalho =
    document.querySelector(
        ".cabecalho"
    );


/* ==========================================
   DADOS DOS PROJETOS
========================================== */

const projetos = [

    {
        id: "entre-sonhos",

        numero: "001",

        nome: "Entre Sonhos",

        categoria: "Projeto autoral",

        origem: "Autoral",

        descricao:
            "Projeto autoral criado para reunir escrita, identidade visual e desenvolvimento front-end em uma experiência digital própria.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        imagem:"assets/imagens/projetos/entre-sonhos/capa.png",

        destaque: true,

        possuiCase: true,

        fraseCase:"Um espaço digital onde escrita, memória e identidade visual se encontram.",

        secoesCase: [

            {
                titulo: "O projeto",

                texto: [
                    `Entre Sonhos nasceu do desejo de criar um espaço próprio para a escrita. Um lugar onde poemas e textos pudessem existir não apenas como palavras em uma página, mas dentro de uma experiência visual que também ajudasse a contar suas histórias.`,

                    `O projeto une desenvolvimento front-end e expressão autoral, buscando transformar o próprio site em parte da experiência de leitura. Embora tenha começado a partir da poesia, a proposta não é limitar o Entre Sonhos a um único formato de escrita.`
                ]
            },

            {
                titulo: "A ideia",

                texto: [
                    `A intenção desde o início foi fugir da aparência tradicional de um blog. Em vez de uma interface neutra, busco construir um espaço com personalidade, capaz de transmitir memória, afeto e identidade antes mesmo de o visitante começar a ler.`,

                    `Quero que o Entre Sonhos seja também um lugar onde eu possa registrar aquilo que penso e observo: refletir sobre os próprios poemas, escrever sobre política e sociedade, reunir impressões de leituras, produzir resumos de livros e explorar temas que despertem minha curiosidade.`,

                    `Mais do que definir categorias rígidas, quero preservar a liberdade de permitir que o projeto acompanhe aquilo que minha criatividade desejar investigar.`
                ]
            },

            {
                titulo: "Identidade e experiência",

                texto: [
                    `A identidade do projeto utiliza composição em camadas, referências visuais afetivas, fotografias, texturas e elementos decorativos para construir uma estética que mistura o digital com a sensação de algo feito à mão.`,

                    `Ao mesmo tempo, um dos desafios é preservar a legibilidade e a navegação para que a personalidade visual não se torne um obstáculo para quem deseja acessar os textos.`
                ]
            },

            {
                titulo: "Desenvolvimento",

                texto: [
                    `O Entre Sonhos também funciona como um espaço de experimentação durante minha formação em desenvolvimento front-end. Nele, venho aplicando HTML, CSS e JavaScript enquanto exploro composição de interfaces, responsividade, animações e organização visual.`,

                    `Como é um projeto autoral e em evolução, novas ideias e melhorias continuam sendo incorporadas à medida que meus conhecimentos também avançam.`
                ]
            },

            {
                titulo: "Para onde quero levar o projeto",

                destaque:
                    "Mais do que um espaço para publicar o que escrevo, quero que ele se torne um lugar para registrar como penso.",

                texto: [
                    `O Entre Sonhos foi pensado como um projeto em expansão. No futuro, quero que ele reúna diferentes formas de escrita e reflexão: poesia, textos sobre política e sociedade, comentários sobre livros, observações do cotidiano, ensaios pessoais e outras experiências que ainda possam surgir.`,

                    `A ideia é construir, aos poucos, um arquivo autoral que acompanhe não apenas aquilo que escrevo, mas também as mudanças na maneira como penso, interpreto e observo o mundo.`,

                    `Essa expansão também cria novos desafios de desenvolvimento: organizar conteúdos muito diferentes sem perder a identidade do site, criar formas de navegação entre temas, pensar sistemas de categorias e busca e manter uma experiência de leitura confortável conforme o projeto crescer.`
                ]
            },

            {
                titulo: "O que estou aprendendo",

                texto: [
                    `Construir o Entre Sonhos tem me ensinado a transformar uma ideia abstrata em decisões concretas de interface. Tenho aprendido a equilibrar estética e funcionalidade, organizar melhor o código, pensar em diferentes tamanhos de tela e questionar quando um elemento visual realmente contribui para a experiência.`,

                    `Mais do que terminar uma página, o projeto tem sido uma forma de acompanhar minha própria evolução como desenvolvedor.`
                ]
            }

        ],

        linkProjeto: ""
    },


    {
        id: "fokus",

        numero: "002",

        nome: "Fokus",

        categoria: "Projeto de formação",

        origem: "Alura",

        descricao:
            "Projeto desenvolvido durante minha formação, aplicando conceitos de JavaScript e construção de interfaces.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        imagem:
            "assets/imagens/projetos/fokus/capa.png",

        destaque: false,

        possuiCase: false,

        linkProjeto: ""
    },


    {
        id: "numero-secreto",

        numero: "003",

        nome: "Número Secreto",

        categoria: "Projeto de formação",

        origem: "Alura",

        descricao:
            "Projeto desenvolvido durante minha formação para praticar fundamentos de lógica e JavaScript.",

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        imagem:
            "assets/imagens/projetos/numero-secreto/capa.png",

        destaque: false,

        possuiCase: false,

        linkProjeto: ""
    }

];


/* ==========================================
   TECNOLOGIAS DOS PROJETOS
========================================== */

function criarListaTecnologias(tecnologias) {

    return tecnologias
        .map(
            tecnologia =>
                `<span>${tecnologia}</span>`
        )
        .join("");

}


/* ==========================================
   RENDERIZAR PROJETOS
========================================== */

function renderizarProjetos() {

    const areaDestaque =
        document.getElementById(
            "projeto-destaque"
        );

    const gradeProjetos =
        document.getElementById(
            "grade-projetos"
        );


    if (
        !areaDestaque ||
        !gradeProjetos
    ) {
        return;
    }


    const projetoDestaque =
        projetos.find(
            projeto => projeto.destaque
        );


    const projetosFormacao =
        projetos.filter(
            projeto => !projeto.destaque
        );


    /* ==========================================
       PROJETO EM DESTAQUE
    ========================================== */

    if (projetoDestaque) {

        const imagemDestaque =
            projetoDestaque.imagem
                ? `
                    <div class="midia-projeto destaque-midia">

                        <img
                            src="${projetoDestaque.imagem}"
                            alt="Captura de tela do projeto ${projetoDestaque.nome}"
                        >

                    </div>
                `
                : "";


        areaDestaque.innerHTML = `

            <article class="projeto-destaque">

                ${imagemDestaque}


                <div class="conteudo-projeto-destaque">

                    <div>

                        <p class="metadado-projeto">

                            PROJETO /
                            ${projetoDestaque.numero}

                            <span>
                                ${projetoDestaque.categoria}
                            </span>

                        </p>


                        <h3>
                            ${projetoDestaque.nome}
                        </h3>


                        <p class="descricao-projeto">
                            ${projetoDestaque.descricao}
                        </p>


                        <div class="tecnologias-projeto">

                            ${criarListaTecnologias(
                                projetoDestaque.tecnologias
                            )}

                        </div>

                    </div>


                    <a
                        href="#projeto/${projetoDestaque.id}"
                        class="botao-case"
                    >

                        Explorar case

                        <span aria-hidden="true">
                            →
                        </span>

                    </a>

                </div>

            </article>

        `;

    }


    /* ==========================================
       PROJETOS DE FORMAÇÃO
    ========================================== */

    gradeProjetos.innerHTML =
        projetosFormacao
            .map(
                projeto => {

                    const imagemProjeto =
                        projeto.imagem
                            ? `
                                <div class="midia-projeto">

                                    <img
                                        src="${projeto.imagem}"
                                        alt="Captura de tela do projeto ${projeto.nome}"
                                    >

                                </div>
                            `
                            : "";


                    return `

                        <article class="cartao-projeto-formacao">

                            ${imagemProjeto}


                            <div class="conteudo-projeto-formacao">

                                <p class="metadado-projeto">

                                    PROJETO /
                                    ${projeto.numero}

                                </p>


                                <p class="origem-projeto">

                                    ${projeto.categoria}
                                    •
                                    ${projeto.origem}

                                </p>


                                <h3>
                                    ${projeto.nome}
                                </h3>


                                <div class="tecnologias-projeto">

                                    ${criarListaTecnologias(
                                        projeto.tecnologias
                                    )}

                                </div>

                            </div>

                        </article>

                    `;

                }
            )
            .join("");

}



/* ==========================================
   CABEÇALHO DURANTE O SCROLL
========================================== */

function atualizarCabecalho(pagina) {

    if (!pagina || !cabecalho) {
        return;
    }

    const paginaAtiva =
        document.querySelector(
            ".pagina.pagina-ativa"
        );

    if (pagina !== paginaAtiva) {
        return;
    }

    const paginaFoiRolada =
        pagina.scrollTop > 20;

    cabecalho.classList.toggle(
        "cabecalho-rolado",
        paginaFoiRolada
    );

}


paginas.forEach(pagina => {

    pagina.addEventListener(
        "scroll",
        () => {

            atualizarCabecalho(
                pagina
            );

        },
        {
            passive: true
        }
    );

});


/* ==========================================
   FUNÇÃO PARA ABRIR UMA PÁGINA
========================================== */

function abrirPagina(
    nomePagina,
    paginaMenu = nomePagina
) {


    /*
        Remove a classe ativa
        de todas as páginas.
    */

    paginas.forEach(
        pagina => {

            pagina.classList.remove(
                "pagina-ativa"
            );

        }
    );



    /*
        Procura a página
        que queremos abrir.
    */

    const paginaEscolhida =
        document.getElementById(
            nomePagina
        )
    ;

    if (!paginaEscolhida) {
    return;
}

    /*
        Mostra a página escolhida.
    */

    

    paginaEscolhida.classList.add(
        "pagina-ativa"
    );


    atualizarCabecalho(
        paginaEscolhida
    );





    /*
        Remove o destaque
        dos itens do menu.
    */

    linksMenu.forEach(
        link => {

            link.classList.remove(
                "link-ativo"
            );



            /*
                Destaca o botão
                correspondente.
            */

            if (
                link.dataset.pagina ===
                paginaMenu
            ) {

                link.classList.add(
                    "link-ativo"
                );

            }

        }
    );



    /*
        Fecha menu mobile.
    */

    menu.classList.remove(
        "menu-aberto"
    );


    botaoMenu.setAttribute(
        "aria-expanded",
        "false"
    );

}

  

/* ==========================================
   LER PÁGINA DA URL
========================================== */

function obterPaginaDaUrl() {

    const nomePagina =
        window.location.hash.replace(
            "#",
            ""
        );

    if (!nomePagina) {
        return "inicio";
    }

    return nomePagina;

}


/* ==========================================
   SINCRONIZAR PÁGINA COM A URL
========================================== */

function atualizarPaginaPelaUrl() {

    const rota =
        obterPaginaDaUrl();


    /* ==========================================
       CASE DE PROJETO
    ========================================== */

    if (
        rota.startsWith(
            "projeto/"
        )
    ) {

        const idProjeto =
            rota.split("/")[1];


        const projeto =
            projetos.find(
                item =>
                    item.id === idProjeto
            );


        if (
            !projeto ||
            !projeto.possuiCase
        ) {

            window.location.hash =
                "projetos";

            return;
        }


        renderizarCaseProjeto(
            projeto
        );


        abrirPagina(
            "case-projeto",
            "projetos"
        );


        return;
    }


    /* ==========================================
       PÁGINAS NORMAIS
    ========================================== */

    const paginaExiste =
        document.getElementById(
            rota
        );


    if (!paginaExiste) {

        window.location.hash =
            "inicio";

        return;
    }


    abrirPagina(
        rota
    );

}


function criarSecoesCase(secoes) {

    if (!Array.isArray(secoes)) {
        return "";
    }


    return secoes
        .map(
            (secao, indice) => {

                const numero =
                    String(indice + 1)
                        .padStart(2, "0");


                const destaque =
                    secao.destaque

                        ? `
                            <blockquote class="destaque-case">
                                ${secao.destaque}
                            </blockquote>
                        `

                        : "";


                const paragrafos =
                    secao.texto
                        .map(
                            paragrafo =>
                                `<p>${paragrafo}</p>`
                        )
                        .join("");


                return `

                    <section class="secao-case">

                        <p class="numero-case">
                            ${numero} /
                        </p>


                        <h3>
                            ${secao.titulo}
                        </h3>


                        ${destaque}


                        <div class="texto-case">

                            ${paragrafos}

                        </div>

                    </section>

                 `;

            }
        )
    .join("");

}


function renderizarCaseProjeto(projeto) {

    const areaCase =
        document.getElementById(
            "conteudo-case-projeto"
        );


    if (!areaCase) {
        return;
    }


    const botaoProjeto =
        projeto.linkProjeto

            ? `
                <a
                    href="${projeto.linkProjeto}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="botao botao-principal botao-visitar-projeto"
                >
                    Visitar projeto
                    <span aria-hidden="true">↗</span>
                </a>
            `

            : "";


    areaCase.innerHTML = `

        <article class="case-projeto">

            <header class="abertura-case">

                <p class="texto-pequeno">

                    <span>
                        CASE / ${projeto.numero}
                    </span>

                    ${projeto.categoria}

                </p>


                <h2>
                    ${projeto.nome}
                </h2>


                <p class="frase-case">
                    ${projeto.fraseCase}
                </p>


                <div class="tecnologias-projeto">
                    ${criarListaTecnologias(
                        projeto.tecnologias
                    )}
                </div>

            </header>


            <div class="secoes-case">

                ${criarSecoesCase(
                    projeto.secoesCase
                )}

            </div>


            <footer class="final-case">

                <p class="rotulo-sobre">
                    ENTRE SONHOS
                </p>

                <h3>
                    Um projeto em constante construção.
                </h3>

                ${botaoProjeto}

            </footer>

        </article>

    `;

}



window.addEventListener(
    "hashchange",
    atualizarPaginaPelaUrl
);


const botaoVoltarProjetos =
    document.getElementById(
        "voltar-projetos"
    );


if (botaoVoltarProjetos) {

    botaoVoltarProjetos.addEventListener(
        "click",
        () => {

            window.location.hash =
                "projetos";

        }
    );

}



/* ==========================================
   NAVEGAÇÃO PELOS LINKS
========================================== */

linksNavegacao.forEach(link => {

    link.addEventListener("click", () => {

        const nomePagina = link.dataset.pagina;

        if (!nomePagina) {

            history.replaceState(
                null,
                "",
                "#inicio"
            );

            return "inicio";
        }

        window.location.hash = nomePagina;

    });

});



/* ==========================================
   MENU MOBILE
========================================== */

botaoMenu.addEventListener(
    "click",
    () => {

        const menuEstaAberto =
            menu.classList.toggle(
                "menu-aberto"
            );


        botaoMenu.setAttribute(
            "aria-expanded",
            menuEstaAberto
        );

    }
);



/* ==========================================
   FUNDO BINÁRIO
========================================== */

const canvas =
    document.getElementById(
        "fundo-binario"
    );


const contexto =
    canvas.getContext(
        "2d"
    );


let largura = 0;

let altura = 0;

let particulas = [];



/* ==========================================
   AJUSTAR TAMANHO
========================================== */

function ajustarCanvas() {

    largura =
        window.innerWidth;


    altura =
        window.innerHeight;


    const proporcaoPixel =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );


    canvas.width =
        largura
        *
        proporcaoPixel;


    canvas.height =
        altura
        *
        proporcaoPixel;


    canvas.style.width =
        `${largura}px`;


    canvas.style.height =
        `${altura}px`;


    contexto.setTransform(
        proporcaoPixel,
        0,
        0,
        proporcaoPixel,
        0,
        0
    );

}



/* ==========================================
   QUANTIDADE DE NÚMEROS
========================================== */

function quantidadeParticulas() {

    if (
        largura < 600
    ) {

        return 65;

    }


    if (
        largura < 1000
    ) {

        return 125;

    }


    return 225;

}



/* ==========================================
   CRIAR UMA PARTÍCULA
========================================== */

function criarParticula(
    posicaoAleatoria = true
) {

    const ladoEsquerdo =
        Math.random() > 0.5;


    const areaLateral =
        largura * 0.29;


    let posicaoX;



    if (ladoEsquerdo) {

        posicaoX =

            Math.random()
            *
            areaLateral;

    }

    else {

        posicaoX =

            largura
            -
            Math.random()
            *
            areaLateral;

    }



    return {

        x:
            posicaoX,


        y:

            posicaoAleatoria

                ?
                Math.random()
                *
                altura

                :

                -30
                -
                Math.random()
                *
                100,


        caractere:

            Math.random() > 0.5

                ? "1"

                : "0",


        tamanho:

            8
            +
            Math.random()
            *
            5,


        velocidade:

            0.08
            +
            Math.random()
            *
            0.32,


        opacidade:

            0.08
            +
            Math.random()
            *
            0.55,


        velocidadeFade:

            0.001
            +
            Math.random()
            *
            0.003,


        direcaoFade:

            Math.random() > 0.5

                ? 1

                : -1,


        roxo:

            Math.random() > 0.4

    };

}



/* ==========================================
   CRIAR TODAS AS PARTÍCULAS
========================================== */

function criarParticulas() {

    particulas = [];


    const quantidade =
        quantidadeParticulas();


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        particulas.push(
            criarParticula()
        );

    }

}



/* ==========================================
   MOVIMENTO DA PARTÍCULA
========================================== */

function atualizarParticula(
    particula
) {

    particula.y +=
        particula.velocidade;



    particula.opacidade +=

        particula.velocidadeFade
        *
        particula.direcaoFade;



    if (
        particula.opacidade >=
        0.65
    ) {

        particula.direcaoFade =
            -1;

    }



    if (
        particula.opacidade <=
        0.05
    ) {

        particula.direcaoFade =
            1;

    }



    /*
        Quando sair da tela,
        ela reaparece em cima.
    */

    if (
        particula.y >
        altura + 30
    ) {

        Object.assign(

            particula,

            criarParticula(
                false
            )

        );

    }

}



/* ==========================================
   DESENHAR PARTÍCULA
========================================== */

function desenharParticula(
    particula
) {

    const centro =
        largura / 2;


    const distanciaCentro =
        Math.abs(
            particula.x
            -
            centro
        );


    /*
        Área onde os números
        desaparecem perto do centro.
    */

    const areaDesaparecimento =
        largura * 0.31;


    let opacidadeCentro =
        1;



    if (
        distanciaCentro <
        areaDesaparecimento
    ) {

        opacidadeCentro =

            distanciaCentro
            /
            areaDesaparecimento;

    }



    opacidadeCentro =
        Math.pow(
            opacidadeCentro,
            2.3
        );



    const opacidadeFinal =

        particula.opacidade
        *
        opacidadeCentro;



    if (
        particula.roxo
    ) {

        contexto.fillStyle =

            `rgba(
                168,
                85,
                247,
                ${opacidadeFinal}
            )`;

    }

    else {

        contexto.fillStyle =

            `rgba(
                99,
                102,
                241,
                ${opacidadeFinal}
            )`;

    }



    contexto.font =

        `${particula.tamanho}px
        "IBM Plex Mono",
        monospace`;



    contexto.textAlign =
        "center";



    contexto.fillText(

        particula.caractere,

        particula.x,

        particula.y

    );

}



/* ==========================================
   ANIMAÇÃO
========================================== */

function animarFundo() {

    contexto.clearRect(
        0,
        0,
        largura,
        altura
    );


    particulas.forEach(
        particula => {

            atualizarParticula(
                particula
            );


            desenharParticula(
                particula
            );

        }
    );


    requestAnimationFrame(
        animarFundo
    );

}



/* ==========================================
   REDIMENSIONAR TELA
========================================== */

let temporizadorRedimensionamento;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            temporizadorRedimensionamento
        );


        temporizadorRedimensionamento =
            setTimeout(
                () => {

                    ajustarCanvas();

                    criarParticulas();

                },
                150
            );

    }
);



/* ==========================================
   INICIAR
========================================== */

renderizarProjetos();

atualizarPaginaPelaUrl();

ajustarCanvas();

criarParticulas();

animarFundo();