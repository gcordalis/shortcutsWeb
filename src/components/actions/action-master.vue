<template>
  <v-container>
    <v-layout v-for="(action, index) in actionsUsed" :key="action.name + '-' + index">
      <v-flex xs12>
          <ActionItem :action="action" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ActionItem from '@/components/actions/action-item'

export default {
  data () {
    return {

    }
  },
  components: {
    ActionItem
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  name: 'action-master'
}
</script>
