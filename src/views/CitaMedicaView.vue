<template>
    <div class="cita-medica-view">
        <Agenda class="agenda" />
        <TablaAgenda class="tabla-agenda" />
    </div>
</template>

<script>
import Agenda from "@/components/Agenda.vue";
import TablaAgenda from "@/components/TablaAgenda.vue";
export default {
  components: {
    Agenda,
    TablaAgenda,
  },
  data() {
    return {
      // Aquí puedes agregar datos específicos si es necesario
    };
  },
};
</script>
<style>
.cita-medica-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.agenda {
  width: 100%;
  max-width: 1200px;
}
.tabla-agenda {
  width: 100%;
  max-width: 1200px;
}
</style>