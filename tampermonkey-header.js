module.exports = {
  headers: {
    name: "FUT NESTORSHOP",
    namespace: "http://tampermonkey.net/",
    version: "1.1.9",
    description: "FUT NESTORSHOP",
    author: "NESTOR",
    match: [
      "https://www.ea.com/*/fifa/ultimate-team/web-app/*",
      "https://www.ea.com/fifa/ultimate-team/web-app/*",
    ],
    grant: ["GM_xmlhttpRequest"],
    connect: ["ea.com", "ea2.com", "futbin.com", "discordapp.com"],
    require: [
      "NESTORSHOP.IR",
      "NESTORSHOP.IR",
    ],
    updateURL:
      "NESTORSHOP.IR",
    downloadURL:
      "NESTORSHOP.IR",
    noFrame: true,
  },
};
