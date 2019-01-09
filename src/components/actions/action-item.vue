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
              @click="duplicateActionBelowLocal(action)"
            >arrow_drop_down_circle</v-icon>
            <v-icon
              class="actionCloseIcon"
              @click="action.isVisible = !action.isVisible"
              v-if="action.isVisible"
            >remove_circle</v-icon>
            <v-icon
              class="actionCloseIcon"
              @click="action.isVisible = !action.isVisible"
              v-if="!action.isVisible"
            >add_circle</v-icon>
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
      <postOnInstagram :id="action.id" v-if="action.name === 'postOnInstagram'"/>
      <runJavascriptOnWebPage :id="action.id" v-if="action.name === 'runJavascriptOnWebPage'"/>
      <date :id="action.id" v-if="action.name === 'date'"/>
      <formatDate :id="action.id" v-if="action.name === 'formatDate'"/>
      <setDictionaryValue :id="action.id" v-if="action.name === 'setDictionaryValue'"/>
      <getLatestBursts :id="action.id" v-if="action.name === 'getLatestBursts'"/>
      <getLatestLivePhotos :id="action.id" v-if="action.name === 'getLatestLivePhotos'"/>
      <getLatestScreenshots :id="action.id" v-if="action.name === 'getLatestScreenshots'"/>
      <getLatestVideos :id="action.id" v-if="action.name === 'getLatestVideos'"/>
      <urlEncode :id="action.id" v-if="action.name === 'urlEncode'"/>
      <makeArchive :id="action.id" v-if="action.name === 'makeArchive'"/>
      <matchText :id="action.id" v-if="action.name === 'matchText'"/>
      <getTimeBetweenDates :id="action.id" v-if="action.name === 'getTimeBetweenDates'"/>
      <showInMaps :id="action.id" v-if="action.name === 'showInMaps'"/>
    </v-card-text>
  </v-card>
</template>

<script>
import AddToVariable from "@/components/actions/templates/addToVariable";
import Ask from "@/components/actions/templates/ask";
import Base64Encode from "@/components/actions/templates/base64Encode";
import Calculate from "@/components/actions/templates/calculate";
import CalculateStatistics from "@/components/actions/templates/calculateStatistics";
import Comment from "@/components/actions/templates/comment";
import Conditional from "@/components/actions/templates/conditional";
import Count from "@/components/actions/templates/count";
import Date from "@/components/actions/templates/date";
import FormatDate from "@/components/actions/templates/formatDate";
import GenerateHash from "@/components/actions/templates/generateHash";
import GetContentsOfUrl from "@/components/actions/templates/getContentsOfUrl";
import GetCurrentIpAddress from "@/components/actions/templates/getCurrentIpAddress";
import GetDeviceDetails from "@/components/actions/templates/getDeviceDetails";
import GetDictionaryValue from "@/components/actions/templates/getDictionaryValue";
import GetLatestBursts from "@/components/actions/templates/getLatestBursts";
import GetLatestLivePhotos from "@/components/actions/templates/getLatestLivePhotos";
import GetLatestScreenshots from "@/components/actions/templates/getLatestScreenshots";
import GetLatestVideos from "@/components/actions/templates/getLatestVideos";
import GetNetworkDetails from "@/components/actions/templates/getNetworkDetails";
import GetTimeBetweenDates from "@/components/actions/templates/getTimeBetweenDates";
import GetVariable from "@/components/actions/templates/getVariable";
import MakeArchive from "@/components/actions/templates/makeArchive";
import MatchText from "@/components/actions/templates/matchText";
import Number from "@/components/actions/templates/number";
import PostOnInstagram from "@/components/actions/templates/postOnInstagram";
import RandomNumber from "@/components/actions/templates/randomNumber";
import RunJavascriptOnWebPage from "@/components/actions/templates/runJavascriptOnWebPage";
import RunScriptOverSSH from "@/components/actions/templates/runScriptOverSSH";
import RunShortcut from "@/components/actions/templates/runShortcut";
import SetAirplaneMode from "@/components/actions/templates/setAirplaneMode";
import SetBluetooth from "@/components/actions/templates/setBluetooth";
import SetBrightness from "@/components/actions/templates/setBrightness";
import SetCellularData from "@/components/actions/templates/setCellularData";
import SetDictionaryValue from "@/components/actions/templates/setDictionaryValue";
import SetDoNotDisturb from "@/components/actions/templates/setDoNotDisturb";
import SetLowPowerMode from "@/components/actions/templates/setLowPowerMode";
import SetName from "@/components/actions/templates/setName";
import SetTorch from "@/components/actions/templates/setTorch";
import SetVariable from "@/components/actions/templates/setVariable";
import SetVolume from "@/components/actions/templates/setVolume";
import SetWiFi from "@/components/actions/templates/setWiFi";
import ShowAlert from "@/components/actions/templates/showAlert";
import ShowInMaps from "@/components/actions/templates/showInMaps";
import ShowNotification from "@/components/actions/templates/showNotification";
import ShowResult from "@/components/actions/templates/showResult";
import SkipBack from "@/components/actions/templates/skipBack";
import TextAction from "@/components/actions/templates/text";
import URL from "@/components/actions/templates/url";
import UrlEncode from "@/components/actions/templates/urlEncode";
import Wait from "@/components/actions/templates/wait";

import { mapState, mapMutations } from "vuex";

export default {
  name: "ActionItem",
  data() {
    return {};
  },
  props: ["action"],
  components: {
    AddToVariable,
    Ask,
    Base64Encode,
    Calculate,
    CalculateStatistics,
    Comment,
    Conditional,
    Count,
    Date,
    FormatDate,
    GenerateHash,
    GetContentsOfUrl,
    GetCurrentIpAddress,
    GetDeviceDetails,
    GetDictionaryValue,
    GetLatestBursts,
    GetLatestLivePhotos,
    GetLatestScreenshots,
    GetLatestVideos,
    GetNetworkDetails,
    GetTimeBetweenDates,
    GetVariable,
    MakeArchive,
    MatchText,
    Number,
    PostOnInstagram,
    RandomNumber,
    RunJavascriptOnWebPage,
    RunScriptOverSSH,
    RunShortcut,
    SetAirplaneMode,
    SetBluetooth,
    SetBrightness,
    SetCellularData,
    SetDictionaryValue,
    SetDoNotDisturb,
    SetLowPowerMode,
    SetName,
    SetTorch,
    SetVariable,
    SetVolume,
    SetWiFi,
    ShowAlert,
    ShowInMaps,
    ShowNotification,
    ShowResult,
    SkipBack,
    TextAction,
    URL,
    UrlEncode,
    Wait
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
    ...mapMutations(["duplicateActionBelow"]),
    removeActionLocal(action) {
      this.removeAction(action.id);
    },
    duplicateActionLocal(action) {
      this.duplicateAction(action);
    },
    duplicateActionBelowLocal(action) {
      this.duplicateActionBelow(action);
    }
  }
};
</script>
