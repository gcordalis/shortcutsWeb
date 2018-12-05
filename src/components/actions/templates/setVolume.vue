<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs8>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Volume'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs4>
        <v-text-field placeholder="50" type="number" v-model="action.volume" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetVolume",
  mixins: [Mixin]
};
</script>
