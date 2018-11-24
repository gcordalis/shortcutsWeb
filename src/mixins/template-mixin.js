import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String
    }
  },
  computed: {
    action: {
      get() {
        return this.actionsUsed.find(action => action.id === this.id);
      },
      set(value) {
        this.updateAction(value);
      }
    },
    ...mapState({
      actionsUsed: state => state.actionsUsed
    })
  },
  methods: {
    ...mapMutations(["updateAction"])
  }
};
