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

function abrirPagina(nomePagina) {


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
                nomePagina
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

    const nomePagina =
        obterPaginaDaUrl();

    const paginaExiste =
        document.getElementById(
            nomePagina
        );

    if (!paginaExiste) {

        window.location.hash =
            "inicio";

        return;

    }

    abrirPagina(
        nomePagina
    );

}


window.addEventListener(
    "hashchange",
    atualizarPaginaPelaUrl
);



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

atualizarPaginaPelaUrl();

ajustarCanvas();

criarParticulas();

animarFundo();