import axios from "axios";
import mime from 'mime-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import https from "https";

const defaultHeader = {
    "Content-type": "application/json",
    "Basic": "Legisnote:Leg!$note@2021"
}

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`@${key}`, jsonValue)
    } catch (e) { }
}

const readData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`@${key}`)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) { return null }
}

const instance = axios.create({
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    baseURL: 'https://a2jkzcmh3p.us-east-2.awsapprunner.com',
    timeout: 10000,
    headers: defaultHeader
});;

instance.interceptors.request.use(async request => {
    const token = await readData('token');
    if (token) request.headers.Authorization = 'Bearer ' + token;
    return request;
});

instance.interceptors.response.use(response => {
    return response;
}, err => {
    return new Promise(async (resolve, reject) => {
        const refreshToken = await readData('refresh-token');
        if (refreshToken && err && err.response && err.response.status && err.response.status === 401 && err.config && !err.config.retry) {
            const oReq = err.config;
            oReq.retry = true;
            instance.put('/refresh', { token: refreshToken })
                .then(async res => {
                    if (res.data.auth.token) {
                        await storeData('token', res.data.auth.token)
                        instance(oReq).then(res => resolve(res));
                    }
                }).catch(() => reject(err));
        } else {
            reject(err);
        }
    })
})

export async function get(url, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.get(url, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function post(url, data = undefined, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.post(url, data, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function put(url, data = undefined, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.put(url, data, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function del(url, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.delete(url, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function options(url, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.options(url, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function patch(url, data = undefined, config = {}) {
    config = { headers: defaultHeader, ...config }
    return instance.patch(url, data, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

export async function download(url, config = {}) {
    let mimetype = mime.lookup(url.substring(url.length - 6));
    if (!mimetype) mimetype = 'application/octet-stream';
    config = { headers: { ...defaultHeader, 'Content-Type': mimetype }, ...config, responseType: 'blob' };
    return instance.get(url, config)
}

export async function upload(url, data, config = {}) {
    config = { headers: { ...defaultHeader, 'Content-Type': 'multipart/form-data' }, ...config, }
    return instance.post(url, data, config)
        .then(res => { return { success: true, status: res.status, message: res.statusText, data: res.data } })
        .catch(error => { return { success: false, status: error.response && error.response.status ? error.response.status : 500, message: error.message ? error.message : 'Api Arror', data: error.response && error.response.data ? error.response.data : {} } });
}

