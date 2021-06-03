<template>
  <div class="right">
      <div class="list-item" v-for="(list, idx) in lists" :key="idx" >
          <div class="top">
              <span>List {{idx + 1}}</span>
              <button>Отсортировать(перемешать)</button>
          </div>

          <div >
              <div class="colours" v-for="(item, id) in list" :key="id">
                  <div class="colours-item" v-for="(color, idc) of item.number" :key="idc" :style="{backgroundColor: item.color}"></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Right",
  computed: {
    ...mapState({
      lists: "lists",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item{
    margin-bottom: 50px;
    border: 2px solid #000;
    padding: 10px;
}
.list-item .top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.colours{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
.colours-item{
    width: 10px;
    height: 10px;
    margin: 1px;
}
</style>
