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
      <div
        v-for="i in shortcutColors"
        :key="i.workflowColor"
        class="colorPicker"
        v-if="colorPicker"
      >
        <v-icon class="colorPicker" :style="'background-color: ' + i.rgb + '; color: #FFF'" @click="shortcutRgb = 'background-color: ' + i.rgb, shortcutColor = i.workflowColor, colorPicker = false">edit</v-icon>
          
      </div>
      <v-icon class="actionIcon" :style="shortcutRgb + '; color: #FFF'" @click="colorPicker = !colorPicker">edit</v-icon>
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
      <v-snackbar
        v-model="qrAlert"
        right='right'
        :timeout="qrTimeout"
        top='top'
        class="completionAlert"
      >
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 text-xs-center>
                <a :href="shortcutUrl" target="_blank" download>
                  <v-img
                    :src="qrPath"
                    class="grey lighten-2 qrBorderRadius"
                  >
                  </v-img>
                </a>

            </v-flex>
          </v-layout>
        </v-container>
      </v-snackbar>
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
      title: 'Shortcuts Web',
      axios: require('axios'),
      shortcutName: 'Shortcut-' + (new Date()).getTime(),
      shortcutUrl: '',
      shortcutColor: '4282601983',
      shortcutRgb: 'background-color: rgb(252, 17, 57)',
      qrAlert: false,
      qrPath: '',
      qrTimeout: 10000,
      colorPicker: false,
      serverUrl: '',
      serverPort: ''
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
  created () {
    if (process.env.NODE_ENV === 'production') {
      this.serverUrl = process.env.SERVER_URL
      this.serverPort = process.env.PORT
      console.log('This is the port:', process.env.PORT)
      console.log(this.serverUrl, ':', this.serverPort)
    } else {
      this.serverUrl = process.env.SERVER_URL
      this.serverPort = process.env.PORT
      console.log(this.serverUrl, ':', this.serverPort)
    }
  },

  methods: {
    processShortcut: function () {
      // Send shortcut request to server
      this.axios.post('/createShortcut', {
      // this.axios.post('http://localhost:8086/createShortcut', {
        actions: this.actionsUsed,
        shortcutName: this.shortcutName,
        shortcutColor: this.shortcutColor
      })
      .then((res) => {
        console.log(res.data.shortcutsResult.shortcutName, 'created')
        this.qrAlert = true
        this.shortcutUrl = res.data.shortcutsResult.shortcutPath
        this.qrPath = res.data.shortcutsResult.qrPath
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

}
</script>
