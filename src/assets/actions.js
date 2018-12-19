export const actions = [
  {
    icon: "",
    title: "Add to Reading List",
    name: "addToReadingList",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/safari.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "extension",
    title: "Add to Variable",
    name: "addToVariable",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "wifi_tethering",
    title: "AirDrop",
    name: "airDrop",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
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
    defaultAnswer: "",
    inputOptions: ["Text", "Number", "URL", "Date"]
  },
  {
    icon: "settings",
    title: "Base64 Encode",
    name: "base64Encode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    lineBreakOptions: ["None", "Every 64 Characters", "Every 76 Characters"],
    encodeOptions: ["Encode", "Decode"],
    encodeMode: "Encode",
    lineBreakMode: "Every 76 Characters"
  },
  {
    icon: "",
    title: "Calculate",
    name: "calculate",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    operand: 42,
    operation: "+",
    operationOptions: [
      "Modulus",
      "x^2",
      "x^3",
      "x^y",
      "e^x",
      "10^x",
      "ln(x)",
      "log(x)",
      "√x",
      "∛x",
      "x!",
      "sin(x)",
      "cos(x)",
      "tan(x)",
      "abs(x)"
    ],
    scientificOperation: ""
  },
  {
    icon: "",
    title: "Calculate Statistics",
    name: "calculateStatistics",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    operation: "Average",
    operationOptions: [
      "Average",
      "Minimum",
      "Maximum",
      "Sum",
      "Median",
      "Mode",
      "Range",
      "Standard Deviation"
    ]
  },
  {
    icon: "",
    title: "Clear Up Next",
    name: "clearUpNext",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/music.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
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
    icon: "notes",
    title: "Correct Spelling",
    name: "correctSpelling",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Count",
    name: "count",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    countOptions: ["Items", "Characters", "Words", "Sentences", "Lines"]
  },
  {
    icon: "",
    title: "Create Note",
    name: "createNote",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/notes.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Date",
    name: "date",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    useOptions: ["Current Date", "Specified Date"],
    use: "Current Date",
    date: ""
  },
  {
    icon: "",
    title: "Delete Photos",
    name: "deletePhotos",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "language",
    title: "Detect Language with Microsoft",
    name: "detectLanguageWithMicrosoft",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
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
    icon: "link",
    title: "Expand URL",
    name: "expandURL",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "unarchive",
    title: "Extract Archive",
    name: "extractArchive",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(121, 0, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Format Date",
    name: "formatDate",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    dateFormatOptions: [
      "None",
      "Short",
      "Medium",
      "Long",
      "Relative",
      "RFC 2822",
      "ISO 8601",
      "Custom"
    ],
    dateFormat: "Short",
    timeFormatOptions: ["None", "Short", "Medium", "Long", "Relative"],
    timeFormat: "Short",
    alternativeFormatOptions: ["Short", "Medium", "Long"],
    alternativeFormat: "Medium",
    includeISO8601Time: false,
    formatString: "EEE, dd MMM yyyy HH:mm:ss Z"
  },
  {
    icon: "settings",
    title: "Generate Hash",
    name: "generateHash",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    hashOptions: ["MD5", "SHA1", "SHA256", "SHA512"],
    hash: "MD5"
  },
  {
    icon: "",
    title: "Get Addresses from Input",
    name: "getAddressesFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
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
    icon: "assignment_returned",
    title: "Get Clipboard",
    name: "getClipboard",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Contacts from Input",
    name: "getContactsFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/contacts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
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
    icon: "",
    title: "Get Contents of Web Page",
    name: "getContentsOfWebPage",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/safari.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "trip_origin",
    title: "Get Current IP Address",
    name: "getCurrentIpAddress",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    type: "IPv4",
    typeOptions: ["IPv4", "IPv6"],
    source: "External",
    sourceOptions: ["External", "Internal"]
  },
  {
    icon: "",
    title: "Get Current Song",
    name: "getCurrentSong",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/music.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Get Dates from Input",
    name: "getDatesFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Get Device Details",
    name: "getDeviceDetails",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    detail: "Average",
    detailOptions: [
      "Device Name",
      "Device Model",
      "System Version",
      "Screen Width",
      "Screen Height",
      "Current Volume",
      "Current Brightness"
    ]
  },
  {
    icon: "settings",
    title: "Get Dictionary from Input",
    name: "getDictionaryFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
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
    icon: "assignment",
    title: "Get Diffbot Article from Web Page",
    name: "getDiffbotArticleFromWebPage",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Email Addresses from Input",
    name: "getEmailAddressesFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/mail.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "blur_linear",
    title: "Get Frames from Image",
    name: "getFramesFromImage",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(204, 40, 207); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get Headers of URL",
    name: "getHeadersOfURL",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "photo_library",
    title: "Get Images from Input",
    name: "getImagesFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(2, 97, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Last Import",
    name: "getLastImport",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "burst_mode",
    title: "Get Latest Bursts",
    name: "getLatestBursts",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(204, 40, 207); color: #FFF",
    bodyColor: "background-color: #FFF",
    count: 1
  },
  {
    icon: "",
    title: "Get Latest Live Photos",
    name: "getLatestLivePhotos",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/livePhoto.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    count: 1
  },
  {
    icon: "",
    title: "Get Latest Screenshots",
    name: "getLatestScreenshots",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    count: 1
  },
  {
    icon: "",
    title: "Get Latest Videos",
    name: "getLatestVideos",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    count: 1
  },
  {
    icon: "description",
    title: "Get Link to File",
    name: "getLinkToFile",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(121, 0, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Maps URL",
    name: "getMapsURL",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get My Shortcuts",
    name: "getMyShortcuts",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/shortcuts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
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
    icon: "sentiment_satisfied_alt",
    title: "Get Name of Emoji",
    name: "getNameOfEmoji",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(242, 186, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "wifi",
    title: "Get Network Details",
    name: "getNetworkDetails",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    network: "Wi-Fi",
    networkOptions: ["Wi-Fi", "Mobile Data"],
    get: "Network Name",
    getOptions: ["Network Name", "BSSID"]
  },
  {
    icon: "phone",
    title: "Get Phone Numbers from Input",
    name: "getPhoneNumbersFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(11, 96, 253); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Get Text from Input",
    name: "getTextFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Get Time Between Dates",
    name: "getTimeBetweenDates",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    unitOptions: [
      "Total Time",
      "Seconds",
      "Minutes",
      "Hours",
      "Days",
      "Weeks",
      "Months",
      "Years"
    ],
    unit: "Hours",
    time: "Right Now",
    timeOptions: ["Right Now", "Other"],
    date: ""
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
    icon: "link",
    title: "Get URLs from Input",
    name: "getURLsFromInput",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
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
    title: "If",
    name: "conditional",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    inputOptions: ["Equals", "Is Greater Than", "Is Less Than", "Contains"],
    input: "Contains",
    value: ""
  },
  {
    icon: "settings",
    title: "Otherwise",
    name: "otherwise",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "End If",
    name: "endIf",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "archive",
    title: "Make Archive",
    name: "makeArchive",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(121, 0, 254); color: #FFF",
    bodyColor: "background-color: #FFF",
    format: "zip",
    formatOptions: [
      "zip",
      "tar.gz",
      "tar.bz2",
      "tar.xz",
      "tar",
      "gz",
      "cpio",
      "iso"
    ],
    archiveName: ""
  },
  {
    icon: "description",
    title: "Make Markdown from Rich Text",
    name: "makeMarkdownFromRichText",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "description",
    title: "Make Rich Text from HTML",
    name: "makeRichTextFromHTML",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "description",
    title: "Make Rich Text from Markdown",
    name: "makeRichTextFromMarkdown",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "brush",
    title: "Markup",
    name: "markup",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(255, 255, 255); color: #000",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Match Text",
    name: "matchText",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    pattern: "[0-9a-zA-Z]",
    caseSensitive: true
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
    icon: "",
    title: "Number",
    name: "number",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    number: 0
  },
  {
    icon: "",
    title: "Open in Books",
    name: "openInBooks",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/books.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Open URLs",
    name: "openURLs",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "pause",
    title: "Pause Music",
    name: "pauseMusic",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "volume_up",
    title: "Play Sound",
    name: "playSound",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post On Facebook",
    name: "postOnFacebook",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/facebook.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post On Instagram",
    name: "postOnInstagram",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/instagram.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    caption: ""
  },
  {
    icon: "",
    title: "Post To Tumblr",
    name: "postToTumblr",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/tumblr.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post To Wordpress",
    name: "postToWordpress",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/wordpress.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "print",
    title: "Print",
    name: "print",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(151, 153, 154); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "remove_red_eye",
    title: "Quick Look",
    name: "quickLook",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Random Number",
    name: "randomNumber",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/calculator.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    minimum: 0,
    maximum: 100
  },
  {
    icon: "",
    title: "Remove Reminders",
    name: "removeReminders",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/reminders.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Run Javascript on Web Page",
    name: "runJavascriptOnWebPage",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/safari.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    code: ""
  },
  {
    icon: "settings",
    title: "Run Script Over SSH",
    name: "runScriptOverSSH",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    host: "",
    password: "",
    port: 22,
    script: "",
    user: ""
  },
  {
    icon: "",
    title: "Run Shortcut",
    name: "runShortcut",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/shortcuts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF",
    nameField: "",
    show: true
  },
  {
    icon: "grid_on",
    title: "Scan QR/Barcode",
    name: "scanQROrBarcode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Select Email Address",
    name: "selectEmailAddress",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/mail.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "phone",
    title: "Select Phone Number",
    name: "selectPhoneNumber",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(11, 96, 253); color: #FFF",
    bodyColor: "background-color: #FFF"
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
  {
    icon: "bluetooth",
    title: "Set Bluetooth",
    name: "setBluetooth",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "wb_sunny",
    title: "Set Brightness",
    name: "setBrightness",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 44, 85); color: #FFF",
    bodyColor: "background-color: #FFF",
    brightness: 50
  },
  {
    icon: "settings",
    title: "Set Dictionary Value",
    name: "setDictionaryValue",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    key: "",
    value: ""
  },
  {
    icon: "brightness_3",
    title: "Set Do Not Disturb",
    name: "setDoNotDisturb",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-color: rgb(67, 59, 205); color: #FFF; transform: rotate(180deg)",
    bodyColor: "background-color: #FFF",
    value: false,
    untilOptions: ["Turned Off", "Time", "I Leave", "Event Ends"],
    until: "Turned Off",
    time: ""
  },
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
    icon: "settings_input_antenna",
    title: "Set Mobile Data",
    name: "setCellularData",
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
    setting: "On",
    settingOptions: ["On", "Off", "Toggle"]
  },
  // {
  //   icon: "extension",
  //   title: "Set Variable",
  //   name: "setVariable",
  //   titleColor: "background-color: #F2F3F5",
  //   iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
  //   bodyColor: "background-color: #FFF"
  // },
  {
    icon: "volume_up",
    title: "Set Volume",
    name: "setVolume",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF",
    volume: 50
  },
  {
    icon: "wifi",
    title: "Set Wi-Fi",
    name: "setWiFi",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "present_to_all",
    title: "Share",
    name: "share",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "apps",
    title: "Share with Extensions",
    name: "shareWithExtensions",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(0, 0, 0); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Show Alert",
    name: "showAlert",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    message: "Do you want to continue?",
    showCancelButton: true
  },
  {
    icon: "font_download",
    title: "Show Definition",
    name: "showDefinition",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Show in Calendar",
    name: "showInCalendar",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Show in iTunes  Store",
    name: "showInItunesStore",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/itunes.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Show in Maps",
    name: "showInMaps",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "lens",
    title: "Show Notification",
    name: "showNotification",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 37, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    body: "Hello World",
    sound: true
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
    icon: "fast_rewind",
    title: "Skip Back",
    name: "skipBack",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: "",
    options: ["Beginning", "Previous Song"]
  },
  {
    icon: "fast_forward",
    title: "Skip Forward",
    name: "skipForward",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
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
    icon: "",
    title: "Trim Media",
    name: "trimMedia",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/quicktime.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Tweet",
    name: "tweet",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/twitter.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
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
    icon: "link",
    title: "URL Encode",
    name: "urlEncode",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    encodeMode: "Encode",
    encodeModeOptions: ["Encode", "Decode"]
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
