import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      [
        {
          color: "#000000",
          number: 10,
        },
        {
          color: "#1e31e3",
          number: 30,
        },
        {
          color: "#eeeeee",
          number: 40,
        },
        {
          color: "#e2e2e2",
          number: 20,
        },
      ],
      [
        {
          color: "#000000",
          number: 7,
        },
        {
          color: "#1e31e3",
          number: 12,
        },
        {
          color: "#eeeeee",
          number: 19,
        },
        {
          color: "#e2e2e2",
          number: 0,
        },
      ],
      [
        {
          color: "#000000",
          number: 12,
        },
        {
          color: "#1e31e3",
          number: 7,
        },
        {
          color: "#eeeeee",
          number: 3,
        },
        {
          color: "#e2e2e2",
          number: 0,
        },
      ],
      [
        {
          color: "#000000",
          number: 2,
        },
        {
          color: "#1e31e3",
          number: 9,
        },
        {
          color: "#eeeeee",
          number: 0,
        },
        {
          color: "#e2e2e2",
          number: 10,
        },
      ],
      [
        {
          color: "#000000",
          number: 3,
        },
        {
          color: "#1e31e3",
          number: 10,
        },
        {
          color: "#eeeeee",
          number: 1,
        },
        {
          color: "#e2e2e2",
          number: 10,
        },
      ],
    ],
  },
  mutations: {
    updateColors(state, arr) {
      var listProp = arr[2];
      var newList = [...state.lists]
      if(listProp == 'number'){
        newList[arr[0]][arr[1]][listProp] = parseInt(arr[3]);
      } else{
        newList[arr[0]][arr[1]][listProp] = arr[3];
      }
      
      state.lists = newList;
    },
  },
  actions: {
    changeColor({ commit }, arr) {
      commit("updateColors", arr);
    },
  },
  getters: {
    allColors(state) {
      return state.lists;
    },
  },
  modules: {},
});
