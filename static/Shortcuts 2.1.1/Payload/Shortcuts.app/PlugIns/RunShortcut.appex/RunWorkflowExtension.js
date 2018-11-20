// Keep these constants in sync with WFRunJavaScriptOnWebPageAction.m
const WFAdditionalArgumentsKey = "extraArguments";
const WFUserScriptStringKey = "WFJavaScriptToRun";
const WFUserScriptResultKey = "userResult";
const WFSuccessKey = "success";
const WFExceptionKey = "exception";

var WorkflowActionExtensionClass = function() { };

function getSelectionHTML() {
    var html = "";
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            html = container.innerHTML;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
            html = document.selection.createRange().htmlText;
        }
    }
    return html;
}

function getDocumentHTML() {
    if (document.documentElement == null)
        return "";
    
    var doctypeNode = document.doctype;
    if (doctypeNode === null)
        return document.documentElement.outerHTML;
    
    var doctypeString = "<!DOCTYPE " + doctypeNode.name + (doctypeNode.publicId ? ' PUBLIC "' + doctypeNode.publicId + '"' : '') + (!doctypeNode.publicId && doctypeNode.systemId ? ' SYSTEM' : '') + (doctypeNode.systemId ? ' "' + doctypeNode.systemId + '"' : '') + '>';
    return (doctypeString + '\n' + document.documentElement.outerHTML);
}

WorkflowActionExtensionClass.prototype = {
    completionFunction: null,

    callCompletionFunctionWithExtras: function(ranUserScript, scriptResultAsString, exception) {
        var documentInfo = {
            "URL": document.URL,
            "title": document.title,
            "document": getDocumentHTML(),
            "selection": getSelectionHTML(),
            "selectionText": document.getSelection().toString()
        };

        if (ranUserScript) {
            documentInfo[WFUserScriptResultKey] = scriptResultAsString;
            documentInfo[WFSuccessKey] = true;

            if (exception) {
                documentInfo[WFSuccessKey] = false;
                // Make sure that the exception has a toString function, otherwise calling it will throw an exception.
                var exceptionString;
                if (exception.toString && typeof(exception.toString) === "function") {
                    exceptionString = exception.toString();
                } else {
                    exceptionString = "An unknown error occurred";
                }
                documentInfo[WFExceptionKey] = exceptionString;
            }
        }

        this.completionFunction(documentInfo);
    },
    run: function(arguments) {
        // Save `arguments.completionFunction` to a more global scope, which is needed to be accessed from `new Function()`.
        this.completionFunction = arguments.completionFunction;

        // If the native code has a user-created script to run on the webpage, it's contained in `arguments[WFAdditionalArgumentsKey][WFUserScriptStringKey]`.
        var extraArguments = arguments[WFAdditionalArgumentsKey];
        if (extraArguments) {
            // A user can type anything in, so ensure we catch any possible errors that are thrown.
            try {
                var userScriptAsStringLiteral = extraArguments[WFUserScriptStringKey] || "";
                var userScriptAsFunction = new Function("completion", userScriptAsStringLiteral);
                var userResult = userScriptAsFunction(function(result) {
                    var stringResult = JSON.stringify(result);
                    ExtensionPreprocessingJS.callCompletionFunctionWithExtras(true, stringResult, null);
                });
            } catch (e) {
                console.error("Exception thrown running user's JavaScript: " + e);
                ExtensionPreprocessingJS.callCompletionFunctionWithExtras(true, undefined, e);
            }
        } else {
            // Pass the baseURI of the webpage to the extension.
            this.callCompletionFunctionWithExtras(false);
        }
    }
};

// The JavaScript file must contain a global object named "ExtensionPreprocessingJS".
var ExtensionPreprocessingJS = new WorkflowActionExtensionClass;
