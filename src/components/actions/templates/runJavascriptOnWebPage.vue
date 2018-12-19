<template>
  <div style="padding-top: 12px">
    <Monaco
      class="editor"
      width="100%"
      height="290"
      language="javascript"
      theme="vs"
      v-model="action.code"
      @mounted="onMounted"
      @codeChange="onCodeChange"
    ></Monaco>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";
import Monaco from "monaco-editor-forvue";

export default {
  components: {
    Monaco
  },
  name: "RunJavascriptOnWebPage",
  mixins: [Mixin],
  methods: {
    onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      this.action.code = this.editor.getValue();
    }
  }
};
</script>

<style>
.editor {
  width: 100%;
  height: 315px;
}
</style>
