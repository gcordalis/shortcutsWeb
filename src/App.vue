<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <NavActionList /> 
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
<!--       <v-btn>
        Edit
      </v-btn> -->
      <v-alert
        v-model="alert"
        dismissible
        type="success"
        transition="slide-x-reverse-transition"
        style="margin: 10px"
      >
        <v-icon>smartphone</v-icon>
        <a :href="shortcutUrl" target="_blank" download><v-icon>save</v-icon></a>
      </v-alert>
        <div
          v-for="i in shortcutColors"
          :key="i.workflowColor"
          class="colorPicker"
          v-if="dialog"
        >
          <v-icon class="colorPicker" :style="'background-color: ' + i.rgb + '; color: #FFF'" @click="shortcutRgb = 'background-color: ' + i.rgb, shortcutColor = i.workflowColor, dialog = false">edit</v-icon>
            
        </div>
        <v-icon class="actionIcon" :style="shortcutRgb + '; color: #FFF'" @click="dialog = !dialog">edit</v-icon>
      <v-toolbar-title>
          <v-text-field
          label="Shortcut Name"
          v-model="shortcutName"
        ></v-text-field>
      </v-toolbar-title>
      <v-btn @click.native="processShortcut()">
        Save
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <v-layout column>
            <ActionMaster/>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ActionMaster from '@/components/actions/action-master'
import NavActionList from '@/components/nav-action-list'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      title: 'editcuts',
      socket: require('socket.io-client')('http://localhost:8086'),
      shortcutName: '',
      alert: false,
      shortcutUrl: '',
      shortcutColor: '4282601983',
      shortcutRgb: 'background-color: rgb(252, 17, 57)',
      dialog: false
    }
  },
  components: {
    ActionMaster,
    NavActionList
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed,
      shortcutColors: state => state.shortcutColors
    })
  },
  name: 'App',
  created: function () {
    var that = this
    this.socket.on('connect', function (socket) {
      that.socket.emit('hello')
      console.log('Said hello to server')

      that.socket.on('shortcut-result', function (data) {
        console.log('Got shortcut result', data)
        that.alert = true
        that.shortcutUrl = '/' + data
      })
    })
  },
  methods: {
    processShortcut: function () {
      // Send websocket to backend
      if (this.socket.connected) {
        console.log('Create Shortcut')
        // console.log(this.actionsUsed)
        this.socket.emit('createShortcut', {
          actions: this.actionsUsed,
          // actionName: this.actionsUsed[1].actionName,
          // text: this.actionsUsed[1].text,
          // number: this.actionsUsed[1].number,
          shortcutName: this.shortcutName,
          shortcutColor: this.shortcutColor
        })
        return
      }
      console.log('Tried to send a data but no connection to socket')
    }
  }

}
</script>
