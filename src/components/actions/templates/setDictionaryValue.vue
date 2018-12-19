<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Key'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="name" type="text" v-model="action.key" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Value'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="example" type="text" v-model="action.value" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetDictionaryValue",
  mixins: [Mixin]
};
</script>
