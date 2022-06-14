//Declarando os parametros para requisição da api marvel

import axios from "axios";
import md5 from "md5";

const privateKEY = '8ec7af2f60777ada3a80d2b65687e1984aa919c3'
const publicKEY = '3edf2abbda9a7d9af0c2dda2daa1a0a0'

const time = Number(new Date());

const hash = md5(time + privateKEY + publicKEY );

const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKEY,
        hash: hash,
    },
});

export default api;