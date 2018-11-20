<template>
  <v-list>
    <v-list-tile
      value="true"
      v-for="(action, index) in actions"
      :key="action.name + '-' + index"
    >
      <v-list-tile-action>
        <v-icon v-html="action.icon" class="actionIcon" :style="action.iconColor"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <button @click="addActionLocal(action)">
          <v-list-tile-title v-text="action.name"></v-list-tile-title>
        </button>  
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  name: 'navigation-bar',
  methods: {
    ...mapMutations(['addAction']),
    addActionLocal (action) {
      this.addAction(action)
    }
  }
}
</script>
