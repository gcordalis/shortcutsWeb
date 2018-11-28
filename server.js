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
  calculate,
  comment,
  continueShortcutInApp,
  count,
  exitShortcut,
  getBatteryLevel,
  getContentsOfUrl,
  getDictionaryValue,
  getName,
  getType,
  getVariable,
  nothing,
  number,
  runShortcut,
  setAirplaneMode,
  setBrightness,
  setLowPowerMode,
  setName,
  setTorch,
  setVariable,
  showResult,
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

  req.body.actions.forEach(action => {
    actions.push(actionMap[action.name](action));
  });

  // **********************************************************************
  // *  This is for when color and glyph support is added to shortcuts-js *
  // **********************************************************************
  //
  // var shortcutColor = parseInt(req.body.shortcutColor);
  // var shortcutGlyph = parseInt(req.body.shortcutGlyph, 16);
  //
  // **********************************************************************

  const shortcut = buildShortcut(actions);
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
    // ************************************************************
    // * Uncomment this section when ready to test with live data *
    // ************************************************************
    // const id = shortcuts.idFromURL(req.body.url);
    // const shortcutDetails = [];
    // const metadataDetails = [];

    // shortcuts
    //   .getShortcutDetails(id)
    //   .then(shortcut => {
    //     shortcutDetails.push(shortcut);
    //     return shortcut.getMetadata();
    //   })
    //   .then(metadata => {
    //     metadataDetails.push(metadata);
    //     res.send({
    //       shortcut: shortcutDetails,
    //       metadata: metadataDetails
    //     });
    //   })
    //   .catch(error => {
    //     console.log(`${error.code}? How could this happen!`);
    //   });
    // ************************************************************

    const metadataDetails = [
      {
        actions: [
          {
            identifier: "is.workflow.actions.comment",
            parameters: {
              WFCommentActionText:
                "This section gets the current epoch time. It is required to get a list of your cards."
            }
          },
          {
            identifier: "is.workflow.actions.gettext",
            parameters: {
              UUID: "1BC4FC2A-176C-4F7B-97B2-CC0C49D38E55",
              WFTextActionText: "01/01/1970, 10:00:00 AM"
            }
          },
          {
            identifier: "is.workflow.actions.date",
            parameters: { UUID: "C097AB3A-E04A-4DEE-993A-B40040062C79" }
          },
          {
            identifier: "is.workflow.actions.gettimebetweendates",
            parameters: {
              UUID: "868EC07A-B798-44A1-8484-4CE67BB8B0BE",
              WFTimeUntilCustomDate: {
                Value: {
                  attachmentsByRange: {
                    "{0, 1}": {
                      OutputName: "Text",
                      OutputUUID: "1BC4FC2A-176C-4F7B-97B2-CC0C49D38E55",
                      Type: "ActionOutput"
                    }
                  },
                  string: "￼"
                },
                WFSerializationType: "WFTextTokenString"
              },
              WFTimeUntilReferenceDate: "Other",
              WFTimeUntilUnit: "Seconds"
            }
          },
          {
            identifier: "is.workflow.actions.comment",
            parameters: {
              WFCommentActionText:
                "Username and Password. Required to authenticate and get your Opal cards"
            }
          },
          {
            identifier: "is.workflow.actions.comment",
            parameters: { WFCommentActionText: "Username" }
          },
          {
            identifier: "is.workflow.actions.gettext",
            parameters: { UUID: "8CE6F4F0-4697-4583-8F95-6F2013E204BE" }
          },
          {
            identifier: "is.workflow.actions.comment",
            parameters: { WFCommentActionText: "Password" }
          },
          {
            identifier: "is.workflow.actions.gettext",
            parameters: { UUID: "BDF923CE-BD64-4C4A-82F1-3AE175CBAB9A" }
          },
          {
            identifier: "is.workflow.actions.url",
            parameters: {
              UUID: "934DC32B-9737-428C-9D93-A877CB1C8B65",
              WFURLActionURL:
                "https://www.opal.com.au/login/registeredUserUsernameAndPasswordLogin"
            }
          },
          {
            identifier: "is.workflow.actions.downloadurl",
            parameters: {
              Advanced: true,
              ShowHeaders: false,
              UUID: "689E6869-B8D6-4056-8FB8-BBE1B9D3D6A1",
              WFFormValues: {
                Value: {
                  WFDictionaryFieldValueItems: [
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: { attachmentsByRange: {}, string: "h_username" },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {
                            "{0, 1}": {
                              OutputName: "Text",
                              OutputUUID:
                                "8CE6F4F0-4697-4583-8F95-6F2013E204BE",
                              Type: "ActionOutput"
                            }
                          },
                          string: "￼"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    },
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: { attachmentsByRange: {}, string: "h_password" },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {
                            "{0, 1}": {
                              OutputName: "Text",
                              OutputUUID:
                                "BDF923CE-BD64-4C4A-82F1-3AE175CBAB9A",
                              Type: "ActionOutput"
                            }
                          },
                          string: "￼"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    }
                  ]
                },
                WFSerializationType: "WFDictionaryFieldValue"
              },
              WFHTTPBodyType: "Form",
              WFHTTPHeaders: {
                Value: {
                  WFDictionaryFieldValueItems: [
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: { attachmentsByRange: {}, string: "Accept" },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {},
                          string:
                            "application/json, text/javascript, */*; q=0.01"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    },
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: {
                          attachmentsByRange: {},
                          string: "X-Requested-With"
                        },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {},
                          string: "XMLHttpRequest"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    },
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: {
                          attachmentsByRange: {},
                          string: "Content-Type"
                        },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {},
                          string: "application/x-www-form-urlencoded"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    },
                    {
                      WFItemType: 0,
                      WFKey: {
                        Value: { attachmentsByRange: {}, string: "Origin" },
                        WFSerializationType: "WFTextTokenString"
                      },
                      WFValue: {
                        Value: {
                          attachmentsByRange: {},
                          string: "https://www.opal.com.au"
                        },
                        WFSerializationType: "WFTextTokenString"
                      }
                    }
                  ]
                },
                WFSerializationType: "WFDictionaryFieldValue"
              },
              WFHTTPMethod: "POST",
              WFJSONValues: {
                Value: { WFDictionaryFieldValueItems: [] },
                WFSerializationType: "WFDictionaryFieldValue"
              }
            }
          },
          {
            identifier: "is.workflow.actions.url",
            parameters: {
              UUID: "8862261F-EF4C-4A10-A97D-50306E42706D",
              WFURLActionURL: {
                Value: {
                  attachmentsByRange: {
                    "{61, 1}": {
                      OutputName: "Time Between Dates",
                      OutputUUID: "868EC07A-B798-44A1-8484-4CE67BB8B0BE",
                      Type: "ActionOutput"
                    }
                  },
                  string:
                    "https://www.opal.com.au/registered/getJsonCardDetailsArray?_=￼"
                },
                WFSerializationType: "WFTextTokenString"
              }
            }
          },
          {
            identifier: "is.workflow.actions.downloadurl",
            parameters: {
              Advanced: false,
              ShowHeaders: false,
              UUID: "B735AF8E-5907-4E46-B70E-8F4C890757A0"
            }
          },
          {
            identifier: "is.workflow.actions.repeat.each",
            parameters: {
              GroupingIdentifier: "4DB8F9EE-86EF-4B5B-9298-4B06216FF3B5",
              WFControlFlowMode: 0
            }
          },
          {
            identifier: "is.workflow.actions.getvalueforkey",
            parameters: {
              UUID: "1B7B7DDF-84B5-498F-943E-0FBF840F4076",
              WFDictionaryKey: "cardNickName"
            }
          },
          {
            identifier: "is.workflow.actions.getvariable",
            parameters: {
              WFVariable: {
                Value: { Type: "Variable", VariableName: "Repeat Item" },
                WFSerializationType: "WFTextTokenAttachment"
              }
            }
          },
          {
            identifier: "is.workflow.actions.getvalueforkey",
            parameters: {
              UUID: "D7AD72A3-0A2A-44FB-9E8B-AC5669B0263E",
              WFDictionaryKey: "cardBalanceInDollars"
            }
          },
          {
            identifier: "is.workflow.actions.gettext",
            parameters: {
              UUID: "996309B3-35CC-4CE2-AADB-AC6854A0BB1E",
              WFTextActionText: {
                Value: {
                  attachmentsByRange: {
                    "{0, 1}": {
                      OutputName: "Dictionary Value",
                      OutputUUID: "1B7B7DDF-84B5-498F-943E-0FBF840F4076",
                      Type: "ActionOutput"
                    },
                    "{3, 1}": {
                      OutputName: "Dictionary Value",
                      OutputUUID: "D7AD72A3-0A2A-44FB-9E8B-AC5669B0263E",
                      Type: "ActionOutput"
                    }
                  },
                  string: "￼: ￼"
                },
                WFSerializationType: "WFTextTokenString"
              }
            }
          },
          {
            identifier: "is.workflow.actions.appendvariable",
            parameters: { WFVariableName: "cardDetails" }
          },
          {
            identifier: "is.workflow.actions.repeat.each",
            parameters: {
              GroupingIdentifier: "4DB8F9EE-86EF-4B5B-9298-4B06216FF3B5",
              UUID: "368C0F02-77AD-49F9-A813-F86C511E48C5",
              WFControlFlowMode: 2
            }
          },
          {
            identifier: "is.workflow.actions.alert",
            parameters: {
              WFAlertActionCancelButtonShown: false,
              WFAlertActionMessage: {
                Value: {
                  attachmentsByRange: {
                    "{0, 1}": { Type: "Variable", VariableName: "cardDetails" }
                  },
                  string: "￼"
                },
                WFSerializationType: "WFTextTokenString"
              },
              WFAlertActionTitle: "Opal Balance"
            }
          }
        ],
        client: { minimumVersion: 411, release: "2.1.1", version: 736 },
        icon: {
          color: -2873601,
          glyph: 59856,
          imageData: { data: [], type: "Buffer" }
        },
        importQuestions: [
          {
            actionIndex: 6,
            category: "Parameter",
            parameterKey: "WFTextActionText",
            text: "Opal Username"
          },
          {
            actionIndex: 8,
            category: "Parameter",
            parameterKey: "WFTextActionText",
            text: "Opal Password"
          }
        ],
        inputContentItemClasses: [
          "WFAppStoreAppContentItem",
          "WFArticleContentItem",
          "WFContactContentItem",
          "WFDateContentItem",
          "WFEmailAddressContentItem",
          "WFGenericFileContentItem",
          "WFImageContentItem",
          "WFiTunesProductContentItem",
          "WFLocationContentItem",
          "WFDCMapsLinkContentItem",
          "WFAVAssetContentItem",
          "WFPDFContentItem",
          "WFPhoneNumberContentItem",
          "WFRichTextContentItem",
          "WFSafariWebPageContentItem",
          "WFStringContentItem",
          "WFURLContentItem"
        ],
        types: ["WatchKit"]
      }
    ];
    const shortcutDetails = [
      {
        creationDate: "2018-11-26T22:25:10.873Z",
        downloadURL:
          "https://cvws.icloud-content.com/B/AZ1DJoAYeI_vXtJeKrKmv2yD7zST/${f}?o=AkhF1DbhwfQtHEZHRsPIdhrGXX5pPOSSdB7WT5LPV-A7_4GA_3ImuXUixfNv5aUBig\u0026v=1\u0026x=3\u0026a=B4tzRdOBK9pgiyd-E_ejEa-cCr6dA5Z0RwEAAANadEc\u0026e=1543278089\u0026k=_\u0026fl=\u0026r=c53cc9fb-59ae-44c2-8f08-b58802141afe-1\u0026ckc=com.apple.shortcuts\u0026ckz=_defaultZone\u0026p=33\u0026s=t5Xwq1eKeTZF9qKFkgqXAmoDpDc",
        icon: {
          color: 4292093695,
          downloadURL:
            "https://cvws.icloud-content.com/B/ATVn7I3dxbkT8qPaRj0-5VPpzwNC/${f}?o=AroCpgc_kttxEH6LRLaL5gzvKmQQSCrH_5k_q1yx89xV5YiFhzC-mhnU7J4_dthFuA\u0026v=1\u0026x=3\u0026a=B6M0PrBeuLLvCY96q7qxZN-90E6JA5Z0RwEAAANadEc\u0026e=1543278089\u0026k=_\u0026fl=\u0026r=c53cc9fb-59ae-44c2-8f08-b58802141afe-1\u0026ckc=com.apple.shortcuts\u0026ckz=_defaultZone\u0026p=33\u0026s=ZtY75aWQC3IGUF05xt0riQO_zYo",
          glyph: 59856
        },
        id: "29c46ce343f546c8ae5d8972b5fffedc",
        modificationDate: "2018-11-26T22:25:10.873Z",
        name: "Opal Card Balance",
        response: {
          created: {
            deviceID:
              "D2A065EF0F9127D4F1E491F7C92C09B4CFAD1DB02A383566256B6B699DB94A90",
            timestamp: 1543271110873,
            userRecordName: "_6a48254f2065afa9a910796a232c8391"
          },
          deleted: false,
          fields: {
            icon: {
              type: "ASSETID",
              value: {
                downloadURL:
                  "https://cvws.icloud-content.com/B/ATVn7I3dxbkT8qPaRj0-5VPpzwNC/${f}?o=AroCpgc_kttxEH6LRLaL5gzvKmQQSCrH_5k_q1yx89xV5YiFhzC-mhnU7J4_dthFuA\u0026v=1\u0026x=3\u0026a=B6M0PrBeuLLvCY96q7qxZN-90E6JA5Z0RwEAAANadEc\u0026e=1543278089\u0026k=_\u0026fl=\u0026r=c53cc9fb-59ae-44c2-8f08-b58802141afe-1\u0026ckc=com.apple.shortcuts\u0026ckz=_defaultZone\u0026p=33\u0026s=ZtY75aWQC3IGUF05xt0riQO_zYo",
                fileChecksum: "ATVn7I3dxbkT8qPaRj0+5VPpzwNC",
                size: 164159
              }
            },
            icon_color: { type: "NUMBER_INT64", value: 4292093695 },
            icon_glyph: { type: "NUMBER_INT64", value: 59856 },
            name: { type: "STRING", value: "Opal Card Balance" },
            shortcut: {
              type: "ASSETID",
              value: {
                downloadURL:
                  "https://cvws.icloud-content.com/B/AZ1DJoAYeI_vXtJeKrKmv2yD7zST/${f}?o=AkhF1DbhwfQtHEZHRsPIdhrGXX5pPOSSdB7WT5LPV-A7_4GA_3ImuXUixfNv5aUBig\u0026v=1\u0026x=3\u0026a=B4tzRdOBK9pgiyd-E_ejEa-cCr6dA5Z0RwEAAANadEc\u0026e=1543278089\u0026k=_\u0026fl=\u0026r=c53cc9fb-59ae-44c2-8f08-b58802141afe-1\u0026ckc=com.apple.shortcuts\u0026ckz=_defaultZone\u0026p=33\u0026s=t5Xwq1eKeTZF9qKFkgqXAmoDpDc",
                fileChecksum: "AZ1DJoAYeI/vXtJeKrKmv2yD7zST",
                size: 4918
              }
            }
          },
          modified: {
            deviceID:
              "D2A065EF0F9127D4F1E491F7C92C09B4CFAD1DB02A383566256B6B699DB94A90",
            timestamp: 1543271110873,
            userRecordName: "_6a48254f2065afa9a910796a232c8391"
          },
          pluginFields: {},
          recordChangeTag: "joyvru82",
          recordName: "29C46CE3-43F5-46C8-AE5D-8972B5FFFEDC",
          recordType: "SharedShortcut"
        }
      }
    ];
    res.send({
      shortcut: shortcutDetails,
      metadata: metadataDetails,
      downloadURL: shortcutDetails[0].downloadURL.replace(
        "${f}",
        shortcutDetails[0].name + ".shortcut"
      )
    });
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
  calculate: action =>
    calculate({
      operand: parseInt(action.operand),
      operation: action.operation
    }),
  comment: action => comment({ text: action.text }),
  continueShortcutInApp: action => continueShortcutInApp({}),
  count: action => count({ type: action.text }),
  exitShortcut: action => exitShortcut({}),
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
  getDictionaryValue: action => getDictionaryValue({ key: action.key, get: action.get }),
  getName: action => getName({}),
  getType: action => getType({}),
  getVariable: action => getVariable({ variable: action.text }),
  nothing: action => nothing({}),
  number: action => number({ number: parseInt(action.number) }),
  runShortcut: action => runShortcut({ name: action.nameField, show: action.show }),
  setAirplaneMode: action => setAirplaneMode({ value: action.value }),
  setLowPowerMode: action => setLowPowerMode({ value: action.value }),
  setBrightness: action => setBrightness({ brightness: parseInt(action.brightness) }),
  setName: action =>
    setName({
      name: action.text,
      dontIncludeFileExtension: action.dontIncludeFileExtension
    }),
  setTorch: action => setTorch({ setting: action.setting }),
  setVariable: action => setVariable({ name: action.text }),
  showResult: action => showResult({ text: action.text }),
  text: action => text({ text: action.text }),
  url: action => url({ url: action.url }),
  vibrateDevice: action => vibrateDevice({}),
  viewContentGraph: action => viewContentGraph({}),
  wait: action => wait({ time: parseInt(action.time) }),
  waitToReturn: action => waitToReturn({})
};
