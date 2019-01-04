<template>
  <v-container>
    <v-layout row align-center justify-center>
      <v-flex xs12 headline>What's new</v-flex>
    </v-layout>
    <v-card flat v-for="(log, index) in changelog" :key="log.title + '-' + index">
      <v-layout row title>
        <v-flex xs12>{{ log.title }}</v-flex>
      </v-layout>
      <v-layout row caption>
        <v-flex xs12>{{ moment(log.date).fromNow() }}</v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs3 v-for="(badge) in log.badges" :key="badge + '-' + index">
          <v-chip :class="'badge badge-' + badge">{{ badge }}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout row body-1>
        <v-flex xs12>{{ log.description }}</v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      moment: require("moment"),
      axios: require("axios"),
      changelog: []
    };
  },
  name: "whats-new",
  created() {
    this.axios.get("/static/whatsnew.json").then(res => {
      this.changelog = res.data;
    });
  }
};
</script>

<style scoped>
/* Set style for badges */
.badge {
  border-radius: 10px;
  height: 21px;
  margin: 5%;
}

.badge-new {
  background: #3778ff !important;
  border: 1px solid #3778ff;
  color: white !important;
}

.badge-fix {
  background: #ff4772 !important;
  border: 1px solid #ff4772;
  color: white !important;
}

.badge-improvement {
  background: #3aaa55 !important;
  border: 1px solid #3aaa55;
  color: white !important;
}

/* Border and padding around each log item */
.v-card--flat {
  border-top: 1px solid #dedddd;
  padding: 10px 0;
}

/* Heading Style */
.headline {
  padding-bottom: 10px;
}
</style>
