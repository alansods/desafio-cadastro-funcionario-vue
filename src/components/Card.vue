<template>
  <div class="card-container" @click="handleClick">
    <div class="div">
      <div class="card-title">{{ funcionario.nome }}</div>
      <div class="card-job">{{ funcionario.cargo }}</div>
    </div>
    <div>
      <img src="icon-access.svg" alt="acessar">
    </div>
  </div>
</template>

<script>
export default {
  props: ["funcionario", "index"],
  methods: {
    handleClick() {
      this.$router.push(`/funcionario/${this.funcionario.id - 1}`);
    },
  }
};
</script>

<style scoped>
.card-container {
  background-color: #fff;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 20px 30px;
  border-radius: 4px;
  cursor: pointer;
}

.card-container:hover {
  background: #04E1AC;
  transition: all .15s ease-out;
}

.card-container:hover .card-title,
.card-container:hover .card-job {
  color: white;
}

.card-container:hover img {
  filter: sepia(100%) saturate(100%) brightness(500%) hue-rotate(0deg);
}

.card-title {
  font-size: 1rem;
  font-weight: 500;
}

.card-job {
  font-size: 0.8rem;
  font-weight: 300;
  color: #04E1AC;
}


</style>
