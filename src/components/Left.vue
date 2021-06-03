<template>
  <div class="left">
    <ul v-for="(list, id) in lists" :key="id">
      <li><input type="checkbox" />List {{ id + 1 }}</li>
      <ul class="items">
        <li v-for="(item, idx) in list" :key="idx">
          <input type="checkbox" />
          Item {{ idx + 1 }}
          <input type="number" @change="somefunc(id, idx , $event)" :value="item.number" />
          <input type="color"  @change="somefunc(id, idx , $event)" :value="item.color" />
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Left",
  computed: {
    ...mapState({
      lists: "lists",
    }),
  },
  methods: {
    ...mapActions({
      changeColor: 'changeColor',
    }),
    somefunc(id, idx, event){
      var someArrr = [id, idx, event.target.type, event.target.value]
      this.changeColor(someArrr)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color {
  width: 20px;
  height: 20px;
}

.items li {
  display: flex;
}

[type="number"] {
  width: 20px;
  margin-left:auto;
  margin-right: 10px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
