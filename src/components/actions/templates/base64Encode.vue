<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Mode'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.encodeOptions" v-model="action.encodeMode"></v-select>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.encodeMode === 'Encode'" align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Line Breaks'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.lineBreakOptions" v-model="action.lineBreakMode"></v-select>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Base64Encode",
  mixins: [Mixin]
};
</script>
