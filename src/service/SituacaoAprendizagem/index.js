const fetchSituacaoAprendizagem = async (idEncontro) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/SituacaoAprendizagem/FiltrarSituacoesAprendizagemPorEncontroId/" + idEncontro);
    const sa = await resp.json();
    return sa;
};

export {
    fetchSituacaoAprendizagem
}