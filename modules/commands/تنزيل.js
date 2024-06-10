const axios = require("axios");

module.exports.config = {
    name: "at",
    version: "1.0.0",
    role: 3,
    credits: "S H A D Y",
    description: "",
    commandCategory: "الأدمن",
    usages: "",
    cooldowns: 0,
};

module.exports.run = function ({ event, api, args }) {};

module.exports.handleEvent = async function ({ event, api, global }) {
    const { body, threadID } = event;
    if (
        body &&
        (body.startsWith("https://youtu") || body.startsWith("https://music.youtube.com"))
    ) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭──«(»──𝒀𝑶𝑼𝑻𝑼𝑩𝑬──«)»──╮\n⇜ ༈ تم رصد فيديو YouTube 󰂆\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    } else if (body && body.startsWith("https://www.instagram.com")) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭─«(»──𝑰𝑵𝑺𝑻𝑨𝑮𝑹𝑨𝑴──«)»─╮\n⇜ ༈ تم رصد فيديو Instagram 󰂆\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    } else if (body && body.startsWith("https://www.facebook.com/")) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭─«(»──𝑭𝑨𝑪𝑬𝑩𝑶𝑶𝑲──«)»─╮\n⇜ ༈ تم رصد فيديو facebook 󰟤\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    } else if (
        body &&
        (body.startsWith("https://vt.tiktok.com/") || body.startsWith("https://vm.tiktok.com/"))
    ) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭─«(»───𝑻𝑰𝑲𝑻𝑶𝑲───«)»─╮\n⇜ ༈ تم رصد فيديو TikTok 📱\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    } else if (
        body &&
        (body.startsWith("https://pin.it/") || body.startsWith("https://www.pinterest.com/"))
    ) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭─«(»──𝑷𝑰𝑵𝑻𝑬𝑹𝑬𝑺𝑻──«)»─╮\n⇜ ༈ تم رصد فيديو Pinterest 󰟯\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    } else if (
        body &&
        (body.startsWith("https://imgur.com/") || body.startsWith("https://i.imgur.com/"))
    ) {
        api.setMessageReaction("❔", event.messageID, (err) => {}, true);
        api.sendMessage(
            `╭─«(»───𝑰𝑴𝑮𝑼𝑹───«)»─╮\n⇜ ༈ تم رصد فيديو Imgur 󰦐\n————————————————\n •قم بالرد بــ "تحميل" اذا كنت تريد تحميله.\n————————————————`,
            threadID,
            (err, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    link: body,
                    type: "do",
                });
            },
            event.messageID
        );
    }
};

module.exports.handleReply = async function ({ event, handleReply, api, global }) {
    const { type, link, messageID } = handleReply;
    const { body } = event;
    const args = body.split(" ");

    if (type === "do") {
        if (["تحميل"].includes(args[0])) {
            await api.unsendMessage(messageID);
            api.setMessageReaction("⚙️", event.messageID, (err) => {}, true);

            try {
                const attachment = await global.utils.getStreamFromURL(`https://app-alld-4e6d840874be.herokuapp.com/api/caera/aute?link=${encodeURIComponent(link)}`);
                api.sendMessage(
                    {
                        body: "༈「تـم تـحـمـيـل الـفـيـديـو」 ✅ ༈",
                        attachment
                    },
                    event.threadID,
                    (err, info) => {
                        api.setMessageReaction("✅", event.messageID, (err) => {}, true);
                    }
                );
            } catch (error) {
                api.sendMessage(
                    "حدث خطأ أثناء محاولة تحميل الفيديو. يرجى المحاولة مرة أخرى لاحقاً.",
                    event.threadID,
                    event.messageID
                );
                console.error(error);
            }
        }
    }
};
