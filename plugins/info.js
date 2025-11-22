const os = require('os');

module.exports = {
  config: {
    name: 'info',
    aliases: ['about', 'admininfo', 'serverinfo'],
    permission: 0,
    prefix: 'both',
    categorie: 'Utilities',
    credit: 'Developed by 𓀬✎🅁🄰🅂🄴🄻𓄂🅁🄰🄹♡𓅇',
    usages: [`${global.config.PREFIX}info - Show admin and server information.`],
  },
  start: async ({ event, api, message }) => {
    try {
      const uptimeSeconds = process.uptime();
      const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

      const adminListText =
        global.config.admin.length > 0
          ? global.config.admin
              .map((id, i) => `${i + 1}. @${id.split('@')[0]}`)
              .join('\n')
          : 'No admins found.';

      const infoMessage = `
--------------------------------------------
╔═══════════════════════════╗
║ ║
║ 🌟 𓀬✎ 𝙍𝘼𝙎𝙀𝙇 𓄂 𝙍𝘼𝙅 ♡ 𓅇 🌟 ║
║ ║
╚═══════════════════════════╝
        ║*ASSALAMUALAIKUM*║
╔═══════════════════════════╗
║ 🖋️ Name: 𓀬✎ 𝙍𝘼𝙎𝙀𝙇 𓄂𝙍𝘼𝙅♡𓅇 ║
║ 🌐 Facebook: https://www.facebook.com/tr.rasel.raj.2025
║
║ ☪️ Religion: 𝙄𝙨𝙡𝙖𝙢 ║
║ 🏡 Permanent Address: 𝘿𝙝𝙖𝙠𝙖 ║
║ 📍 Current Address: 𝙂𝙖𝙯𝙞𝙥𝙪𝙧, 𝘿𝙝𝙖𝙠𝙖 ║
║ 🚹 Gender: 𝙈𝙖𝙡𝙚 ║
║ 🎂 Age: 18+ ║
║ 💔 Relationship: 𝙎𝙞𝙣𝙜𝙡𝙚 ║
║ 🎓 Work: 𝙎𝙩𝙪𝙙𝙚𝙣𝙩 ║
║ 📧 Gmail: iar98983@gmail.com ║ 
║ 💬 WhatsApp: 8801614821578
║
║ 📱 Telegram:❌
║
║ 🔗 Facebook Link: https://www.facebook.com/tr.rasel.raj.2025 ║
╚═══════════════════════════╝
     𓀬✎🅁🄰🅂🄴🄻𓄂 🅁🄰🄹♡𓅇
╔═══════════════════════════╗
║ ✨ Signature /Premium Lines✨ ║
║ ⚜️ Dream Big • Work Smart 💼 ║
║ 🔱 No Fake 😈 • Only Real 💯 ║
║ 🌟 Kindness ≠ Weakness 💖 ║
║ ✨ Class Never Explains ║
║ 🖤 Simple Boy • Deep Vibe 🌌 ║
╚═══════════════════════════╝
--------------------------------------------
\`\`\`
🖥️ Server Info:
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
\`\`\``;

      await api.sendMessage(
            event.threadId,
            { image: { url: "https://i.postimg.cc/HWRYkXLH/IMG-1903.jpg" }, caption: infoMessage || '' },
            { quoted: event.message }
          );;
    } catch (error) {
      console.error(error);
      await api.sendMessage(event.threadId, '❌ An error occurred while fetching info.', { quoted: event.message });
    }
  },
};
