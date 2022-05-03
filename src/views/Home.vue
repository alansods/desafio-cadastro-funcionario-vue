<template>
  <div class="home">
    <div class="header">
      <div class="header-title">
        <img src="icon-users.svg" alt="pesquisar" />
        <h1>Lista de Funcionários</h1>
      </div>
      <button @click="handleAddEmployee">
        <img src="icons-plus.svg" alt="pesquisar" />
        Adicionar
      </button>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Buscar funcionários..." />
      <img src="icon-search.svg" alt="pesquisar" />
    </div>
    <div v-if="$store.state.funcionarios.length === 0" class="no-employees">
      <img src="no-employee.svg" alt="sem-funcionarios" />
      <p>Nenhum funcionário cadastrado</p>
    </div>
    <Card
      v-else
      v-for="(funcionario, index) in $store.state.funcionarios"
      :key="funcionario.id"
      :funcionario="funcionario"
      :index="index"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  props: ["funcionarios"],
  components: { Card },
  methods: {
    handleAddEmployee() {
      this.$router.push({ path: "/adicionar-funcionario" });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 500px) {
  .header-title img {
    display: none;
  }
}

.search-bar {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: #ddd;
  display: flex;
  align-items: center;
  padding: 0 30px;
}

.search-bar input {
  width: 100%;
  background: transparent;
  border: none;
  height: 50px;
  outline: none;
}

.search-bar input::placeholder {
  color: #bbb;
  font-size: 1rem;
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 150px;
  height: 40px;
  background: #04e1ac;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
}

@media (min-width: 600px) {
  button:hover {
    background-color: #03ecb4;
  }
}

.no-employees {
  text-align: center;
  font-size: 1rem;
  color: #ccc;
  margin-top: 30px;
}

.no-employees p {
  margin-top: 30px;
}
</style>
