<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Wi-Fi'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch v-model="action.value"></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetWiFi",
  mixins: [Mixin]
};
</script>
