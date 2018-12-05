const express = require("express");
const cors = require("cors");
const app = express();
const port = 8086;
const bodyParser = require("body-parser");
const shortcuts = require("shortcuts.js");
var fs = require("fs");
var qr = require("qr-image");

var serverUrl = "https://shortcutsweb.app";

const { buildShortcut, withVariables } = require("@joshfarrant/shortcuts-js");
const {
  addToVariable,
  ask,
  base64Encode,
  calculate,
  calculateStatistics,
  comment,
  conditional,
  continueShortcutInApp,
  count,
  exitShortcut,
  generateHash,
  getBatteryLevel,
  getContentsOfUrl,
  getCurrentIpAddress,
  getDeviceDetails,
  getDictionaryValue,
  getName,
  getNetworkDetails,
  getType,
  getVariable,
  nothing,
  number,
  openInBooks,
  pauseMusic,
  print,
  quickLook,
  randomNumber,
  runScriptOverSSH,
  runShortcut,
  setAirplaneMode,
  setBluetooth,
  setBrightness,
  setCellularData,
  setDoNotDisturb,
  setLowPowerMode,
  setName,
  setTorch,
  setVariable,
  setVolume,
  setWiFi,
  showAlert,
  showResult,
  showNotification,
  skipBack,
  skipForward,
  text,
  url,
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

    // Generating QR Code
    var shortcutQr = qr.image(
      "shortcuts://import-workflow?url=" +
        serverUrl +
        "/static/shortcuts/" +
        shortcutName +
        ".shortcut&name=" +
        req.body.shortcutName,
      { type: "svg" }
    );
    shortcutQr.pipe(
      require("fs").createWriteStream(
        "dist/static/shortcuts/qr/" + shortcutName + ".svg",
        console.log("Dist QR Saved")
      )
    );
    shortcutQr.pipe(
      require("fs").createWriteStream(
        "static/shortcuts/qr/" + shortcutName + ".svg",
        console.log("Static QR Saved")
      )
    );
  });

  res.send({
    shortcutsResult: {
      shortcutName: req.body.shortcutName,
      shortcutPath: "static/shortcuts/" + shortcutName + ".shortcut",
      qrPath: "static/shortcuts/qr/" + shortcutName + ".svg"
    }
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
        res.send("Error retrieving shortcut");
      });
  } else {
    res.status(422);
    res.send("You must provide a URL to the shortcut you would like to inspect");
  }
});

app.listen(process.env.PORT || 8086);
console.log("Shortcuts Web has started");

const actionMap = {
  addToVariable: action => addToVariable({ name: action.text }),
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
  comment: action => comment({ text: action.text }),
  continueShortcutInApp: action => continueShortcutInApp({}),
  count: action => count({ type: action.text }),
  exitShortcut: action => exitShortcut({}),
  generateHash: action => generateHash({ type: action.hash }),
  getBatteryLevel: action => getBatteryLevel({}),
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
  getCurrentIpAddress: action =>
    getCurrentIpAddress({
      address: action.source,
      type: action.type
    }),
  getDeviceDetails: action => getDeviceDetails({ detail: action.detail }),
  getDictionaryValue: action =>
    getDictionaryValue({ key: action.key, get: action.get }),
  getName: action => getName({}),
  getNetworkDetails: action =>
    getNetworkDetails({ network: action.network, attribute: action.get }),
  getType: action => getType({}),
  getVariable: action => getVariable({ variable: action.text }),
  if: action => console.log(action.name),
  otherwise: action => console.log(action.name),
  endIf: action => console.log(action.name),
  nothing: action => nothing({}),
  number: action => number({ number: parseInt(action.number) }),
  openInBooks: action => openInBooks({}),
  pauseMusic: action => pauseMusic({}),
  print: action => print({}),
  quickLook: action => quickLook({}),
  randomNumber: action =>
    randomNumber({
      minimum: parseInt(action.minimum),
      maximum: parseInt(action.maximum)
    }),
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
  setAirplaneMode: action => setAirplaneMode({ value: action.value }),
  setLowPowerMode: action => setLowPowerMode({ value: action.value }),
  setBluetooth: action => setBluetooth({ value: action.value }),
  setBrightness: action => {
    return setBrightness({ brightness: parseInt(action.brightness) });
  },
  setCellularData: action => setCellularData({ value: action.value }),
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
  setVariable: action => setVariable({ name: action.text }),
  setVolume: action => {
    return setVolume({ volume: parseInt(action.volume) });
  },
  setWiFi: action => setWiFi({ value: action.value }),
  showAlert: action =>
    showAlert({
      message: action.message,
      title: action.title,
      showCancelButton: action.showCancelButton
    }),
  showResult: action => showResult({ text: action.text }),
  showNotification: action =>
    showNotification({
      body: action.body,
      title: action.title,
      sound: action.sound
    }),
  skipBack: action => skipBack({ skipBackBehavior: action.text }),
  skipForward: action => skipForward({}),
  text: action => text({ text: action.text }),
  url: action => url({ url: action.url }),
  vibrateDevice: action => vibrateDevice({}),
  viewContentGraph: action => viewContentGraph({}),
  wait: action => wait({ time: parseInt(action.time) }),
  waitToReturn: action => waitToReturn({})
};
