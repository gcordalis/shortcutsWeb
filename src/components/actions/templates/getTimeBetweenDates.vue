<template>
  <div>
    <v-layout align-center justify-center v-if="action.timeFormat !== 'Relative'">
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Get Time From'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.timeOptions" v-model="action.time"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.time === 'Other'">
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Other Date'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field placeholder="9 September 2014" type="text" v-model="action.date" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Time Format'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.unitOptions" v-model="action.unit"></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "GetTimeBetweenDates",
  mixins: [Mixin]
};
</script>
