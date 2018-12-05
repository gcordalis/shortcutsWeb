<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Do Not Disturb'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch v-model="action.value"></v-switch>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.value" align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Until'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.untilOptions" v-model="action.until"></v-select>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.until == 'Time'" align-center justify-center>
      <v-flex xs9>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Time'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="7 pm" v-model="action.time" reverse></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "SetDoNotDisturb",
  mixins: [Mixin]
};
</script>
