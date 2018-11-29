export const actions = [
  {
    icon: "extension",
    title: "Add to Variable",
    name: "addToVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Ask for Input",
    name: "ask",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    inputType: "Text",
    defaultAnswer: ""
  },
  {
    icon: "dialpad",
    title: "Calculate",
    name: "calculate",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)",
    bodyColor: "background-color: #FFF",
    operand: 0,
    operation: ""
  },
  {
    icon: "notes",
    title: "Comment",
    name: "comment",
    titleColor: "background-color: rgb(246, 231, 198)",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: rgb(248, 242, 226)",
    text: ""
  },
  {
    icon: "input",
    title: "Continue Shortcut in App",
    name: "continueShortcutInApp",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "dialpad",
    title: "Count",
    name: "count",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)",
    bodyColor: "background-color: #FFF",
    countOptions: ["Items", "Characters", "Words", "Sentences", "Lines"]
  },
  {
    icon: "settings",
    title: "Exit Shortcut",
    name: "exitShortcut",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "battery_full",
    title: "Get Battery Level",
    name: "getBatteryLevel",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get Contents of URL",
    name: "getContentsOfUrl",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    headers: [{ key: "", value: "" }],
    headersVisible: false,
    method: "GET",
    methodOptions: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    requestBodyType: "",
    requestBody: {},
    requestOptions: ["JSON", "Form", "File"]
  },
  {
    icon: "settings",
    title: "Get Dictionary Value",
    name: "getDictionaryValue",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    getOptions: ["Value", "All Keys", "All Values"],
    get: "Value",
    key: ""
  },
  {
    icon: "settings",
    title: "Get Name",
    name: "getName",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Get Type",
    name: "getType",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "extension",
    title: "Get Variable",
    name: "getVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Nothing",
    name: "nothing",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "dialpad",
    title: "Number",
    name: "number",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)",
    bodyColor: "background-color: #FFF",
    number: 0
  },
  {
    icon: "",
    title: "Run Shortcut",
    name: "runShortcut",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/shortcuts.png); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    nameField: "",
    show: true
  },
  {
    icon: "airplanemode_active",
    title: "Set Airplane Mode",
    name: "setAirplaneMode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 149, 0); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  // {
  //   icon: "wb_sunny",
  //   title: "Set Brightness",
  //   name: "setBrightness",
  //   titleColor: "background-color: #F2F3F5",
  //   iconColor: "background-color: rgb(254, 44, 85); color: #FFF",
  //   bodyColor: "background-color: #FFF",
  //   brightness: 50
  // },
  {
    icon: "battery_full",
    title: "Set Low Power Mode",
    name: "setLowPowerMode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings",
    title: "Set Name",
    name: "setName",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    dontIncludeFileExtension: false
  },
  {
    icon: "flash_on",
    title: "Set Torch",
    name: "setTorch",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(4, 95, 254); color: #FFF",
    bodyColor: "background-color: #FFF",
    setting: "on"
  },
  {
    icon: "extension",
    title: "Set Variable",
    name: "setVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Show Result",
    name: "showResult",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "notes",
    title: "Text",
    name: "text",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "link",
    title: "URL",
    name: "url",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    url: ""
  },
  {
    icon: "lens",
    title: "Vibrate Device",
    name: "vibrateDevice",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 37, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "category",
    title: "View Content Graph",
    name: "viewContentGraph",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(41, 88, 212); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "settings",
    title: "Wait",
    name: "wait",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    time: 1
  },
  {
    icon: "settings",
    title: "Wait to Return",
    name: "waitToReturn",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  }
];

export default {
  actions
};

// Actions to be added later
