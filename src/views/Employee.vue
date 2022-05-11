<template>
  <div class="add-employee">
    <div class="header">
      <button class="btn-back" @click="handleGoBack">
        <img src="icon-back.svg" alt="voltar" />
        Voltar
      </button>
      <div class="btn-container">
        <button
          v-if="!isEditable"
          class="btn-edit"
          @click="isEditable = !isEditable"
        >
          <img src="icon-edit.svg" alt="editar" />
          Editar
        </button>
        <button
          v-if="isEditable"
          class="btn-edit"
          @click="isEditable = !isEditable"
        >
          Confirmar
        </button>
        <button
          v-if="!isEditable"
          class="btn-delete"
          @click="handleRemoveEmployee"
        >
          <img src="icon-trash.svg" alt="deletar" />
          Deletar
        </button>
        <button
          v-if="isEditable"
          class="btn-delete"
          @click="isEditable = !isEditable"
        >
          Cancelar
        </button>
      </div>
    </div>

    <div class="card-container">
      <div class="header-title">
        <img src="icon-user.svg" alt="voltar" />
        <h2>{{ $store.state.funcionarios[$route.params.index].nome }}</h2>
      </div>
      <hr />
      <form>
        <div>
          <label for="codigo">Código:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].codigo }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].codigo"
            type="text"
          />
        </div>
        <div>
          <label for="cpf">CPF:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].cpf }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].cpf"
            type="text"
          />
        </div>
        <div>
          <label for="nome">Nome:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].nome }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].nome"
            type="text"
          />
        </div>
        <div>
          <label for="rg">RG:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].rg }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].rg"
            type="text"
          />
        </div>
        <div>
          <label for="date">Data de Nascimento:</label>
          <p v-if="!isEditable">
            {{
              $store.state.funcionarios[$route.params.index].data_de_nascimento
            }}
          </p>
          <input
            v-if="isEditable"
            v-model="
              $store.state.funcionarios[$route.params.index].data_de_nascimento
            "
            type="date"
          />
        </div>
        <div>
          <label for="telefone">Telefone:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].telefone }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].telefone"
            type="text"
          />
        </div>
        <div>
          <label for="celular">Celular:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].celular }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].celular"
            type="text"
          />
        </div>
        <div>
          <label for="email">E-mail:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].email }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].email"
            type="text"
          />
        </div>
        <div>
          <label for="uf">UF:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].uf }}
          </p>
          <select
            v-if="isEditable"
            name="uf"
            v-model="$store.state.funcionarios[$route.params.index].uf"
          >
            <option id="ufEstado" v-for="estado in estados" :key="estado.id">
              {{ estado.sigla }}
            </option>
          </select>
        </div>
        <div>
          <label for="cidade">Cidade:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].cidade }}
          </p>
          <div v-if="isEditable">
            <select v-if="inativo">
              <option value=""></option>
            </select>
            <select
              v-if="!inativo"
              name="uf"
              v-model="$store.state.funcionarios[$route.params.index].cidade"
            >
              <option v-for="cidade in cidades" :key="cidade.id">
                {{ cidade.nome }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="cep">CEP:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].cep }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].cep"
            type="text"
          />
        </div>
        <div>
          <label for="endereco">Endereço:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].endereco }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].endereco"
            type="text"
          />
        </div>
        <div>
          <label for="numero">Número:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].numero }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].numero"
            type="text"
          />
        </div>
        <div>
          <label for="complemento">Complemento:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].complemento }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].complemento"
            type="text"
          />
        </div>
        <div>
          <label for="bairro">Bairro:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].bairro }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].bairro"
            type="text"
          />
        </div>
        <div>
          <label for="cargo">Cargo:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].cargo }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].cargo"
            type="text"
          />
        </div>
        <div>
          <label for="salario">Salário:</label>
          <p v-if="!isEditable">
            {{ $store.state.funcionarios[$route.params.index].salario }}
          </p>
          <input
            v-if="isEditable"
            v-model="$store.state.funcionarios[$route.params.index].salario"
            type="text"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isEditable: false,
      selectedUf: "",
      inativo: true,
      estados: [],
      cidades: [],
    };
  },
  methods: {
    handleGoBack() {
      this.$router.push("/");
    },
    handleRemoveEmployee() {
      this.$store.commit(
        "removeEmployee",
        this.$store.state.funcionarios[this.$route.params.index].id
      );
      this.$router.push("/");
    },
    handleEditEmployee() {
      this.isEditable = true;
    },
  },
  mounted() {
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
      )
      .then((response) => {
        this.estados = response.data;
      });
  },
  computed: {
    selectedUF: function () {
      return this.$store.state.funcionarios[this.$route.params.index].uf;
    },
  },
  watch: {
    selectedUF() {
      this.inativo = true;
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.selectedUF}/municipios`
        )
        .then((response) => {
          this.cidades = response.data;
          this.inativo = false;
        });
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  background: #eee;
  padding: 40px 0 20px 0;
}

@media (max-width: 600px) {
  .header {
    width: 90%;
    padding: 30px 0 20px 0;
  }
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

.btn-container {
  display: flex;
  gap: 12px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 600px) {
  .header-title img {
    display: none;
  }
}

.header-title h2 {
  font-size: 1.25rem;
}

.card-container {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0;
  padding: 40px 50px;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .card-container {
    padding: 35px 30px;
  }
}

.btn-edit {
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

.btn-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 150px;
  height: 40px;
  background: #e10439;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-out;
}

@media (min-width: 600px) {
  .btn-edit:hover {
    background-color: #03ecb4;
  }
  .btn-delete:hover {
    background-color: #f03c67;
  }
}

@media (max-width: 600px) {
  .btn-edit {
    background-color: #03ecb4;
    width: 100px;
  }
  .btn-delete {
    background-color: #f03c67;
    width: 100px;
  }

  .btn-edit img,
  .btn-delete img {
    display: none;
  }
}

div p {
  font-weight: 200;
}

label {
  font-size: 1.02rem;
}
</style>
