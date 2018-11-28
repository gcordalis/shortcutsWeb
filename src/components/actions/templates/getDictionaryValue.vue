<template>
  <div>
    <v-layout align-center justify-center>
        <v-flex xs10>
          <v-list-tile-content>
              <v-list-tile-title v-text="'Get'"></v-list-tile-title>
          </v-list-tile-content>
          </v-flex>
          <v-flex xs2 class="text-xs-right">
            <v-select
                :items="action.getOptions"
                v-model="action.get"
            ></v-select>
        </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
        <v-flex xs3>
        <v-list-tile-content>
            <v-list-tile-title v-text="'Key'"></v-list-tile-title>
        </v-list-tile-content>
        </v-flex>
        <v-flex xs9>
            <v-text-field
            placeholder="example"
            v-model="action.key"
            reverse
            ></v-text-field>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "GetDictionaryValue",
  mixins: [Mixin]
};
</script>
