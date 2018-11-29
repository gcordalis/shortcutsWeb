<template>
  <v-list>
    <v-list-tile>
      <!-- <v-btn @click="setShortcutColor('1234567890');"></v-btn> -->
      <v-layout row align-center justify-center>
        <v-flex xs2>
          <div class="text-xs-center">
            <v-dialog v-model="iconSelector" width="1000">
              <div slot="activator" class="actionIcon" :style="shortcutRgb + '; color: #FFF'">
                <svg
                  :viewBox="shortcutGlyphs[shortcutGlyph].viewBox"
                  style="width: 75%; fill: #FFF; margin: 3px 0px 0px 7px"
                >
                  <path
                    :d="shortcutGlyphs[shortcutGlyph].d"
                    transform="translate(0,1024) scale(1, -1)"
                  ></path>
                </svg>
              </div>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  <div class="actionIcon" :style="shortcutRgb + '; color: #FFF'">
                    <svg
                      :viewBox="shortcutGlyphs[shortcutGlyph].viewBox"
                      style="width: 75%; fill: #FFF; margin: 3px 0px 0px 7px"
                    >
                      <path
                        :d="shortcutGlyphs[shortcutGlyph].d"
                        transform="translate(0,1024) scale(1, -1)"
                      ></path>
                    </svg>
                  </div>
                  {{ shortcutName }}
                  <v-spacer></v-spacer>
                  <v-btn @click="iconSelector = false" :style="shortcutRgb + '; color: #FFF'">Done</v-btn>
                </v-card-title>
                <v-card-text>
                  <v-container class="iconViewer">
                    <v-layout
                      row
                      wrap
                      align-center
                      justify-center
                      text-xs-center
                      style="margin-bottom: 15px"
                    >
                      <div v-for="i in shortcutColors" :key="i.workflowColor" class="colorPicker">
                        <v-icon
                          class="colorPicker"
                          :style="'background-image: linear-gradient(to bottom right, ' + i.rgbTop + ', ' + i.rgbBottom +'); color: #FFF'"
                          @click="shortcutRgb = 'background-image: linear-gradient(to bottom right, ' + i.rgbTop + ', ' + i.rgbBottom, shortcutColor = i.workflowColor, colorPicker = false"
                        ></v-icon>
                      </div>
                    </v-layout>
                    <v-layout row wrap align-center justify-center text-xs-center>
                      <v-flex
                        xs1
                        v-for="glyph in shortcutGlyphs"
                        :key="glyph.id"
                        :id="glyph.id"
                        class="glyph"
                      >
                        <svg
                          @click="shortcutGlyph = glyph.id"
                          :viewBox="glyph.viewBox"
                          style="max-height: 3em; width: 3em; margin: 6px 0 0 px"
                        >
                          <path
                            id="iconPicker"
                            :d="glyph.d"
                            transform="translate(0,1024) scale(1, -1)"
                          ></path>
                        </svg>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
        <v-flex xs9>
          <v-text-field label="Shortcut Name" v-model="shortcutName"></v-text-field>
        </v-flex>
        <v-flex xs1>
          <v-icon @click="processShortcut()" v-if="actionsUsed">system_update</v-icon>
        </v-flex>
      </v-layout>
    </v-list-tile>
    <v-list-tile>
      <v-text-field label="Search" v-model="search"></v-text-field>
    </v-list-tile>
    <v-list-tile
      value="true"
      v-for="(action, index) in filteredActions"
      :key="action.name + '-' + index"
      @click="addAction(action);"
    >
      <v-list-tile-action>
        <v-icon v-html="action.icon" class="actionIcon" :style="action.iconColor"></v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <button @click="search = ''">
          <v-list-tile-title v-text="action.title"></v-list-tile-title>
        </button>
      </v-list-tile-content>
    </v-list-tile>
    <v-snackbar v-model="qrAlert" :timeout="qrTimeout" top="top" class="completionAlert">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 text-xs-center>
            <a :href="shortcutUrl" target="_blank" download>
              <v-img :src="qrPath" class="grey lighten-2 qrBorderRadius"></v-img>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-snackbar>
  </v-list>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      axios: require("axios"),
      search: "",
      shortcutName: "Shortcut-" + new Date().getTime(),
      shortcutUrl: "",
      shortcutColor: "4282601983",
      shortcutGlyph: "E877",
      shortcutRgb:
        "background-image: linear-gradient(to bottom right, rgb(252, 17, 57), rgb(182, 0, 23)",
      qrAlert: false,
      qrPath: "",
      qrTimeout: 10000,
      iconSelector: false
    };
  },
  name: "navigation-bar",
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed,
      shortcutColors: state => state.shortcutColors,
      shortcutGlyphs: state => state.shortcutGlyphs
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
  methods: {
    ...mapMutations(["addAction"]),
    processShortcut: function() {
      // Send shortcut request to server
      this.axios
        .post("/createShortcut", {
          actions: this.actionsUsed,
          shortcutName: this.shortcutName,
          shortcutColor: this.shortcutColor,
          shortcutGlyph: this.shortcutGlyph
        })
        .then(res => {
          console.log(res.data.shortcutsResult.shortcutName, "created");
          this.qrAlert = true;
          this.shortcutUrl = res.data.shortcutsResult.shortcutPath;
          this.qrPath = res.data.shortcutsResult.qrPath;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
