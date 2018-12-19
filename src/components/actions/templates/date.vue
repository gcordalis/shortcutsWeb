<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Use'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.useOptions" v-model="action.use"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.use === 'Specified Date'">
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Name'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="29 June 2007" type="text" v-model="action.date" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Date",
  mixins: [Mixin]
};
</script>
