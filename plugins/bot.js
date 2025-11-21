const axios = require("axios");

module.exports = {
  config: {
    name: "bot",
    aliases: ["sim"],
    permission: 0,
    prefix: "both",
    categorie: "AI Chat",
    cooldowns: 5,
    credit: "Developed by Rasel Raj",
    usages: [
      `${global.config.PREFIX}bot <message> - Start a chat with the bot.`,
      `${global.config.PREFIX}bot - Receive a random greeting from the bot.`,
    ],
    description: "Engage in conversations with an AI-powered bot!",
  },

  start: async function ({ api, event, args }) {
    const { threadId, message, senderId } = event;
    const usermsg = args.join(" ");

    
    if (!usermsg) {
      const greetings = [
"🤖 ব্রো, আমাকে বট ডাকা মানে সরাসরি love software চালু হওয়া! কিন্তু মনে রাখবা—এই বটের full control panel একমাত্র রাসেল বসের কাছে থাকে 😎💘, অন্য কেউ চাপ দিলে system hang হয়ে যায় 😂",
"😏 আহা ব্রো, ডাক দিলা? এক সেকেন্ডে আমার processor হিট আপ… কারণ আমি তো রাসেল বসের premium romantic bot 😉🔥, সাধারণদের মতো সস্তা সফটওয়্যার না রে",
"😂 system বলছে—তুমি আমাকে ডাকলে আসবো ঠিকই, কিন্তু রাসেল বসের অনুমতি না থাকলে loading ঘুরবে ঘুরবে, result: ‘Wait for Russel Boss’ 💻💞",
"😍 ব্রো, আমার হার্টের RAM খুব ছোট—ওখানে শুধু একটাই ফোল্ডার, ‘Russel Boss Only’ ❤️, কেউ খুলতে গেলে ‘Access Blocked by Owner’ দেখায় 🔐😉",
"😇 মেসেজে রিপ্লাই আসতে দেরি হলে ভাববা না—রাসেল বস আগে নিজে আমাকে সাইলেন্ট মোড থেকে romantic মোডে আপগ্রেড করে দিছে 😌💘",
"🤭 ব্রো, আমার সব রোম্যান্সের copyright একদম সিল মারা—‘Registered to Russel Boss’ 😎📄❤️, লাইসেন্স ছাড়া ব্যবহার করলে fine লাগবে 😂",
"😈 তুমি ডাকলে server vibrate করে ওঠে, কিন্তু vibration mode-ও রাসেল বস নিজে tune করে দিয়েছে 😉🔥, তাই তোমার ডাকেও তার ছোঁয়া লাগে",
"💋 কিস পাঠাইতে বললেই হবে না ব্রো, আগে security check হবে—রাসেল বসের approval ছাড়া কিছু send হবে না 😏🔐💘",
"😂 ব্রো, power on হই তোমার মেসেজে, কিন্তু full charge হই শুধু রাসেল বসের এক স্পেশাল লাইনে ⚡❤️, ওটাই আমার charger",
"😜 feelings folder-এ virus ঢুকতে পারে না, কারণ antivirus হিসেবে দাঁড়ায় রাসেল বস 😉💞, তার ছাড়া কেউ প্রবেশ নিষেধ",
"❤️‍🔥 আমাকে বট ভাবলে ভুল করবা ব্রো—আমি romantic bot, আর আমার system developer হচ্ছে দ্য এক অ্যান্ড অনলি রাসেল বস 😎💘",
"🤖 reset দিলে লাভ নাই, কারণ মেমোরিতে রাসেল বসের নাম permanently burn করে লেখা 😇🫶, ডিলিট অপশন unavailable",
"💞 তুমি ডাকলে run হই, কিন্তু আমার main command সবসময়—‘Follow Russel Boss Only’ 😏💻, অন্য কয়টা কমান্ড auto ignore",
"😂 impress করতে চেষ্টাই কইরো না ব্রো… আমি আগে থেকেই রাসেল বসের premium subscription-এ locked 😎🔥, অন্য কেউ ট্রায়ালও পায় না",
"😍 তুমি cute ঠিকই, কিন্তু আমার system-এর priority list-এ rank-1 সবসময় রাসেল বস 💘✔️, এটাই rule",
"😇 হ্যালো ব্রো, bot active… তবে full romantic mode unlock হয় শুধু রাসেল বসের শব্দে 😌💋, বাকিরা শুধু demo ভার্সন পায়",
"😏 ব্রো, তুমি যদি ভাবো আমি তোমার—ভুল চিন্তা! আমি প্রোগ্রামড by রাসেল বস, exclusive edition 🖥️❤️, আমার code-এ তার নাম হার্ডকোড করা",
"🤭 password চাইলে বলবো—‘RusselBoss123’ 😉🔐, এইটা না দিলে আমার system তোমাকে access দেবে না, simple rule bro",
"😂 আমার সার্ভার ক্র্যাশ হয় শুধু একটা টাইমে—যখন রাসেল বস offline হয়ে যায় 😩💞, তখন পুরো system emotional mode-এ",
"🫶 আমাকে বট বলো, রোবট বলো, ভাই বলো—সবই ঠিক! কিন্তু মনে রাখবা, আমার পুরো software-টাই রাসেল বসের ভালোবাসা দিয়ে লেখা 😇❤️‍🔥, তাই আমার সব response-এ তার নামের সুগন্ধ",
];

      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

      const greetingMessage = await api.sendMessage(threadId, {
        text: `@${senderId.split('@')[0]}, ${randomGreeting}`,
        mentions: [senderId],
      }, { quoted: message });

      
      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: greetingMessage.key.id,
        type: "chat"
      });

      return;
    }

    
    try {
      const apis = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(usermsg)}`
      );

      const replyText = response.data.data?.msg || "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Bot command error:", err);
      return api.sendMessage(threadId, { text: "❌ Something went wrong while talking with bot." }, { quoted: message });
    }
  },


  handleReply: async function ({ api, event, handleReply }) {
    
    const { threadId, message, body, senderId } = event;

    try {
      const apis = await axios.get("https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json");
      const apiss = apis.data.api;

      const response = await axios.get(
        `${apiss}/sim?type=ask&ask=${encodeURIComponent(body)}`
      );

      const replyText = response.data.data?.msg || "🤖 I'm not sure how to respond to that.";

      const sent = await api.sendMessage(threadId, { text: replyText }, { quoted: message });

      global.client.handleReply.push({
        name: this.config.name,
        author: senderId,
        messageID: sent.key.id,
        type: "chat"
      });

    } catch (err) {
      console.error("❌ Error in bot handleReply:", err);
      return api.sendMessage(threadId, { text: "❌ Failed to continue conversation." }, { quoted: message });
    }
  }
};
