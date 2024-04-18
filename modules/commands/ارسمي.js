const axios = require("axios");

module.exports.config = {
  name: "ارسمي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عبدالرحمن",
  description: "رسم صوره من نص",
  commandCategory: "صور",
  usages: "ا",
  cooldowns: 14
};

module.exports.run = async ({ api, event, args, Users, Threads }) => {


if(args[0] === "موديلات") {
  return api.sendMessage(`
  1- أنمي مرسوم بالطلاء
2- أنمي
3- أنمي مرسوم
4- أنمي لطيف
5- أنمي ناعم
6- إعلان أنمي من الخمسينيات
7- أنمي عتيق
8- بدون أسلوب
9- مانغا
10- أنمي عتيق مضيء
11- رسم زيتي
12- رسم زيتي - واقعية
13- رسم زيتي - قديم
14- صورة عفوية
15- سينمائي
16- رسم رقمي
17- فن تصوري
18- شخصية ديزني ثلاثية الأبعاد
19- شخصية ديزني ثنائية الأبعاد
20- رسم ديزني بالقلم
21- رسم تصوري
22- فن الرسم بالألوان الزيتية
23- صورة احترافية
24- رسم فانتازيا
25- منظر طبيعي فانتازيا
26- صورة شخصية فانتازيا
27- لافتة ميناي 50s
28- كوميكس قديم
29- كوميكس فرانكو بلجيكي
30- كوميكس تين تين
31- عصور وسطى
32- رسم بيكسل
33- تمثال لطيف
34- إيموجي ثلاثي الأبعاد
35- رسم توضيحي
36- رسم توضيحي مسطح
37- ألوان مائية
38- صورة 1990s
39- صورة 1980s
40- صورة 1970s
41- صورة 1960s
42- صورة 1950s
43- صورة 1940s
44- صورة 1930s
45- صورة 1920s
46- فن بلبل القديم
47- بوكيمون ثلاثي الأبعاد
48- بوكيمون مرسوم بالطلاء
49- بوكيمون ثنائي الأبعاد
50- خريطة عالم فانتازيا
51- خريطة مدينة فانتازيا
52- خريطة العالم القديم
53- أيقونة ثلاثية الأبعاد
54- أيقونة بأسلوب مسطح
55- شعار بأسلوب مسطح
56- أيقونة فن اللعبة
57- أيقونة رسم رقمي
58- أيقونة فن التصور
59- أيقونة ثلاثية الأبعاد لطيفة
60- رسم بالطباشير
61- قلم رصاص
62- تصميم وشم
63- فن يوغيوه
64- ياباني تقليدي
65- رسم نيهونغا
66- تحريك طيني
67- فروي - مرسوم بالطلاء
68- فروي - مرسوم
69- فروي - سينمائي
70- رسوم متحركة
  `, event.threadID )
}



  const txt = args.join(" ");
  const prompt = txt.split("-")[0];
  if (!prompt) {
    return api.sendMessage("اكتب شي يشكب لارسمه", event.threadID);
  }

  let modelNumber = "1";


  const modelIndex = args.findIndex(arg => arg === '-');
  if (modelIndex !== -1 && args.length > modelIndex + 1) {
    const modelArg = args[modelIndex + 1];
    if (modelArg >= 1 && modelArg <= 70) {
      modelNumber = modelArg;
    }
  }



api.setMessageReaction("🪄", event.messageID, (err) => {}, true);


  let vb = {
    prompt: prompt,
    styn: modelNumber,
    apikey: "caera3mtk"
  };
  const res = await axios.post("https://app-caera-aa41803ef847.herokuapp.com/caera", vb);


  let hh = res.data.url;
  let st = res.data.tsty;
  let rr = [];
  for (kk of hh) {
    let strm = await axios.get(kk, {
      responseType: "stream"
    });
    rr.push(strm.data)
  }
  api.sendMessage({
    body: `تفضل\nستايل : ${st}`,
    attachment: rr
  }, event.threadID)
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
};
