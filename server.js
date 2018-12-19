const express = require("express");
const cors = require("cors");
const app = express();
const port = 8086;
const bodyParser = require("body-parser");
const shortcuts = require("shortcuts.js");
var fs = require("fs");
var qr = require("qr-image");

var serverUrl = "https://shortcutsweb.app";

const {
  buildShortcut,
  variable,
  withVariables
} = require("@joshfarrant/shortcuts-js");
const {
  addToReadingList,
  addToVariable,
  airDrop,
  ask,
  base64Encode,
  calculate,
  calculateStatistics,
  clearUpNext,
  comment,
  conditional,
  continueShortcutInApp,
  correctSpelling,
  count,
  createNote,
  date,
  deletePhotos,
  detectLanguageWithMicrosoft,
  exitShortcut,
  expandURL,
  extractArchive,
  formatDate,
  generateHash,
  getAddressesFromInput,
  getBatteryLevel,
  getClipboard,
  getContactsFromInput,
  getContentsOfUrl,
  getContentsOfWebPage,
  getCurrentIpAddress,
  getCurrentSong,
  getDatesFromInput,
  getDeviceDetails,
  getDictionaryValue,
  getDictionaryFromInput,
  getDiffbotArticleFromWebPage,
  getEmailAddressesFromInput,
  getFramesFromImage,
  getHeadersOfURL,
  getImagesFromInput,
  getLastImport,
  getLatestBursts,
  getLatestLivePhotos,
  getLatestScreenshots,
  getLatestVideos,
  getLinkToFile,
  getMapsURL,
  getMyShortcuts,
  getName,
  getNameOfEmoji,
  getNetworkDetails,
  getPhoneNumbersFromInput,
  getTextFromInput,
  getTimeBetweenDates,
  getType,
  getURLsFromInput,
  getVariable,
  makeArchive,
  makeMarkdownFromRichText,
  makeRichTextFromHTML,
  makeRichTextFromMarkdown,
  markup,
  matchText,
  nothing,
  number,
  openInBooks,
  openURLs,
  pauseMusic,
  playSound,
  postOnFacebook,
  postOnInstagram,
  postToTumblr,
  postToWordpress,
  print,
  quickLook,
  randomNumber,
  removeReminders,
  runJavascriptOnWebPage,
  runScriptOverSSH,
  runShortcut,
  scanQROrBarcode,
  selectEmailAddress,
  selectPhoneNumber,
  setAirplaneMode,
  setBluetooth,
  setBrightness,
  setCellularData,
  setDictionaryValue,
  setDoNotDisturb,
  setLowPowerMode,
  setName,
  setTorch,
  setVariable,
  setVolume,
  setWiFi,
  share,
  shareWithExtensions,
  showAlert,
  showDefinition,
  showInCalendar,
  showInItunesStore,
  showInMaps,
  showNotification,
  showResult,
  skipBack,
  skipForward,
  text,
  trimMedia,
  tweet,
  url,
  urlEncode,
  vibrateDevice,
  viewContentGraph,
  wait,
  waitToReturn
} = require("@joshfarrant/shortcuts-js/actions");

app.use(express.static(__dirname + "/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/createShortcut", (req, res) => {
  const actions = [];
  var shortcutName = req.body.shortcutName.replace(/\s/g, "");

  if (!req.body || !req.body.actions || !req.body.actions.length > 0) {
    return res.end("Error");
  }

  const ifTrueActions = [];
  const ifFalseActions = [];
  var ifLoop = "";
  var ifValueString = "";
  var ifValueInt = 0;

  req.body.actions.forEach(action => {
    // Check if ifLoop is set. If it is not "if" or "otherwise" then we aren't adding actions to an if statement.
    // We need to check if the action is "if" or "otherwise" to start/continue an active if statement.
    if (ifLoop !== "if" && ifLoop !== "otherwise") {
      if (action.name === "conditional") {
        ifLoop = "if";
        ifInput = action.input;
        if (ifInput === "Contains" || ifInput === "Equals") {
          ifValueString = action.value;
        } else {
          ifValueInt = parseInt(action.value);
        }
        // ifValue = parseInt(action.value);
      } else if (action.name === "otherwise") {
        ifLoop = "otherwise";
      } else if (action.name === "endIf") {
        ifLoop = "";
      } else {
        actions.push(actionMap[action.name](action));
      }
    } else if (ifLoop === "if") {
      if (action.name === "otherwise") {
        ifLoop = "otherwise";
      } else {
        ifTrueActions.push(actionMap[action.name](action));
      }
    } else if (ifLoop === "otherwise") {
      if (action.name === "endIf") {
        if (ifInput === "Contains" || ifInput === "Equals") {
          var ifValue = ifValueString;
        } else {
          var ifValue = ifValueInt;
        }
        actions.push(
          conditional({
            ifTrue: ifTrueActions,
            ifFalse: ifFalseActions,
            input: ifInput,
            value: ifValue
          })
        );
        ifLoop = "";
        // Add the if statement actions to 'actions'
      } else {
        ifFalseActions.push(actionMap[action.name](action));
      }
    }
  });

  // Custom icon glyph and color
  var shortcutColor = parseInt(req.body.shortcutColor);
  var shortcutGlyph = parseInt(req.body.shortcutGlyph, 16);

  var options = {
    icon: {
      color: shortcutColor,
      glyph: shortcutGlyph
    }
  };

  const shortcut = buildShortcut(actions, options);
  var shortcutPath = "dist/static/shortcuts/" + shortcutName + ".shortcut";

  fs.writeFile(shortcutPath, shortcut, err => {
    if (err) {
      console.error("Something went wrong :(", err);
      return res.end("Error saving shortcut");
    }

    // Generating QR Code as base64 png
    var shortcutQr = Buffer.from(
      qr.imageSync(
        "shortcuts://import-workflow?url=" +
<<<<<<< HEAD
        serverUrl +
        "/static/shortcuts/" +
        shortcutName +
        ".shortcut&name=" +
        req.body.shortcutName,
=======
          serverUrl +
          "/static/shortcuts/" +
          shortcutName +
          ".shortcut&name=" +
          req.body.shortcutName,
>>>>>>> Added 63 new actions and re-added support for add to/get/set variable. Further work on shortcuts inspector and preliminary work for "what's new".
        {
          type: "png"
        }
      )
    ).toString("base64");
    res.send({
      shortcutsResult: {
        shortcutName: req.body.shortcutName,
        shortcutPath: "static/shortcuts/" + shortcutName + ".shortcut",
        qrPath: "data: image/png;base64, " + shortcutQr
      }
    });
  });
});

app.get("/inspectShortcut", (req, res) => {
  if (req.query.url) {
    const id = shortcuts.idFromURL(req.query.url);

    shortcuts
      .getShortcutDetails(id)
      .then(shortcut => {
        res.redirect(
          shortcut.downloadURL.replace("${f}", shortcut.name + ".shortcut")
        );
      })
      .catch(error => {
        console.log(`${error.code}? How could this happen!`);

        res.status(500);
        res.send("Error retrieving shortcut");
      });
  } else {
    res.status(422);
    res.send(
      "You must provide a URL to the shortcut you would like to inspect"
    );
  }
});

app.post("/inspectShortcut", (req, res) => {
  if (req.query.url) {
    const id = shortcuts.idFromURL(req.query.url);

    shortcuts
      .getShortcutDetails(id)
      .then(shortcut => {
        res.send({
          url: shortcut.downloadURL.replace("${f}", shortcut.name + ".shortcut")
        });
      })
      .catch(error => {
        console.log(`${error.code}? How could this happen!`);
      });
  } else if (!req.body || !req.body.url) {
    return res.end("Error");
  } else {
    const id = shortcuts.idFromURL(req.body.url);
    const shortcutDetails = [];
    const metadataDetails = [];

    shortcuts
      .getShortcutDetails(id)
      .then(shortcut => {
        shortcutDetails.push(shortcut);
        return shortcut.getMetadata();
      })
      .then(metadata => {
        metadataDetails.push(metadata);
        res.send({
          shortcut: shortcutDetails,
          metadata: metadataDetails,
          downloadURL: shortcutDetails[0].downloadURL.replace(
            "${f}",
            shortcutDetails[0].name + ".shortcut"
          ),
          iconURL: shortcutDetails[0].icon.downloadURL.replace(
            "${f}",
            shortcutDetails[0].name + ".png"
          )
        });
      })
      .catch(error => {
        console.log(`${error.code}? How could this happen!`);
      });
  }
});

app.listen(process.env.PORT || 8086);
console.log("Shortcuts Web has started");

const actionMap = {
  addToVariable: action => addToVariable({ variable: variable(action.text) }),
  addToReadingList: action => addToReadingList({}),
  airDrop: action => airDrop({}),
  ask: action =>
    ask({
      inputType: action.inputType,
      defaultAnswer: action.defaultAnswer,
      question: action.text
    }),
  base64Encode: action =>
    base64Encode({
      encodeMode: action.encodeMode,
      lineBreakMode: action.lineBreakMode
    }),
  calculate: action =>
    calculate({
      operand: parseInt(action.operand),
      operation: action.operation,
      scientificOperation: action.scientificOperation
    }),
  calculateStatistics: action =>
    calculateStatistics({
      operation: action.operation
    }),
  clearUpNext: action => clearUpNext({}),
  comment: action => comment({ text: action.text }),
  continueShortcutInApp: action => continueShortcutInApp({}),
  correctSpelling: action => correctSpelling({}),
  count: action => count({ type: action.text }),
  createNote: action => createNote({}),
  date: action => date({ date: action.date, use: action.use }),
  deletePhotos: action => deletePhotos({}),
  detectLanguageWithMicrosoft: action => detectLanguageWithMicrosoft({}),
  exitShortcut: action => exitShortcut({}),
  expandURL: action => expandURL({}),
  extractArchive: action => extractArchive({}),
  formatDate: action =>
    formatDate({
      dateFormat: action.dateFormat,
      timeFormat: action.timeFormat,
      alternativeFormat: action.alternativeFormat,
      includeISO8601Time: action.includeISO8601Time,
      formatString: action.formatString
    }),
  generateHash: action => generateHash({ type: action.hash }),
  getAddressesFromInput: action => getAddressesFromInput({}),
  getBatteryLevel: action => getBatteryLevel({}),
  getClipboard: action => getClipboard({}),
  getContactsFromInput: action => getContactsFromInput({}),
  getContentsOfUrl: action => {
    const headers = {};
    action.headers.forEach(header => {
      headers[header.key] = header.value;
    });
    return getContentsOfUrl({
      headers,
      method: action.method,
      requestBodyType: action.requestBodyType,
      requestBody: action.requestBody
    });
  },
  getContentsOfWebPage: action => getContentsOfWebPage({}),
  getCurrentIpAddress: action =>
    getCurrentIpAddress({
      address: action.source,
      type: action.type
    }),
  getCurrentLocation: action => getCurrentLocation({}),
  getCurrentSong: action => getCurrentSong({}),
  getDatesFromInput: action => getDatesFromInput({}),
  getDeviceDetails: action => getDeviceDetails({ detail: action.detail }),
  getDictionaryFromInput: action => getDictionaryFromInput({}),
  getDictionaryValue: action =>
    getDictionaryValue({ key: action.key, get: action.get }),
  getDiffbotArticleFromWebPage: action => getDiffbotArticleFromWebPage({}),
  getEmailAddressesFromInput: action => getEmailAddressesFromInput({}),
  getFramesFromImage: action => getFramesFromImage({}),
  getHeadersOfURL: action => getHeadersOfURL({}),
  getImagesFromInput: action => getImagesFromInput({}),
  getLastImport: action => getLastImport({}),
  getLatestBursts: action => getLatestBursts({ count: parseInt(action.count) }),
  getLatestLivePhotos: action =>
    getLatestLivePhotos({ count: parseInt(action.count) }),
  getLatestScreenshots: action =>
    getLatestScreenshots({ count: parseInt(action.count) }),
  getLatestVideos: action => getLatestVideos({ count: parseInt(action.count) }),
  getLinkToFile: action => getLinkToFile({}),
  getMapsURL: action => getMapsURL({}),
  getMyShortcuts: action => getMyShortcuts({}),
  getName: action => getName({}),
  getNameOfEmoji: action => getNameOfEmoji({}),
  getNetworkDetails: action =>
    getNetworkDetails({ network: action.network, attribute: action.get }),
  getPhoneNumbersFromInput: action => getPhoneNumbersFromInput({}),
  getTextFromInput: action => getTextFromInput({}),
  getTimeBetweenDates: action =>
    getTimeBetweenDates({ unit: action.unit, date: action.date }),
  getType: action => getType({}),
  getURLsFromInput: action => getURLsFromInput({}),
  getVariable: action => getVariable({ variable: variable(action.text) }),
  if: action => console.log(action.name),
  otherwise: action => console.log(action.name),
  endIf: action => console.log(action.name),
  makeArchive: action =>
    makeArchive({ name: action.archiveName, format: action.format }),
  makeMarkdownFromRichText: action => makeMarkdownFromRichText({}),
  makeRichTextFromHTML: action => makeRichTextFromHTML({}),
  makeRichTextFromMarkdown: action => makeRichTextFromMarkdown({}),
  markup: action => markup({}),
  matchText: action =>
    matchText({ pattern: action.pattern, caseSensitive: action.caseSensitive }),
  nothing: action => nothing({}),
  number: action => number({ number: parseInt(action.number) }),
  openInBooks: action => openInBooks({}),
  openURLs: action => openURLs({}),
  pauseMusic: action => pauseMusic({}),
  playSound: action => playSound({}),
  postOnFacebook: action => postOnFacebook({}),
  postOnInstagram: action => postOnInstagram({ caption: action.caption }),
  postToTumblr: action => postToTumblr({}),
  postToWordpress: action => postToWordpress({}),
  print: action => print({}),
  quickLook: action => quickLook({}),
  randomNumber: action =>
    randomNumber({
      minimum: parseInt(action.minimum),
      maximum: parseInt(action.maximum)
    }),
  removeReminders: action => removeReminders({}),
  runJavascriptOnWebPage: action =>
    runJavascriptOnWebPage({ text: action.code }),
  runScriptOverSSH: action =>
    runScriptOverSSH({
      host: action.host,
      password: action.password,
      port: parseInt(action.port),
      user: action.user,
      script: action.script
    }),
  runShortcut: action =>
    runShortcut({ name: action.nameField, show: action.show }),
  scanQROrBarcode: action => scanQROrBarcode({}),
  selectEmailAddress: action => selectEmailAddress({}),
  selectPhoneNumber: action => selectPhoneNumber({}),
  setAirplaneMode: action => setAirplaneMode({ value: action.value }),
  setLowPowerMode: action => setLowPowerMode({ value: action.value }),
  setBluetooth: action => setBluetooth({ value: action.value }),
  setBrightness: action => {
    return setBrightness({ brightness: parseInt(action.brightness) });
  },
  setCellularData: action => setCellularData({ value: action.value }),
  setDictionaryValue: action =>
    setDictionaryValue({
      key: action.key,
      value: action.value
    }),
  setDoNotDisturb: action =>
    setDoNotDisturb({
      value: action.value,
      until: action.until,
      time: action.time
    }),
  setName: action =>
    setName({
      name: action.text,
      dontIncludeFileExtension: action.dontIncludeFileExtension
    }),
  setTorch: action => setTorch({ setting: action.setting }),
  setVariable: action => setVariable({ variable: variable(action.text) }),
  setVolume: action => {
    return setVolume({ volume: parseInt(action.volume) });
  },
  setWiFi: action => setWiFi({ value: action.value }),
  share: action => share({}),
  shareWithExtensions: action => shareWithExtensions({}),
  showAlert: action =>
    showAlert({
      message: action.message,
      title: action.title,
      showCancelButton: action.showCancelButton
    }),
  showDefinition: action => showDefinition({}),
  showInCalendar: action => showInCalendar({}),
  showInItunesStore: action => showInItunesStore({}),
  showInMaps: action => showInMaps({}),
  showNotification: action =>
    showNotification({
      body: action.body,
      title: action.title,
      sound: action.sound
    }),
  showResult: action => showResult({ text: action.text }),
  skipBack: action => skipBack({ skipBackBehavior: action.text }),
  skipForward: action => skipForward({}),
  text: action => text({ text: action.text }),
  trimMedia: action => trimMedia({}),
  tweet: action => tweet({}),
  url: action => url({ url: action.url }),
  urlEncode: action => urlEncode({ encodeMode: action.encodeMode }),
  vibrateDevice: action => vibrateDevice({}),
  viewContentGraph: action => viewContentGraph({}),
  wait: action => wait({ time: parseInt(action.time) }),
  waitToReturn: action => waitToReturn({})
};
