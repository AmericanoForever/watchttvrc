function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.menus.create({
  id: "watch-me",
  title: "WATCHTTV",
  contexts: ["link"]
}, onCreated);


browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "watch-me":
      if (info.linkUrl.startsWith("https://www.twitch.tv/")) {
        const name = info.linkUrl.substring(22);
        if (name) {
          browser.tabs.create({
            url: "https://americanoforever.github.io/watchttv/?" + name
          });
        }
      }
      break;
    default:
      break;
  }
});