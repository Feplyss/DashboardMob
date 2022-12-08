const fetchUnidadesCurriculares = async (idUsuario) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/unidadeCurricular/filterByUsuarioIdSemestreAtual/" + idUsuario);
    const unidadesCurriculares = await resp.json();
    return unidadesCurriculares;
};

export {
    fetchUnidadesCurriculares
}