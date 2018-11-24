<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Variable'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="Variable Name"
          type="text"
          v-model="action.text"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "GetVariable",
  mixins: [Mixin]
};
</script>
