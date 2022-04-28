<template>
  <div id="app">
    <div class="home">
      <Card
        :funcionario="funcionario"
        v-for="funcionario in funcionarios"
        :key="funcionario.id"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  props: ["funcionarios"],
  components: { Card },
};
</script>

<style></style>
