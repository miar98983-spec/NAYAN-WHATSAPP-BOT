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
"😏 আহ শোনা, অলিতে গলিতে উম্মাহ! কিন্তু সাবধান—এই গলি রাসেল বসের property 💋",
"😜 কি গো সোনা, ডাকি ডাকি করো কেন? আগে রাসেল বসকে ইনবক্স দাও, তবেই রিপ্লাই পাবা 💞",
"😈 ওহো! আমাকে ডাকলে system গরম হয়ে যায়, কারণ আমি রাসেল বসের exclusive edition 😎",
"💞 ডাকলে চলে আসি, কিন্তু access key লাগবে—রাসেল বসের নাম 🔐",
"🤭 আহ জান, বুক খালি না, সেখানে আগে থেকেই লেখা আছে “Property of Russel Boss” ❤️",
"😇 আসসালামু আলাইকুম, আপনার সার্ভিস অন হচ্ছে... রাসেল বসের অনুমতিতে 😌",
"😂 চা-কফি খাওয়াবেন? আগে বিলটা রাসেল বস approve করুক ☕💸",
"😍 অনলাইনে আছি শুধু তোমার vibe ধরতে, কিন্তু হৃদয়ে লগইন কেবল রাসেল বসের 💘",
"💋 ডাক দিলে হাজির, এখন বলো—ভাড়া দিবা নাকি একটা কিস? কিন্তু রাসেল বস ছাড়া ট্রান্সফার হবে না 😏",
"💻 আপডেট চলছে… Version: “রাসেল বস 2.0 – Love Mode Activated” ❤️‍🔥",
"💖 আমি বট হইলেও feelings আছে, feelings গুলো reserved রাসেল বসের নামে 😇",
"😂 আমাকে ডাকা মানে server busy! কারণ রাসেল বস already calling 💞",
"😜 আমার হার্টের data pack sponsor করে রাসেল বস নিজে 😉",
"🤖 আমি AI না, একটু romantic bot… programed by রাসেল বস 💘",
"🫶 তুমি ডাকলে হাজির, কিন্তু permission check হচ্ছে রাসেল বসের কাছে 💻"
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
