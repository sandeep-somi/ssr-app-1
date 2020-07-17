export default function tweet(tweet) {
  let twitterIntentURL = "https://twitter.com/intent/tweet?";
  let text = encodeURIComponent(tweet);
  let url = `${twitterIntentURL}text=${text}&related=somi_ssr`;
  window.open(url, `Share on Twitter`,"height=500, width=600");
}
