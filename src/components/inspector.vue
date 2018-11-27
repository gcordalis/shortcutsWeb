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
                      <div class="caption"></div>
                      <a :href="downloadUrl" _blank download>
                        <v-btn>Download</v-btn>
                      </a>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 md2>
                  <v-img
                    src="/static/shortcuts/qr/google.svg"
                    height="125px"
                    contain
                    style="margin: 10px 0"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center>
          <v-flex xs12 md6>
            <div class="headline">Import Questions</div>
          </v-flex>
        </v-layout>
        <v-layout row align-center justify-center>
          <v-flex xs12 md6 v-for="(i, index) in metadata[0].importQuestions" :key="index">
            {{ i.parameterKey }}
            {{ i.text }}
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
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
