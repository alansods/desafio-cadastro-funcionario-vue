<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

}

body {
  background-color: #eee;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #333;
}

h1 {
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 700;
}

.btn-back {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
}

#app {
  width: 700px;
  margin: 30px;
}

@media (max-width: 600px) {
  #app {
    width: 90vw;
    margin-top: 15px;
  }
}


/* TRANSITIONS */
.v-enter,
.v-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease-out;
}
</style>
