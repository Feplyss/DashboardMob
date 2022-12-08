const fetchObjetoAprendizagem = async (idSa) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/ObjetoAprendizagem/FiltrarObjetoAprendizagemBySituacaoAprendizagemId/" + idSa);
    const objetoAprendizagem = await resp.json();
    return objetoAprendizagem;
};

export {
    fetchObjetoAprendizagem
}