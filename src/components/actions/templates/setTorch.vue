<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Torch'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-select :items="action.settingOptions" v-model="action.setting"></v-select>
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
