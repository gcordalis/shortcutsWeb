<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs1>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Title'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11 class="text-xs-right">
        <v-text-field placeholder="Attention-grabbing title" type="text" v-model="action.text"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-textarea
          name="input-7-4"
          placeholder="Informational message"
          value
          v-model="action.message"
        ></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Show Cancel Button'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch v-model="action.showCancelButton"></v-switch>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "ShowAlert",
  mixins: [Mixin]
};
</script>
