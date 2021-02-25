import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokedollar-api.herokuapp.com',
})

export default api;
