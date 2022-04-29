import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    addNewEmployee(state, novosdados) { 
      let newEmployee = {
        id: Date.now(), //gera um número único e diferente.
        codigo: novosdados.codigo,
        nome: novosdados.nome,
        cpf: novosdados.cpf,
        rg: novosdados.cpf,
        data_de_nascimento: novosdados.data_de_nascimento,
        telefone: novosdados.telefone,
        celular: novosdados.celular,
        cargo: novosdados.cargo,
      }
      state.funcionarios.push(newEmployee);
    },
  },
  actions: {},
  modules: {},
});
