<template>
  <div id="app">
    <div class="home">
      <div class="header">
        <div class="header-title">
          <img src="icon-users.svg" alt="pesquisar" />
          <h1>Lista de Funcionários</h1>
        </div>
        <button>
          <img src="icons-plus.svg" alt="pesquisar" />
          Adicionar
        </button>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="Buscar funcionários..." />
        <img src="icon-search.svg" alt="pesquisar" />
      </div>
      <Card
        :funcionario="funcionario"
        v-for="funcionario in $store.state.funcionarios"
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
}

.search-bar input:focus .search-bar {
  outline: #04e1ac solid 3px;
  border-radius: 4px;
  background: #fff;
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

h1 {
  font-size: 1.5rem;
  line-height: 1.8rem;
}
</style>
>
