import axios from 'axios';

const API_URL = 'https://backendprueba-2n76.onrender.com/api/items/';

export const getItems = () => axios.get(API_URL);

export const addItem = (data) => axios.post(API_URL, data);

export const updateItem = (id, data) => axios.put(`${API_URL}${id}/`, data);

export const deleteItem = (id) => axios.delete(`${API_URL}${id}/`);
