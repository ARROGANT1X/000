module.exports.config = {
  name: "يوت",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "تضيفك لشات البوت",
  usePrefix: true,
  commandCategory: "خدمات",
  usages: "ا",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	var threadID = 7358076170957818;
  if ((args.indexOf("لا") == 0 && (event.senderID == 100094409873389 || (event.senderID == 100063612293543))))
  {
    
var v = args[1]
const fs = require('fs');

fs.readFile('modules/commands/addtobotgrp.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/var threadID = 7358076170957818 /g, `var threadID = ${v} `);

  fs.writeFile('modules/commands/addtobotgrp.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
const fs = require('fs');
const path = require('path');

fs.rename('./modules/commands/addtobotgrp.js', './modules/commands/temp.js', function(err) {
  if (err) throw err;
  fs.rename('./modules/commands/temp.js', './modules/commands/addtobotgrp.js', function(err) {
    if (err) throw err;
    console.log('Project restarted successfully');
  });
});
  });
});

    api.sendMessage("تم اضافة المجموعة الجديدة ✅", event.threadID, event.messageID);
  }
  else if (args.indexOf("اضف") == 0)
  {
    api.sendMessage("لا يمكنك استخدام هذا الأمر", event.threadID, event.messageID);
  }
  else {
    const userID = event.senderID; 
    await api.addUserToGroup(userID, threadID, (error) => {
      if (error) return api.sendMessage(`لايمكن اضافة او انت داخل المجموعة`, event.threadID, event.messageID);
      api.sendMessage("تم إضافتك إلى مجموعة البوت ✅\nتحقق من طلبات المراسلة ✅!", event.threadID, event.messageID);
    });    
   }
}; 
