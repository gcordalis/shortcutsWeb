<template>
  <div>
    <v-textarea name="input-7-4" label="Caption" value v-model="action.caption"></v-textarea>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "PostOnInstagram",
  mixins: [Mixin]
};
</script>
