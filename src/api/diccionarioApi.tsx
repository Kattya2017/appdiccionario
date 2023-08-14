import axios from "axios";


export const baseURL = 'http://192.168.1.46:4000/api';


const diccionarioApi = axios.create({baseURL});


export default diccionarioApi;