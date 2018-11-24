<template>
  <div>
    <v-layout align-center justify-center>  
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-if="action.time !== 1" v-text="action.time + ' Seconds' "></v-list-tile-title>
          <v-list-tile-title v-if="action.time === 1" v-text="action.time + ' Second' "></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="1"
          type="number"
          v-model="action.time"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Wait",
  mixins: [Mixin]
};
</script>
