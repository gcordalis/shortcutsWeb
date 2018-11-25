import Vue from "vue";
import Vuex from "vuex";
import { actions } from "@/assets/actions";
import { shortcutColors } from "@/assets/shortcutColors";

Vue.use(Vuex);

const store = new Vuex.Store({
  getters: {
    // getActionByID: (state, getters, id) => {
    //   return state.actionsUsed.find((action) => {
    //     console.log('Checking if action ', id, action, getters)
    //     return action.id === id
    //   })
    // }
  },
  state: {
    actions,
    actionsUsed: [],
    shortcutColors
  },
  mutations: {
    addAction(state, action) {
      state.actionsUsed.push(
        Object.assign(
          {
            id: new Date().getTime() + action.name,
            isVisible: true
          },
          action
        )
      );
    },
    removeAction(state, id) {
      Vue.set(
        state,
        "actionsUsed",
        state.actionsUsed.filter(action => action.id !== id)
      );
    },
    updateAction(state, data) {
      const action = state.actionsUsed.find(action => action.id === data.id);
      Object.keys(data).forEach(key => Vue.set(action, key, data[key]));
    }
  }
});

export default store;
