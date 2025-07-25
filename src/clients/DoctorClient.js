import axios from 'axios';
const COST_BASE_URL = 'http://localhost:8082/api/agenda/v1';

const buscarDoctores = async () => {
    const response = await axios.get(`${COST_BASE_URL}/doctores`);
    return response.data;
}

const buscarDoctorPorId = async (id) => {
    const response = await axios.get(`${COST_BASE_URL}/doctores/${id}`);
    return response.data;
}

const crearDoctor = async (doctorData) => {
    const response = await axios.post(`${COST_BASE_URL}/doctores/guardar`, doctorData);
    return response.data;
}

//Funciones Fachada

export const buscarDoctoresFachada = async () => {
    return buscarDoctores();
}

export const buscarDoctorPorIdFachada = async (id) => {
    return buscarDoctorPorId(id);
}
export const crearDoctorFachada = async (doctorData) => {
    return crearDoctor(doctorData);
}
