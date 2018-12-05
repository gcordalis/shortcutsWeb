<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Input'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs2 class="text-xs-right">
        <v-select :items="action.inputOptions" v-model="action.input"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Value'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          v-if="action.input !== 'Is Greater Than' && 'Is Less Than'"
          placeholder="example"
          type="text"
          v-model="action.value"
          reverse
        ></v-text-field>
        <v-text-field
          v-if="action.input === 'Is Greater Than' && 'Is Less Than'"
          placeholder="example"
          type="number"
          v-model="action.value"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "If",
  mixins: [Mixin]
};
</script>
