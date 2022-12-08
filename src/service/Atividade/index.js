const fetchAtividade = async (idSa) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Atividade/FiltrarAtividadeBySituacaoAprendizagemId/" + idSa);
    const atividade = await resp.json();
    return atividade;
};

export {
    fetchAtividade
}