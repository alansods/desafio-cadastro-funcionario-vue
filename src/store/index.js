import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 1,
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
        email: "teste",
        uf: "teste",
        cidade: "teste",
        cep:"teste",
        endereco: "teste",
        numero: "teste",
        complemento: "teste",
        bairro: "teste",        
        cargo: "Desenvolvedor Front-End",
        salario: "teste",
      },
      {
        index: 1,
        id: 2,
        codigo: "00022",
        nome: "Bruno Souza",
        cpf: "324.545.543-43",
        rg: "043.365.273-56",
        data_de_nascimento: "14/12/1994",
        telefone: "11 9 3235-4325",
        celular: "11 9 6534-8745",
        email: "teste",
        uf: "teste",
        cidade: "teste",
        cep:"teste",
        endereco: "teste",
        numero: "teste",
        complemento: "teste",
        bairro: "teste",        
        cargo: "Desenvolvedor Front-End",
        salario: "teste",
      },
    ],
  },
  mutations: {
    addNewEmployee(state, novosdados) {
      let newEmployee = {
        id: Date.now(), //gera um número único e diferente.
        codigo: novosdados.codigo,
        cpf: novosdados.cpf,
        nome: novosdados.nome,
        rg: novosdados.cpf,
        data_de_nascimento: novosdados.data_de_nascimento,
        telefone: novosdados.telefone,
        celular: novosdados.celular,
        email: novosdados.email,
        uf: novosdados.uf,
        cidade: novosdados.cidade,
        cep:novosdados.cep,
        endereco: novosdados.endereco,
        numero: novosdados.numero,
        complemento: novosdados.complemento,
        bairro: novosdados.bairro,
        cargo: novosdados.cargo,
        salario: novosdados.salario,
      }
      state.funcionarios.push(newEmployee);
    },
    removeEmployee(state, id) {
      state.funcionarios = state.funcionarios.filter((funcionario) => {
        return funcionario.id !== id;
      });
    },
  },
  actions: {},
  modules: {},
});
