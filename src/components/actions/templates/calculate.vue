<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs3>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Operation'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs9 class="text-xs-right">
        <v-btn icon @click="action.operation = '+', action.extras = false">
          <v-icon :color="action.operation === '+' ? 'primary' : 'rgba(0,0,0,.87)'">add</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = '-', action.extras = false">
          <v-icon :color="action.operation === '-' ? 'primary' : 'rgba(0,0,0,.87)'">remove</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = 'x', action.extras = false">
          <v-icon :color="action.operation === 'x' ? 'primary' : 'rgba(0,0,0,.87)'">clear</v-icon>
        </v-btn>
        <v-btn icon @click="action.operation = '/', action.extras = false">
          <v-icon
            :color="action.operation === '/' ? 'primary' : 'rgba(0,0,0,.87)'"
          >border_horizontal</v-icon>
        </v-btn>
        <!-- Additional Operation Options -->
        <v-btn icon @click="action.operation = '…'">
          <v-icon :color="action.operation === '…' ? 'primary' : 'rgba(0,0,0,.87)'">more_horiz</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.operation !== '…'" align-center justify-center>
      <v-flex xs9>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Operand'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="42" type="number" v-model="action.operand" reverse></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.operation === '…'" align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Scientific Operation'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-select :items="action.operationOptions" v-model="action.scientificOperation"></v-select>
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
