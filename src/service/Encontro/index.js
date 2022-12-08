const fetchEncontro = async (idUc) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Encontro/FilterByUnidadeCurricularId/" + idUc);
    const encontro = await resp.json();
    return encontro;
};

export {
    fetchEncontro
}