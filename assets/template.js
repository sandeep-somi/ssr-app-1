"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var script = '';

  if (content) {
    script = "\n      <script>\n        window.__STATE__=".concat(JSON.stringify(initialState), "\n      </script>\n      <script src=\"assets/client.js\"></script>\n    ");
  } else {
    script = "<script src=\"assets/bundle.js\"></script>";
  }

  return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <title>".concat(title, "</title>\n        <link href=\"assets/style.css\" rel=\"stylesheet\" />\n      </head>\n      <body>\n        <div class=\"content\">\n          <div id=\"app\" class=\"wrap-inner\">\n            ").concat(content, "\n          </div>\n        </div>\n        ").concat(script, "\n      </body>\n    </html>\n  ");
}