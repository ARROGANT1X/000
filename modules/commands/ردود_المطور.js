module.exports.config = {
  name: "ردود_المطور",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "البوت سوف يرد إذا تم ذكر المالك أو البوت عن طريق المنشن ",
  commandCategory: "المطور",
  usages: "",
  usePrefix:false,
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100094409873389"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["حسنا ساعلم مطوري ارجو الانتظار ⌚🔮🚬"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
      }
