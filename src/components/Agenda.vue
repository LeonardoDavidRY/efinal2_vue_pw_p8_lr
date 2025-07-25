<template>
    <div class="agenda">
        <h2>Agenda</h2>
        <label for="doctor-cedula">Cedula Doctor:</label>
        <input type="text" id="doctor-cedula" v-model="doctorSeleccionado" />
        <label for="paciente-cedula">Cedula Paciente:</label>
        <input type="text" id="paciente-cedula" v-model="pacienteSeleccionado" />
        <label for="fecha-cita">Fecha Cita:</label>
        <input type="date" id="fecha-cita" v-model="fechaCita" />
        <button @click="agendarCita">Agendar Cita</button>
    </div>
</template>

<script>
import { buscarDoctorPorIdFachada, buscarTodosLosDoctoresFachada, guardarDoctorFachada } from '@/clients/DoctorClient'; 
export default {
  data() {
    return {
      doctor: null,
      doctores: [],
    };
  },
  methods: {
    async fetchDoctor(id) {
      this.doctor = await buscarDoctorPorIdFachada(id);
    },
    async fetchDoctores() {
      this.doctores = await buscarTodosLosDoctoresFachada();
    },
    async guardarDoctor(doctor) {
      await guardarDoctorFachada(doctor);
    },
    agendarCita() {
      
      console.log(`Agendando cita para el paciente ${this.pacienteSeleccionado} con el doctor ${this.doctorSeleccionado} en la fecha ${this.fechaCita}`);
    }
  }
}
</script>

<style>

.agenda {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.agenda h2 {
  margin-bottom: 20px;
}
.agenda label {
  margin-right: 10px;
}
.agenda input {
  margin-bottom: 10px;
  padding: 5px;
}
.agenda button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
.agenda button:hover {
  background-color: #45a049;
}
.agenda input[type="text"],
.agenda input[type="date"] {
  width: 200px;
  margin-bottom: 10px;
}
</style>    
