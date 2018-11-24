<template>
  <v-card>
    <v-card-title primary-title :style="action.titleColor">
      <v-layout>
        <v-flex xs11 class="text-xs-left">
          <h3 class="headline mb-0">
            <v-icon v-html="action.icon"></v-icon>
            {{ action.name }}
          </h3>
        </v-flex>
<!--         <v-flex xs10>
          <h3 class="headline mb-0">{{ action.name }}</h3>
        </v-flex> -->
        <v-flex xs1 class="text-xs-right">
          <h3 class="headline mb-0">
            <v-icon @click="action.isVisible = !action.isVisible">remove_circle</v-icon>
            <v-icon @click="removeActionLocal(action)">cancel</v-icon>
          </h3>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text :style="action.bodyColor" v-if="action.isVisible">
      <div v-if="action.name === 'Number'">
        <v-list>
          <v-list-tile
            :key="1"
            avatar
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="'Number'"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <v-text-field
                label="Solo"
                placeholder="42"
                solo
                type="number"
                v-model="action.number"
              ></v-text-field>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  props: ["action"],
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  name: "action-number",
  methods: {
    ...mapMutations(["removeAction"]),
    removeActionLocal(action) {
      console.log(action.id);
      this.removeAction(action.id);
    }
  }
};
</script>