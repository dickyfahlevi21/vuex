import Vue from "vue";
import Vuex from "vuex";
import Api from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    postLoading: false,
  },
  mutations: {
    setUsersList(state, payload) {
      console.log({ setUsersList: payload });
      state.users = payload.data;
    },
    setBoolean(state, payload) {
      console.log({ payload });
      state[payload.key] = payload.value;
    },
  },
  actions: {
    async getUser({ commit }) {
      const { data } = await Api.get("/users");
      console.log({ data });
      commit("setUsersList", { data });
    },
    async registerAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup", JSON.stringify({ data: payload }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      commit("setBoolean", { key: "postLoading", value: false });
    },
  },
  modules: {},
});
