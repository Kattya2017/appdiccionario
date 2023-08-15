import axios from "axios";


export const baseURL = 'https://backendiccionario.gongalsoft.com/api';


const diccionarioApi = axios.create({baseURL});


export default diccionarioApi;