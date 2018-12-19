<template>
  <v-app>
    <v-slide-y-transition mode="out-in">
      <v-navigation-drawer clipped app v-if="['editor'].includes($route.name)" v-model="drawer">
        <NavActionList/>
      </v-navigation-drawer>
    </v-slide-y-transition>
    <!-- <v-slide-y-transition mode="out-in">
      <v-navigation-drawer clipped app right v-model="info">
        <NavActionList/>
      </v-navigation-drawer>
    </v-slide-y-transition>-->
    <v-toolbar
      align-center
      justify-center
      app
      :clipped-left="clipped"
      :style="'background-image: linear-gradient(to bottom right,' + rgbTop + ',' + rgbBottom + '); color: #FFF'"
    >
      <v-toolbar-side-icon
        dark
        @click.stop="drawer = !drawer"
        v-if="['editor'].includes($route.name)"
      ></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn dark icon @click.stop="info = !info">
        <v-icon>new_releases</v-icon>
      </v-btn>-->
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <!-- <router-link to="/">
        <v-btn>Editor</v-btn>
      </router-link>
      <router-link to="/inspector">
        <v-btn>Inspector</v-btn>
      </router-link>-->
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ActionMaster from "@/components/actions/action-master";
import NavActionList from "@/components/nav-action-list";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      info: true,
      title: "Shortcuts Web",
      shortcutRgb:
        "background-image: linear-gradient(to bottom right, rgb(252, 17, 57), rgb(182, 0, 23)",
      rgbTop: "",
      rgbBottom: ""
    };
  },
  name: "App",
  components: {
    ActionMaster,
    NavActionList
  },
  computed: {
    ...mapState({
      shortcutColors: state => state.shortcutColors
    })
  },
  created() {
    var colorTheme = this.shortcutColors[
      Math.floor(Math.random() * this.shortcutColors.length)
    ];
    this.rgbTop = colorTheme.rgbTop;
    this.rgbBottom = colorTheme.rgbBottom;
  }
};
</script>
