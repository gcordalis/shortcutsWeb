<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 v-for="action in actions" :key="action.message">
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ action.message }}</h3>
                <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
          <button @click="addAction()">Add new action</button>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { Multipane, MultipaneResizer } from 'vue-multipane'
// import { Editor } from 'tiptap'

export default {
  components: {
    Multipane,
    MultipaneResizer
  },
  data () {
    return {
      title: 'editor-test',
      action: '',
      actions: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  name: 'editor-test',
  methods: {
    addAction () {
      this.actions.push({message: 'new message'})
    }
  }
}
</script>



<style>
.vertical-panes {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
}
.vertical-panes > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #E1E2E5;
}
.vertical-panes > .pane ~ .pane {
  border-left: 1px solid #ccc;
}
</style>