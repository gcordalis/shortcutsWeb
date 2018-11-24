<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Torch'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-btn-toggle>
          <v-btn flat @click="action.setting = 'off'">
            <v-icon>flash_off</v-icon>
          </v-btn>
          <v-btn flat @click="action.setting = 'on'">
            <v-icon>flash_on</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetTorch",
  mixins: [Mixin]
};
</script>
