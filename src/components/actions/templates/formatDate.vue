<template>
  <div>
    <v-layout align-center justify-center v-if="action.timeFormat !== 'Relative'">
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Date Format'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.dateFormatOptions" v-model="action.dateFormat"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.dateFormat === 'Relative'">
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Alternative Format'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.alternativeFormatOptions" v-model="action.alternativeFormat"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.dateFormat === 'ISO 8601'">
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Include ISO 8601 Time'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-switch v-model="action.includeISO8601Time"></v-switch>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.dateFormat === 'Custom'">
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Format String'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="EEE, dd MMM yyyy HH:mm:ss Z"
          type="text"
          v-model="action.formatString"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout
      align-center
      justify-center
      v-if="action.dateFormat !== 'RFC 2822' && action.dateFormat !== 'ISO 8601' && action.dateFormat !== 'Custom'"
    >
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Time Format'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.timeFormatOptions" v-model="action.timeFormat"></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "FormatDate",
  mixins: [Mixin]
};
</script>
