<template>
  <div class="tabla-agenda">
    <h2>Tabla de Agenda</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre Paciente</th>
          <th>Apellido Paciente</th>
          <th>CedulaPaciente</th>
          <th>Fecha Cita</th>
          <th>Nombre Doctor</th>
          <th>Paciente prueba</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="paciente in pacientes" :key="paciente.id">
          <td>{{ paciente.id }}</td>
          <td>{{ paciente.nombre }}</td>
          <td>{{ paciente.apellido }}</td>
          <td>{{ paciente.cedula }}</td>
          <td>{{ paciente.fechaCita }}</td>
          <td>{{ paciente.nombreDoctor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  buscarPacientePorIdFachada,
  buscarTodosLosPacientesFachada,
  guardarPacienteFachada,
} from "@/clients/PacienteClient";
export default {
  data() {
    return {
      paciente: null,
      pacientes: [],
      nombreDoctor: "",
      fechaCita: "", 
      cedula: "", 
      apellido: "", 
      id: "", 
      nombre: "", 
    };
  },
  methods: {
    async fetchPaciente(id) {
      this.paciente = await buscarPacientePorIdFachada(id);
    },
    async fetchPacientes() {
      this.pacientes = await buscarTodosLosPacientesFachada();

    },
    async guardarPaciente(paciente) {
      await guardarPacienteFachada(paciente);
    },
  },

};
</script>

<style>
.tabla-agenda {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.tabla-agenda h2 {
  margin-bottom: 20px;
}
.tabla-agenda table {
  width: 100%;
  border-collapse: collapse;
}
.tabla-agenda th, .tabla-agenda td {
  border: 1px solid #ddd;
  padding: 8px;
}
.tabla-agenda th {
  background-color: #f2f2f2;
  text-align: left;
}
.tabla-agenda tr:nth-child(even) {
  background-color: #f9f9f9;
}
.tabla-agenda tr:hover {
  background-color: #ddd;
}
.tabla-agenda td {
  text-align: center;
}
.tabla-agenda th {
  text-align: center;
}
.tabla-agenda input {
  margin-bottom: 10px;
  padding: 5px;
}
.tabla-agenda button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

</style>