<template>
  <div>
    <v-layout align-center justify-center>
        <v-flex xs3>
        <v-list-tile-content>
            <v-list-tile-title v-text="'Operation'"></v-list-tile-title>
        </v-list-tile-content>
        </v-flex>
        <v-flex xs9 class="text-xs-right">
        <v-btn icon @click="action.operation = '+'">
            <v-icon :color="action.operation === '+' ? 'primary' : 'rgba(0,0,0,.87)'">add</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = '-'">
            <v-icon :color="action.operation === '-' ? 'primary' : 'rgba(0,0,0,.87)'">remove</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = 'x'">
            <v-icon :color="action.operation === 'x' ? 'primary' : 'rgba(0,0,0,.87)'">clear</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = '/'">
            <v-icon :color="action.operation === '/' ? 'primary' : 'rgba(0,0,0,.87)'">crop_square</v-icon>
        </v-btn>
        <!-- Additional Operation Options -->
        <!--<v-btn icon>
            <v-icon>more_horiz</v-icon>
        </v-btn> -->
        </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
        <v-flex xs3>
        <v-list-tile-content>
            <v-list-tile-title v-text="'Operand'"></v-list-tile-title>
        </v-list-tile-content>
        </v-flex>
        <v-flex xs9>
            <v-text-field
            placeholder="42"
            type="number"
            v-model="action.operand"
            reverse
            ></v-text-field>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Calculate",
  mixins: [Mixin]
};
</script>
