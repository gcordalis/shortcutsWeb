export const actions = [
  {
    icon: "",
    title: "Add to Reading List",
    name: "addToReadingList",
    description: "Adds URLs passed into the action to your reading list.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/safari.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "extension",
    title: "Add to Variable",
    name: "addToVariable",
    description: "Appends this action's input to the specified variable, creating the variable if it does not exist. This allows you to make a variable hold multiple items.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "wifi_tethering",
    title: "AirDrop",
    name: "airDrop",
    description: "Prompts to share the input via AirDrop.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Ask for Input",
    name: "ask",
    description: "Displays a dialogue prompting the user to enter a piece of information.",
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
    description: "Encodes or decodes the text or files using Base64 encoding.",
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
    description: "Performs a number operation on the input and returns the result.",
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
    description: "Calculates statistics on the numbers that are provided as input.",
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
    description: "Clears all the music in your Up Nextg queue. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/music.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Comment",
    name: "comment",
    description: "This action lets you explain how part of a shortcut works. When run, this action does nothing. This action passes input through as output.",
    titleColor: "background-color: rgb(246, 231, 198)",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: rgb(248, 242, 226)",
    text: ""
  },
  {
    icon: "input",
    title: "Continue Shortcut in App",
    name: "continueShortcutInApp",
    description: "Switches into the Shortcuts app and continues to the next action. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Correct Spelling",
    name: "correctSpelling",
    description: "Autocorrects the spelling of text passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Count",
    name: "count",
    description: "Counts the number of items, characters, words, sentences or lines passed as input.",
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
    description: "Shares the input with Notes",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/notes.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Date",
    name: "date",
    description: "Passes the specified date and time to the next action.",
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
    description: "Deletes the photos passed as input from the device's photo library. This action asks for confirmation before the deletion.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "language",
    title: "Detect Language with Microsoft",
    name: "detectLanguageWithMicrosoft",
    description: "Detects the language of the text provided as input.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Exit Shortcut",
    name: "exitShortcut",
    description: "Stops execution of the current shortcut and dismisses the shortcut onscreen. No more actions will be run after this action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Expand URL",
    name: "expandURL",
    description: "This action expands and cleans up URLs that have been shortened using a URL shortening service like TinyURL or Bit.ly.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "unarchive",
    title: "Extract Archive",
    name: "extractArchive",
    description: "Extracts files from the archive passsed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab and iso archives.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(121, 0, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Format Date",
    name: "formatDate",
    description: "Formats a date and time into text.",
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
    description: "Generates an MD5/SHA1 hash from the input.",
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
    description: "Returns any street addresses found in the output from the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "battery_full",
    title: "Get Battery Level",
    name: "getBatteryLevel",
    description: "Outputs the percentage of battery remaining as a number from 0 to 100.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "assignment_returned",
    title: "Get Clipboard",
    name: "getClipboard",
    description: "Passes the contents of the clipboard to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Contacts from Input",
    name: "getContactsFromInput",
    description: "Gets contacts from the result of the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/contacts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get Contents of URL",
    name: "getContentsOfUrl",
    description: "Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.",
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
    description: "Extracts the contents of the web pages passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/safari.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "trip_origin",
    title: "Get Current IP Address",
    name: "getCurrentIpAddress",
    description: "Returns the local or external IP address of the device.",
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
    description: "Retuns the song that is currently playing in the Music app, if any.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/music.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Get Dates from Input",
    name: "getDatesFromInput",
    description: "Returns any dates found in the output from the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Get Device Details",
    name: "getDeviceDetails",
    description: "Gets information about the current device.",
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
    description: "Makes a dictionary from the text passed as input. JSON (like {\"foo\": \"bar\"}), key-value pairs (like foo=bar&baz=biz) and XML-based plists are supported.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Get Dictionary Value",
    name: "getDictionaryValue",
    description: "Gets the value for the specified key in the dictionary passed into the action.",
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
    description: "Gets article details, including the body text, author, publish date and more, from every URL passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Email Addresses from Input",
    name: "getEmailAddressesFromInput",
    description: "Returns any email addresses found in the output from the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/mail.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "blur_linear",
    title: "Get Frames from Image",
    name: "getFramesFromImage",
    description: "Splits an animated GIF or a photo burst into individual frames.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(204, 40, 207); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get Headers of URL",
    name: "getHeadersOfURL",
    description: "Retrieves the HTTP headers of the URL passed as input using a HEAD request.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(32, 178, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "photo_library",
    title: "Get Images from Input",
    name: "getImagesFromInput",
    description: "Gets images from the result of the previous action. For example, this action can get the album art of a song, or all the images on a web page.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(2, 97, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Last Import",
    name: "getLastImport",
    description: "Gets the most recent photo import from the Photos app.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/photos.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "burst_mode",
    title: "Get Latest Bursts",
    name: "getLatestBursts",
    description: "Gets the most recent burst photos from the camera roll.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(204, 40, 207); color: #FFF",
    bodyColor: "background-color: #FFF",
    count: 1
  },
  {
    icon: "",
    title: "Get Latest Live Photos",
    name: "getLatestLivePhotos",
    description: "Gets the most recent Live Photos from the camera roll.",
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
    description: "Gets the most recent screenshots from the camera roll.",
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
    description: "Gets the most recent videos from the camera roll.",
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
    description: "Gets a public link to the file passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(121, 0, 254); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get Maps URL",
    name: "getMapsURL",
    description: "Creates a URL to search for the location, place or text that was passed into the action in a separate maps app.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Get My Shortcuts",
    name: "getMyShortcuts",
    description: "Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/shortcuts.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Get Name",
    name: "getName",
    description: "Returns the name of every item passed as input. Depending on the input, this could be a filename, the title of a website, the title of a calendar event, etc.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "sentiment_satisfied_alt",
    title: "Get Name of Emoji",
    name: "getNameOfEmoji",
    description: "Gets the name of emoji passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(242, 186, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "wifi",
    title: "Get Network Details",
    name: "getNetworkDetails",
    description: "Gets information about the currently connected networks.",
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
    description: "Returns any phone numbers found in the output from the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(11, 96, 253); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Get Text from Input",
    name: "getTextFromInput",
    description: "Returns text from the previous action's output. For example, this action can get the name of a photo or song, or the text of a web page.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Get Time Between Dates",
    name: "getTimeBetweenDates",
    description: "Subtracts the specified date from the date passed into the action. For example, this action could get the number of minutes from now until a calendar event passed in as input.",
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
    description: "Returns the type of every item passed as input. For example, if a URL is passed, this action will return \"URL\".",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Get URLs from Input",
    name: "getURLsFromInput",
    description: "Returns any links found in the output from the previous action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "extension",
    title: "Get Variable",
    name: "getVariable",
    description: "Gets the value of the specified variable and passes it to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "If",
    name: "conditional",
    description: "Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under \"Otherwise\" are run.",
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
    description: "Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under \"Otherwise\" are run.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "End If",
    name: "endIf",
    description: "Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under \"Otherwise\" are run.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "archive",
    title: "Make Archive",
    name: "makeArchive",
    description: "Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio or iso archives.",
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
    description: "Converts the rich text passed as input to Markdown text (comparable to Aaron Swartz's html2text script).",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "description",
    title: "Make Rich Text from HTML",
    name: "makeRichTextFromHTML",
    description: "Takes the inputted HTML and turns it into rich text, which can then be converted to other formats.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "description",
    title: "Make Rich Text from Markdown",
    name: "makeRichTextFromMarkdown",
    description: "Takes the inputted Markdown and turns it into rich text, which can then be converted to other formats.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "brush",
    title: "Markup",
    name: "markup",
    description: "Edits an image or PDF with Markup.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(255, 255, 255); color: #000",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Match Text",
    name: "matchText",
    description: "Searches text passed into the action for matches to a regular expression.",
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
    description: "This action does nothing and produces no output. It is useful to separate blocks of actions or to ensure that no input is passed to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Number",
    name: "number",
    description: "Passes a number to the next action.",
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
    description: "Opens the input as a PDF in Books.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/books.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "Open URLs",
    name: "openURLs",
    description: "Opens URLs passed into the action in Safari.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "pause",
    title: "Pause Music",
    name: "pauseMusic",
    description: "Pauses the currently playing music. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "volume_up",
    title: "Play Sound",
    name: "playSound",
    description: "Plays the audio file passed as input, or a default notification sound if no audio file was passed.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post On Facebook",
    name: "postOnFacebook",
    description: "Shares the input on Facebook",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/facebook.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post On Instagram",
    name: "postOnInstagram",
    description: "Opens the photo passed into this action in the Instagram app and copies the caption to the clipboard.",
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
    description: "Posts the content passed into the action to Tumblr.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/tumblr.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Post To Wordpress",
    name: "postToWordpress",
    description: "Posts the input to a WordPress blog as a new post or page.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/wordpress.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "print",
    title: "Print",
    name: "print",
    description: "Prints the input using AirPrint.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(151, 153, 154); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "remove_red_eye",
    title: "Quick Look",
    name: "quickLook",
    description: "Displays a preview of the input.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Random Number",
    name: "randomNumber",
    description: "Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.",
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
    description: "Removes all reminders passed into the action from the lists they are contained in.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/reminders.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Run Javascript on Web Page",
    name: "runJavascriptOnWebPage",
    description: "Runs JavaScript on a Safari web page passed in as input.",
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
    description: "Runs a script on a remote computer over SSH",
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
    description: "Run a shortcut from your shortcut.",
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
    description: "Scans a QR code or barcode using the camera, and returns the text/URL that is found.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Select Email Address",
    name: "selectEmailAddress",
    description: "Prompts to pick an email address from your contacts and passes the selection to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/mail.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "phone",
    title: "Select Phone Number",
    name: "selectPhoneNumber",
    description: "Prompts to pick a phone number from your contacts and passes the selection to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(11, 96, 253); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "airplanemode_active",
    title: "Set Airplane Mode",
    name: "setAirplaneMode",
    description: "Sets the device's Airplane Mode to on or off. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 149, 0); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "bluetooth",
    title: "Set Bluetooth",
    name: "setBluetooth",
    description: "Sets the device's Bluetooth to on or off. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "wb_sunny",
    title: "Set Brightness",
    name: "setBrightness",
    description: "Sets the device brightness. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(254, 44, 85); color: #FFF",
    bodyColor: "background-color: #FFF",
    brightness: 50
  },
  {
    icon: "settings",
    title: "Set Dictionary Value",
    name: "setDictionaryValue",
    description: "Sets a value in the dictionary passed into the action.",
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
    description: "Sets the device's Do Not Disturb on or off. This action passes input through as output.",
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
    description: "Sets the device's Low Power Mode to on or off. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings_input_antenna",
    title: "Set Mobile Data",
    name: "setCellularData",
    description: "Sets the device's Mobile Data to on or off. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(63, 215, 82); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "settings",
    title: "Set Name",
    name: "setName",
    description: "Sets the name of the item passed as input.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    dontIncludeFileExtension: false
  },
  {
    icon: "flash_on",
    title: "Set Torch",
    name: "setTorch",
    description: "Turns on or off the torch near the device's camera. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(4, 95, 254); color: #FFF",
    bodyColor: "background-color: #FFF",
    setting: "On",
    settingOptions: ["On", "Off", "Toggle"]
  },
  {
    icon: "extension",
    title: "Set Variable",
    name: "setVariable",
    description: "Sets the value of the specified variable to the input of this action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 116, 15); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "volume_up",
    title: "Set Volume",
    name: "setVolume",
    description: "Sets the system volume. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF",
    volume: 50
  },
  {
    icon: "wifi",
    title: "Set Wi-Fi",
    name: "setWiFi",
    description: "Sets the device's Wi-Fi to on or off.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    value: true
  },
  {
    icon: "present_to_all",
    title: "Share",
    name: "share",
    description: "Prompts to share the input.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(26, 133, 245); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "apps",
    title: "Share with Extensions",
    name: "shareWithExtensions",
    description: "Prompts to share the input using action extensions and sharing extensions provided by other apps.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(0, 0, 0); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "settings",
    title: "Show Alert",
    name: "showAlert",
    description: "Displays an alert with a title, a message and two buttons. If the user selects the OK button, the shortcut continues. The Cancel button stops the shortcut. This action passes input through as output.",
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
    description: "Shows the definition of the word passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(250, 42, 64); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "date_range",
    title: "Show in Calendar",
    name: "showInCalendar",
    description: "Shows the date or calendar event passed as input in the Calendar app.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(249, 36, 37); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Show in iTunes  Store",
    name: "showInItunesStore",
    description: "Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/itunes.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Show in Maps",
    name: "showInMaps",
    description: "Opens your choice of Maps, Google Maps or Waze, and searches for the location, place or text that was passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/maps.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "lens",
    title: "Show Notification",
    name: "showNotification",
    description: "Displays a local notification.",
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
    description: "Shows the specified text in Siri or in an alert. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "fast_rewind",
    title: "Skip Back",
    name: "skipBack",
    description: "Skips to the previous song in the current music queue. This action passes input through as output.",
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
    description: "Skips to the next song in the current music queue. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 15, 68); color: #FFF",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "notes",
    title: "Text",
    name: "text",
    description: "Passes the specified text to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(251, 195, 6); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "",
    title: "Trim Media",
    name: "trimMedia",
    description: "Presents a view allowing you to trim the media passed into the action.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/quicktime.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "",
    title: "Tweet",
    name: "tweet",
    description: "Tweets the input.",
    titleColor: "background-color: #F2F3F5",
    iconColor:
      "background-image: url(/static/appIcons/twitter.jpg); background-position: center; background-repeat: no-repeat; background-size: cover;",
    bodyColor: "background-color: #FFF"
  },
  {
    icon: "link",
    title: "URL",
    name: "url",
    description: "Passes the specified URL to the next action.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(25, 109, 242); color: #FFF",
    bodyColor: "background-color: #FFF",
    url: ""
  },
  {
    icon: "link",
    title: "URL Encode",
    name: "urlEncode",
    description: "Encodes or decodes text passed into the action to be suitable for inclusion in a URL by adding or removing per cent espcapes when appropriate.",
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
    description: "Vibrates the device for a short amount of time. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(248, 37, 37); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "category",
    title: "View Content Graph",
    name: "viewContentGraph",
    description: "Shows the results of the previous action in the Content Graph.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(41, 88, 212); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  },
  {
    icon: "settings",
    title: "Wait",
    name: "wait",
    description: "Waits for the specified number of seconds before continuing with the next action. This action passes input through as output.",
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
    description: "Pauses execution until you leave the Shortcuts app and return to it. This action might be useful after an action that switches apps in order to pause execution until you return to the Shortcuts app. This action passes input through as output.",
    titleColor: "background-color: #F2F3F5",
    iconColor: "background-color: rgb(118, 118, 123); color: #FFF",
    bodyColor: "background-color: #FFF",
    text: ""
  }
];

export default {
  actions
};
