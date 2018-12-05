<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs1>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Host'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11 class="text-xs-right">
        <v-text-field placeholder="192.168.1.100" type="text" v-model="action.host"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs1>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Port'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11 class="text-xs-right">
        <v-text-field placeholder="22" type="numb er" v-model="action.port"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs1>
        <v-list-tile-content>
          <v-list-tile-title v-text="'User'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11 class="text-xs-right">
        <v-text-field placeholder="root" type="text" v-model="action.user"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs1>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Password'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11 class="text-xs-right">
        <v-text-field placeholder="password" type="password" v-model="action.password"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-textarea name="input-7-4" placeholder="Script" value v-model="action.script"></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "RunScriptsOverSsh",
  mixins: [Mixin]
};
</script>
