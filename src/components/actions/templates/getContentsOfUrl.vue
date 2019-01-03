<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Method'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1 class="text-xs-right">
        <v-select :items="action.methodOptions" v-model="action.method"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Headers'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon @click="action.headersVisible = !action.headersVisible">keyboard_arrow_down</v-icon>
        </v-list-tile-content>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.headersVisible" v-for="(header, index) in action.headers" :key="index">
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon class="removeIcon" @click="removeHeader(index)">remove_circle</v-icon>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="Key" type="text" v-model="header.key"></v-text-field>
      </v-flex>
      <v-flex xs8>
        <v-text-field placeholder="Value" type="text" v-model="header.value"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.headersVisible">
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon class="addIcon" @click="addHeader()">add_circle</v-icon>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Add new header'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.method !== 'GET'">
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Request Body'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1 class="text-xs-right">
        <v-select :items="action.requestOptions" v-model="action.requestBodyType"></v-select>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center v-if="action.method != 'GET'">
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Body'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon
            @click="action.requestBodyVisible = !action.requestBodyVisible"
          >keyboard_arrow_down</v-icon>
        </v-list-tile-content>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="action.method !== 'GET' &&  action.requestBodyVisible"
      v-for="(header, index) in action.requestBody"
      :key="index"
    >
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon class="removeIcon" @click="removeHeader(index)">remove_circle</v-icon>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs3>
        <v-text-field placeholder="Key" type="text" v-model="header.key"></v-text-field>
      </v-flex>
      <v-flex xs8>
        <v-text-field placeholder="Value" type="text" v-model="header.value"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout v-if="action.method !== 'GET' &&  action.requestBodyVisible">
      <v-flex xs1>
        <v-list-tile-content>
          <v-icon class="addIcon" @click="addRequestBody()">add_circle</v-icon>
        </v-list-tile-content>
      </v-flex>
      <v-flex xs11>
        <v-list-tile-content>
          <v-list-tile-title v-text="'Add new field'"></v-list-tile-title>
        </v-list-tile-content>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Mixin from "@/mixins/template-mixin";

export default {
  name: "GetContentsOfUrl",
  mixins: [Mixin],
  methods: {
    addHeader() {
      this.action.headers.push({ key: "", value: "" });
    },
    removeHeader(index) {
      this.action.headers.splice(index, 1);
    },
    addRequestBody() {
      this.action.requestBody.push({ key: "", value: "" });
    },
    removeRequestBody(index) {
      this.action.requestBody.splice(index, 1);
    }
  }
};
</script>
