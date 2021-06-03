<template>
  <div id="app">
    <Left />
    <Right />
  </div>
</template>

<script>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";

export default {
  name: "App",
  components: {
    Left,
    Right,
  },
};
</script>

<style>
html,
body{
  margin: 0;
  box-sizing: border-box;
}
ul{
  list-style-type: none;
}
#app{
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

#app > div{
  border: 3px solid #000;
  box-sizing: border-box;
  width: 45vw;
  height: 90vh;
  padding: 30px;
}

input{
  border: none;
  background: transparent;
  outline: none;
}
</style>
