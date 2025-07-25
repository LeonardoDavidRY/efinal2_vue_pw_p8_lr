import axios from 'axios';
const COST_BASE_URL = 'http://localhost:8082/api/agenda/v1';

const buscarPacientes = async () => {
    const response = await axios.get(`${COST_BASE_URL}/pacientes`);
    return response.data;
}

const buscarPacientePorId = async (id) => {
    const response = await axios.get(`${COST_BASE_URL}/pacientes/${id}`);
    return response.data;
}

const crearPaciente = async (pacienteData) => {
    const response = await axios.post(`${COST_BASE_URL}/pacientes/guardar`, pacienteData);
    return response.data;
}

//Funciones Fachada
export const buscarPacientesFachada = async () => {
    return buscarPacientes();
}
export const buscarPacientePorIdFachada = async (id) => {
    return buscarPacientePorId(id);
}   
export const crearPacienteFachada = async (pacienteData) => {
    return crearPaciente(pacienteData);
}
