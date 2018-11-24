<template>
  <div>
    <v-textarea
      name="input-7-4"
      label="Enter comment..."
      value=""
      v-model="action.text"
    />
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "Comment",
  mixins: [Mixin]
};
</script>
