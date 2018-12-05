<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs9>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Minimum'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="42" type="number" v-model="action.minimum" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs9>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Maximum'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="42" type="number" v-model="action.maximum" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "RandomNumber",
  mixins: [Mixin]
};
</script>
