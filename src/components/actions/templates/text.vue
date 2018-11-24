<template>
  <div>
    <v-textarea
      name="input-7-4"
      label="Enter text..."
      value=""
      v-model="action.text"
    ></v-textarea>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "TextAction",
  mixins: [Mixin]
};
</script>
