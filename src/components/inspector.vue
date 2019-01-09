<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 md6 offset-md3>
          <v-text-field
            label="Shortcut URL"
            outline
            @keyup.enter="enterClicked()"
            append-icon="search"
            v-model="searchUrl"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row text-xs-center align-center justify-center v-if="loader">
        <v-flex xs12>
          <v-progress-circular :width="3" color="red" indeterminate></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-container v-if="infoDisplay">
        <v-layout row align-center justify-center>
          <v-flex xs12 md6>
            <v-card flat outline>
              <v-layout row>
                <v-flex xs12 md10>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{ shortcut[0].name }}</div>
                      <div
                        class="caption"
                      >{{ metadata[0].actions.length }} Actions, Shared {{ moment(shortcut[0].creationDate).fromNow() }}</div>
                      <div class="caption">
                        Shortcuts version:
                        <b>{{ metadata[0].client.release }}</b>
                      </div>
                      <a :href="downloadUrl" _blank download>
                        <v-btn>Download</v-btn>
                      </a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 md2>
                  <v-img :src="iconUrl" height="125px" contain style="margin: 10px 0"></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center v-if="metadata[0].importQuestions.length > 0">
          <v-flex xs6>
            <div class="headline">Import Questions</div>
          </v-flex>
        </v-layout>
        <v-layout
          row
          align-center
          justify-center
          v-for="(i, index) in metadata[0].importQuestions"
          :key="index"
        >
          <v-flex xs6>
            <v-card class="actionCard">
              <v-card-title primary-title style="background-color: #F2F3F5">
                <v-layout align-center justify-center>
                  <v-flex xs12 class="text-xs-left">
                    <h3 class="headline mb-0">
                      <!-- <v-icon
                          v-html="action.icon"
                          class="actionIcon"
                          :style="action.iconColor"
                          @click="duplicateAction(action)"
                      ></v-icon>-->
                      {{ i.parameterKey }}
                    </h3>
                  </v-flex>
                  <!-- <v-flex xs4 class="text-xs-right">
                      <h3 class="headline mb-0">
                        <v-icon
                          class="actionCloseIcon"
                          @click="action.isVisible = !action.isVisible"
                        >remove_circle</v-icon>
                        <v-icon class="actionCloseIcon" @click="removeActionLocal(action)">cancel</v-icon>
                      </h3>
                  </v-flex>-->
                </v-layout>
              </v-card-title>
              <v-card-text>
                <v-textarea disabled no-resize rows="3" :value="i.text"></v-textarea>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center>
          <v-flex xs6>
            <div class="headline">Actions</div>
          </v-flex>
        </v-layout>
        <v-layout
          row
          align-center
          justify-center
          v-for="(i, index) in metadata[0].actions"
          :key="index"
        >
          <v-flex xs6>
            <v-card class="actionCard">
              <v-card-title primary-title style="background-color: #F2F3F5">
                <v-layout align-center justify-center>
                  <v-flex xs12 class="text-xs-left">
                    <h3 class="headline mb-0">{{ i.identifier }}</h3>
                  </v-flex>
                </v-layout>
              </v-card-title>
              <!-- <v-card-text>
                <v-textarea
                  disabled
                  no-resize
                  rows="2"
                  v-for="(params, index) in i.parameters"
                  :value="params"
                  :key="index"
                ></v-textarea>
              </v-card-text>-->
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      axios: require("axios"),
      moment: require("moment"),
      searchUrl: "",
      infoDisplay: false,
      loader: false,
      metadata: "",
      shortcut: "",
      downloadUrl: "",
      iconUrl: "",
      sample:
        "https://www.icloud.com/shortcuts/29c46ce343f546c8ae5d8972b5fffedc"
    };
  },
  name: "inspector",
  methods: {
    enterClicked() {
      this.loader = true;
      this.axios
        .post("/inspectShortcut", {
          url: this.searchUrl
        })
        .then(res => {
          this.infoDisplay = true;
          this.loader = false;
          this.metadata = res.data.metadata;
          this.shortcut = res.data.shortcut;
          this.downloadUrl = res.data.downloadURL;
          this.iconUrl = res.data.iconURL;
          this.qrPath = res.data.qrPath;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
