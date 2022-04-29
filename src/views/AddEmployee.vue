<template>
  <div class="add-employee">
    <div class="header">
      <div class="btn-back" @click="handleGoBack">
        <img src="icon-back.svg" alt="voltar" />
        <h1>Voltar</h1>
      </div>
    </div>

    <div class="card-container">
      <div class="header-title">
        <img src="icon-add-users.svg" alt="voltar" />
        <h2>Adicionar Funcionário</h2>
      </div>
      <hr />
      <form>
        <div>
          <label for="codigo">Código:</label>
          <input
            v-model="novosDados.codigo"
            type="text"
            id="codigo"
            name="codigo"
            placeholder="00000"
          />
        </div>
        <div>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" />
        </div>
        <div>
          <label for="nome">Nome:</label>
          <input
            v-model="novosDados.nome"
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome completo"
          />
        </div>
        <div>
          <label for="rg">RG:</label>
          <input type="text" id="rg" name="rg" placeholder="00.000.000-0" />
        </div>
        <div>
          <label for="date">Data de Nascimento:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div>
          <label for="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(00)00000-0000"
            required
          />
        </div>
        <div>
          <label for="celular">Celular:</label>
          <input
            type="text"
            id="celular"
            name="celular"
            placeholder="(00)00000-0000"
          />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="seuemail@email.com"
          />
        </div>
        <div>
          <label for="uf">UF:</label>
          <select name="uf" v-model="selectedUf">
            <option
              id="ufEstado"
              v-for="estado in novosDados.estados"
              :key="estado.id"
            >
              {{ estado.sigla }}
            </option>
          </select>
        </div>
        <div>
          <label for="cidade">Cidade:</label>
          <select v-if="inativo">
            <option value=""></option>
          </select>
          <select v-else name="uf">
            <option v-for="cidade in novosDados.cidades" :key="cidade.id">
              {{ cidade.nome }}
            </option>
          </select>
        </div>
        <div>
          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" placeholder="00.000-000" />
        </div>
        <div>
          <label for="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Digite seu endereço"
          />
        </div>
        <div>
          <label for="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Digite o número"
          />
        </div>
        <div>
          <label for="complemento">Complemento:</label>
          <input
            type="text"
            id="complemento"
            name="complemento"
            placeholder="Digite o complemento"
          />
        </div>
        <div>
          <label for="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Digite seu bairro"
          />
        </div>
        <div>
          <label for="cargo">Cargo:</label>
          <input
            v-model="novosDados.cargo"
            type="text"
            id="cargo"
            name="cargo"
            placeholder="Digite seu cargo"
          />
        </div>
        <div>
          <label for="salario">Salário:</label>
          <input
            type="text"
            id="salario"
            name="salario"
            placeholder="R$0.000,00"
          />
        </div>
      </form>
    </div>

    <button class="btn-green" @click="handleAddEmployee">Confirmar</button>
    <button class="btn-red" @click="handleGoBack">Cancelar</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedUf: "",
      inativo: true,
      novosDados: {
        id: null,
        codigo: "",
        nome: "",
        cpf: "",
        rg: "",
        data_de_nascimento: "",
        telefone: "",
        celular: "",
        cargo: "",
        estados: [],
        cidades: [],
      },
    };
  },
  methods: {
    handleGoBack() {
      this.$router.push("/");
    },
    handleAddEmployee() {
      this.$store.commit("addNewEmployee", this.novosDados);
      this.$router.push("/");
    },
  },
  mounted() {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((response) => {
        this.novosDados.estados = response.data;
      });
  },
  watch: {
    selectedUf() {
      this.inativo = true;
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.selectedUf}/municipios`
        )
        .then((response) => {
          this.novosDados.cidades = response.data;
          this.inativo = false;
        });
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 20px;
}

hr {
  margin: 16px 0 40px 0;
  border-top: solid 1px #ccc;
}

label {
  font-size: 0.875rem;
  font-weight: 600;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 70px;
}

@media (max-width: 600px) {
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

form div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  height: 36px;
  background-color: #ddd;
  padding: 0 15px;
  border: none;
  outline: none;
  border-radius: 4px;
  max-width: 235px;
}

select {
  color: #333;
  font-size: 0.85rem;
  height: 36px;
  background-color: #ddd;
  padding: 0 15px;
  border: none;
  outline: none;
  border-radius: 4px;
  max-width: 235px;
}

input[type="date"] {
  color: #333;
  font-size: 0.85rem;
  max-width: 235px;
}

@media (max-width: 600px) {
  input,
  select,
  input[type="date"] {
    width: 100%;
    max-width: 100%;
  }
}

input::placeholder {
  color: #bbb;
  font-size: 0.85rem;
}

.btn-back {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-title h2 {
  font-size: 1.25rem;
}

.card-container {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 40px 50px;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .card-container {
    padding: 35px 30px;
  }
}

.btn-green {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
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

.btn-red {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  background: #e10439;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
  margin-top: 8px;
}

@media (min-width: 600px) {
  .btn-green:hover {
    background-color: #03ecb4;
  }
  .btn-red:hover {
    background-color: #f03c67;
  }
}
</style>
