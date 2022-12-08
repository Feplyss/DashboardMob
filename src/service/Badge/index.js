const fetchBadge = async () => {
    const resp = await fetch("http://academico3.rj.senac.br:8080/api/Badge");
    const badge = await resp.json();
    return badge;
};

export {
    fetchBadge
}