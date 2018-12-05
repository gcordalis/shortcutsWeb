<template>
  <v-card class="actionCard">
    <v-card-title primary-title :style="action.titleColor">
      <v-layout align-center justify-center>
        <v-flex xs8 class="text-xs-left">
          <h3 class="headline mb-0">
            <v-icon
              v-html="action.icon"
              class="actionIcon"
              :style="action.iconColor"
              @click="duplicateAction(action)"
            ></v-icon>
            {{ action.title }}
          </h3>
        </v-flex>
        <v-flex xs4 class="text-xs-right">
          <h3 class="headline mb-0">
            <v-icon
              class="actionCloseIcon"
              @click="action.isVisible = !action.isVisible"
            >remove_circle</v-icon>
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
      <Conditional :id="action.id" v-if="action.name === 'conditional'"/>
      <ShowResult :id="action.id" v-if="action.name === 'showResult'"/>
      <Wait :id="action.id" v-if="action.name === 'wait'"/>
      <URL :id="action.id" v-if="action.name === 'url'"/>
      <GetContentsOfUrl :id="action.id" v-if="action.title === 'Get Contents of URL'"/>
      <GetCurrentIpAddress :id="action.id" v-if="action.title === 'Get Current IP Address'"/>
      <SetTorch :id="action.id" v-if="action.name === 'setTorch'"/>
      <SetName :id="action.id" v-if="action.name === 'setName'"/>
      <SetLowPowerMode :id="action.id" v-if="action.name === 'setLowPowerMode'"/>
      <AddToVariable :id="action.id" v-if="action.name === 'addToVariable'"/>
      <SetVariable :id="action.id" v-if="action.name === 'setVariable'"/>
      <GetVariable :id="action.id" v-if="action.name === 'getVariable'"/>
      <Ask :id="action.id" v-if="action.name === 'ask'"/>
      <Count :id="action.id" v-if="action.name === 'count'"/>
      <GetDictionaryValue :id="action.id" v-if="action.name === 'getDictionaryValue'"/>
      <RunShortcut :id="action.id" v-if="action.name === 'runShortcut'"/>
      <setAirplaneMode :id="action.id" v-if="action.name === 'setAirplaneMode'"/>
      <setBrightness :id="action.id" v-if="action.name === 'setBrightness'"/>
      <setWiFi :id="action.id" v-if="action.name === 'setWiFi'"/>
      <setCellularData :id="action.id" v-if="action.name === 'setCellularData'"/>
      <setBluetooth :id="action.id" v-if="action.name === 'setBluetooth'"/>
      <skipBack :id="action.id" v-if="action.name === 'skipBack'"/>
      <setVolume :id="action.id" v-if="action.name === 'setVolume'"/>
      <generateHash :id="action.id" v-if="action.name === 'generateHash'"/>
      <base64Encode :id="action.id" v-if="action.name === 'base64Encode'"/>
      <calculateStatistics :id="action.id" v-if="action.name === 'calculateStatistics'"/>
      <randomNumber :id="action.id" v-if="action.name === 'randomNumber'"/>
      <getDeviceDetails :id="action.id" v-if="action.name === 'getDeviceDetails'"/>
      <getNetworkDetails :id="action.id" v-if="action.name === 'getNetworkDetails'"/>
      <showAlert :id="action.id" v-if="action.name === 'showAlert'"/>
      <showNotification :id="action.id" v-if="action.name === 'showNotification'"/>
      <setDoNotDisturb :id="action.id" v-if="action.name === 'setDoNotDisturb'"/>
      <runScriptOverSSH :id="action.id" v-if="action.name === 'runScriptOverSSH'"/>
    </v-card-text>
  </v-card>
</template>

<script>
import Calculate from "@/components/actions/templates/calculate";
import Comment from "@/components/actions/templates/comment";
import Conditional from "@/components/actions/templates/conditional";
import GetContentsOfUrl from "@/components/actions/templates/getContentsOfUrl";
import GetCurrentIpAddress from "@/components/actions/templates/getCurrentIpAddress";
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
import GetDictionaryValue from "@/components/actions/templates/getDictionaryValue";
import RunShortcut from "@/components/actions/templates/runShortcut";
import SetAirplaneMode from "@/components/actions/templates/setAirplaneMode";
import SetBrightness from "@/components/actions/templates/setBrightness";
import SetWiFi from "@/components/actions/templates/setWiFi";
import SetCellularData from "@/components/actions/templates/setCellularData";
import SetBluetooth from "@/components/actions/templates/setBluetooth";
import SkipBack from "@/components/actions/templates/skipBack";
import SetVolume from "@/components/actions/templates/setVolume";
import GenerateHash from "@/components/actions/templates/generateHash";
import Base64Encode from "@/components/actions/templates/base64Encode";
import CalculateStatistics from "@/components/actions/templates/calculateStatistics";
import RandomNumber from "@/components/actions/templates/randomNumber";
import GetDeviceDetails from "@/components/actions/templates/getDeviceDetails";
import GetNetworkDetails from "@/components/actions/templates/getNetworkDetails";
import ShowAlert from "@/components/actions/templates/showAlert";
import ShowNotification from "@/components/actions/templates/showNotification";
import SetDoNotDisturb from "@/components/actions/templates/setDoNotDisturb";
import RunScriptOverSSH from "@/components/actions/templates/runScriptOverSSH";
import { mapState, mapMutations } from "vuex";

export default {
  name: "ActionItem",
  data() {
    return {};
  },
  props: ["action"],
  components: {
    Calculate,
    Comment,
    Conditional,
    GetContentsOfUrl,
    GetCurrentIpAddress,
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
    Count,
    GetDictionaryValue,
    RunShortcut,
    SetAirplaneMode,
    SetBrightness,
    SetWiFi,
    SetCellularData,
    SetBluetooth,
    SkipBack,
    SetVolume,
    GenerateHash,
    Base64Encode,
    CalculateStatistics,
    RandomNumber,
    GetDeviceDetails,
    GetNetworkDetails,
    ShowAlert,
    ShowNotification,
    SetDoNotDisturb,
    RunScriptOverSSH
  },
  computed: {
    ...mapState({
      actions: state => state.actions,
      actionsUsed: state => state.actionsUsed
    })
  },
  methods: {
    ...mapMutations(["removeAction"]),
    ...mapMutations(["duplicateAction"]),
    removeActionLocal(action) {
      this.removeAction(action.id);
    },
    duplicateActionLocal(action) {
      this.duplicateAction(action);
    }
  }
};
</script>
