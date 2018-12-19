<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Archive Name'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="optional" type="text" v-model="action.archiveName" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Format'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.formatOptions" v-model="action.format"></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "MakeArchive",
  mixins: [Mixin]
};
</script>
