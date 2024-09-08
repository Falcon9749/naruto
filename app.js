function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa)

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi Digitado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
            <div>
                <h3>${dado.titulo}</h3>
                <img src=${dado.imagem} alt="Raposa" class="responsive-image"> 
                <p>${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações...</a>
            </div>
    `;
        }

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}