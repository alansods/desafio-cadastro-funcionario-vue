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
        nome: "Alan Silva Oliveira dos Santos",
        cpf: "034.836.826-51",
        rg: "043.365.273-56",
        data_de_nascimento: "14/12/1990",
        telefone: "85 9 3223-0234",
        celular: "85 9 8353-0268",
        email: "alansods@gmail.com",
        uf: "CE",
        cidade: "Fortaleza",
        cep:"60-154-151",
        endereco: "Avenida Barao de Studart",
        numero: "2645",
        complemento: "ap 945",
        bairro: "Aldeota",        
        cargo: "Desenvolvedor Front-End",
        salario: "R$6.000,00",
      },
      {
        index: 1,
        id: 2,
        codigo: "00022",
        nome: "Bruno Souza Sauro",
        cpf: "324.545.543-43",
        rg: "043.365.273-56",
        data_de_nascimento: "14/12/1994",
        telefone: "11 9 3235-4325",
        celular: "11 9 6534-8745",
        email: "brunofort@hotmail.com",
        uf: "SP",
        cidade: "São Paulo",
        cep:"51-789-524",
        endereco: "Avenida Beira Mar",
        numero: "4895",
        complemento: "ap 872",
        bairro: "Mucuripe",        
        cargo: "Desenvolvedor Back-End",
        salario: "R$6.500,00",
      },
      {
        id: 3,
        codigo: "00023",
        nome: "Beatriz Sarica Silva",
        cpf: "235.765.544-32",
        rg: "743.245.644-35",
        data_de_nascimento: "22/12/2000",
        telefone: "88 9 4432-4366",
        celular: "88 9 6264-2357",
        email: "beatrizsods@gmail.com",
        uf: "SP",
        cidade: "Mogi das cruzes",
        cep:"65-543-435",
        endereco: "Rua João Cordeiro",
        numero: "4366",
        complemento: "ap 325",
        bairro: "Centro",        
        cargo: "Desenvolvedor Front-End Júnior",
        salario: "R$5.000,00",
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
