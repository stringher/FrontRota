import * as http from '../helpers/http';

export const getLivros = async () => {
    try {
        const res = await http.get('/livros')
        return res && res.success ? res.data : undefined;
    } catch { return undefined }
}

export const getTemas = async () => {
    try {
        const res = await http.get('/temas')
        return res && res.success ? res.data : undefined;
    } catch { return undefined }
}

export const getLivrosTestamento = async (cod_testamento) => {
    try {
        const res = await http.get(`/livros/testamento/${cod_testamento}`)
        return res && res.success ? res.data : undefined;
    } catch(e) {console.log(e); return undefined}
}

export const getCapitulosByLivros = async (id_livro) => {
    try {
        const res = await http.post(`/livros/capitulos`, { id_livro })
        return res && res.success ? res.data : undefined;
    } catch(e) {console.log(e); return undefined}
}