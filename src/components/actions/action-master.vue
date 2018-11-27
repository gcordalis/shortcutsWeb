<template>
  <v-container>
    <draggable v-model="actionsUsed" :options="{draggable:'.item'}">
      <v-layout
        v-for="(action, index) in actionsUsed"
        :key="action.name + '-' + index"
        class="item"
      >
        <v-flex xs12>
          <ActionItem :action="action"/>
        </v-flex>
      </v-layout>
    </draggable>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ActionItem from "@/components/actions/action-item";
import draggable from "vuedraggable";

export default {
  name: "ActionMaster",
  data() {
    return {};
  },
  components: {
    ActionItem,
    draggable
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    }),
    actionsUsed: {
      get() {
        return this.$store.state.actionsUsed;
      },
      set(value) {
        console.log(value[0].id, value[1].id);
        this.$store.commit("reOrderActions", value);
      }
    }
  }
};
</script>
