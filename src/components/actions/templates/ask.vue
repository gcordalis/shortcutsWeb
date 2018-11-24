<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Question'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="Enter text"
          type="text"
          v-model="action.text"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Default Answer'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9>
        <v-text-field
          placeholder="optional"
          type="text"
          v-model="action.defaultAnswer"
          reverse
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs9>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Input Type'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-btn-toggle>
          <v-btn flat @click="action.inputType = 'Text'">
            Text
          </v-btn>
          <v-btn flat @click="action.inputType = 'Number'">
            Number
          </v-btn>
          <v-btn flat @click="action.inputType = 'URL'">
            URL
          </v-btn>
          <v-btn flat @click="action.inputType = 'Date'">
            Date
          </v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Ask",
  mixins: [Mixin]
};
</script>
