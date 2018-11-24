<template>
  <v-card class="actionCard">
    <v-card-title primary-title :style="action.titleColor">
      <v-layout align-center justify-center>
        <v-flex xs8 class="text-xs-left">
          <h3 class="headline mb-0">
            <v-icon v-html="action.icon" class="actionIcon" :style="action.iconColor"></v-icon>
            {{ action.title }}
          </h3>
        </v-flex>
        <v-flex xs4 class="text-xs-right">
          <h3 class="headline mb-0">
            <v-icon class="actionCloseIcon" @click="action.isVisible = !action.isVisible">remove_circle</v-icon>
            <v-icon class="actionCloseIcon" @click="removeActionLocal(action)">cancel</v-icon>
          </h3>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text :style="action.bodyColor" v-if="action.isVisible">
      <Comment :id="action.id" v-if="action.name === 'comment'"/>
      <TextAction :id="action.id" v-if="action.name === 'text'"/>
      <Number :id="action.id" v-if="action.name === 'number'"/>
      <Calculate :id="action.id" v-if="action.name === 'calculate'"/>
      <ShowResult :id="action.id" v-if="action.name === 'showResult'"/>
      <Wait :id="action.id" v-if="action.name === 'wait'"/>
      <URL :id="action.id" v-if="action.name === 'url'"/>
      <GetContentsOfUrl :id="action.id" v-if="action.title === 'Get Contents of URL'"/>
      <SetTorch :id="action.id" v-if="action.name === 'setTorch'"/>
      <SetName :id="action.id" v-if="action.name === 'setName'"/>
      <SetLowPowerMode :id="action.id" v-if="action.name === 'setLowPowerMode'"/>
      <AddToVariable :id="action.id" v-if="action.name === 'addToVariable'"/>
      <SetVariable :id="action.id" v-if="action.name === 'setVariable'"/>
      <GetVariable :id="action.id" v-if="action.name === 'getVariable'"/>
      <Ask :id="action.id" v-if="action.name === 'ask'"/>
      <Count :id="action.id" v-if="action.name === 'count'"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Comment from "@/components/actions/templates/comment";
import Calculate from "@/components/actions/templates/calculate";
import GetContentsOfUrl from "@/components/actions/templates/getContentsOfUrl";
import TextAction from "@/components/actions/templates/text";
import Number from "@/components/actions/templates/number";
import ShowResult from "@/components/actions/templates/showResult";
import Wait from "@/components/actions/templates/wait";
import URL from "@/components/actions/templates/url";
import SetTorch from "@/components/actions/templates/setTorch";
import SetName from "@/components/actions/templates/setName";
import SetLowPowerMode from "@/components/actions/templates/setLowPowerMode";
import AddToVariable from "@/components/actions/templates/addToVariable";
import SetVariable from "@/components/actions/templates/setVariable";
import GetVariable from "@/components/actions/templates/getVariable";
import Ask from "@/components/actions/templates/ask";
import Count from "@/components/actions/templates/count";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ActionItem",
  data() {
    return {};
  },
  props: ["action"],
  components: {
    Comment,
    Calculate,
    GetContentsOfUrl,
    TextAction,
    Number,
    ShowResult,
    Wait,
    URL,
    SetTorch,
    SetName,
    SetLowPowerMode,
    AddToVariable,
    SetVariable,
    GetVariable,
    Ask,
    Count
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  methods: {
    ...mapMutations(["removeAction"]),
    removeActionLocal(action) {
      console.log(action.id);
      this.removeAction(action.id);
    }
  }
};
</script>
