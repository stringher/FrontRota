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