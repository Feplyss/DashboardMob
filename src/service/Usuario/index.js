const fetchUsuario = async (idUsuario) => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Usuario/" + idUsuario);
    const usuario = await resp.json();
    return usuario;
};

export {
    fetchUsuario
}