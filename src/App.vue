<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      funcionarios: [
        {
          id: 1,
          codigo: "00021",
          nome: "Alan Santos",
          cpf: "034.836.826-51",
          rg: "043.365.273-56",
          data_de_nascimento: "14/12/1990",
          telefone: "85 9 3223-0234",
          celular: "85 9 8353-0268",
          cargo: "Desenvolvedor Front-End",
        },
        {
          id: 2,
          codigo: "00022",
          nome: "Bruno Souza",
          cpf: "324.545.543-43",
          rg: "043.365.273-56",
          data_de_nascimento: "14/12/1994",
          telefone: "11 9 3235-4325",
          celular: "11 9 6534-8745",
          cargo: "Web Designer",
        },
      ],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #eee;
  font-family: 'Poppins', sans-serif;  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
}

#app {
  width: 760px;
}
</style>
