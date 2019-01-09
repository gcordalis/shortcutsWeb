<template>
  <v-app>
    <v-container>
        <v-layout column>
          <ActionMaster/>
        </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ActionMaster from "@/components/actions/action-master";

export default {
  data() {
    return {
      title: "Shortcuts Web"
    };
  },
  components: {
    ActionMaster
  },
  name: "editor"
};
</script>
