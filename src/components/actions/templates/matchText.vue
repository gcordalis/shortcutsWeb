<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Pattern'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field type="text" v-model="action.pattern" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Case Sensitive'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch v-model="action.caseSensitive"></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "MatchText",
  mixins: [Mixin]
};
</script>
