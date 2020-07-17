"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tweet;

function tweet(tweet) {
  var twitterIntentURL = "https://twitter.com/intent/tweet?";
  var text = encodeURIComponent(tweet);
  var url = "".concat(twitterIntentURL, "text=").concat(text, "&related=somi_ssr");
  window.open(url, "Share on Twitter", "height=500, width=600");
}