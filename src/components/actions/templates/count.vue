<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Count'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2>
        <v-select
          :items="action.countOptions"
          v-model="action.text"
        ></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Count",
  mixins: [Mixin]
};
</script>
