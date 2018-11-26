<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      enable-resize-watcher
      fixed
      app
    >
      <NavActionList /> 
    </v-navigation-drawer>
    <v-toolbar
     align-center justify-center
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
import ActionMaster from "@/components/actions/action-master";
import NavActionList from "@/components/nav-action-list";
import { mapState } from "vuex";

export default {
  data() {
    return {
      clipped: true,
      title: "Shortcuts Web"
    };
  },
  components: {
    ActionMaster,
    NavActionList
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  name: "App",
  created() {
    if (process.env.NODE_ENV === "production") {
      this.serverUrl = process.env.SERVER_URL;
      this.serverPort = process.env.PORT;
      console.log("This is the port:", process.env.PORT);
    } else {
      this.serverUrl = process.env.SERVER_URL;
      this.serverPort = process.env.PORT;
    }
  }
};
</script>
