<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Name'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="example"
          type="text"
          v-model="action.text"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Don\'t Include File Extension'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch
          v-model="action.dontIncludeFileExtension"
        ></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetName",
  mixins: [Mixin]
};
</script>
