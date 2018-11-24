<template>
  <v-list>
    <v-list-tile>
      <v-text-field
        label="Search"
        v-model="search"

      ></v-text-field>
    </v-list-tile>
    <v-list-tile
      value="true"
      v-for="(action, index) in filteredActions"
      :key="action.name + '-' + index"
    >
      <v-list-tile-action>
        <v-icon v-html="action.icon" class="actionIcon" :style="action.iconColor"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <button @click="addAction(action); search = ''">
          <v-list-tile-title v-text="action.title"></v-list-tile-title>
        </button>  
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    }),
    filteredActions: function() {
      var self = this;
      return this.actions.filter(function(action) {
        return (
          action.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
        );
      });
    }
  },
  name: "navigation-bar",
  methods: {
    ...mapMutations(["addAction"])
  }
};
</script>
