<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs8>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Brightness'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs4>
        <v-text-field placeholder="42" type="number" v-model="action.brightness" reverse></v-text-field>
        <!-- <v-slider v-model="action.brightness"></v-slider> -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetBrightness",
  mixins: [Mixin]
};
</script>
