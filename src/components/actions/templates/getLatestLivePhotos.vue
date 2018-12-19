<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-if="action.count !== 1" v-text="action.count + ' Live Photos' "></v-list-tile-title>
          <v-list-tile-title v-if="action.count === 1" v-text="action.count + ' Live Photo' "></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="1" type="number" v-model="action.count" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "GetLatestLivePhotos",
  mixins: [Mixin]
};
</script>
