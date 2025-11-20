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
╔══❀🌸❀══╗
🩶 𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 𝓘𝓷𝓯𝓸 🩶
╚══❀🌸❀══╝
          *ASSALAMUALAIKUM*
🖋️ Name : 𓀬✎🅁🄰🅂🄴🄻𓄂🅁🄰🄹♡𓅇
🌐 Facebook : 𓀬✎🅁🄰🅂🄴🄻𓄂🅁🄰🄹♡𓅇

☪️ Religion : 𝐈𝐬𝐥𝐚𝐦
🏡 Permanent Address : 𝐃𝐡𝐚𝐤𝐚
📍 Current Address : 𝐆𝐚𝐳𝐢𝐩𝐮𝐫, 𝐃𝐡𝐚𝐤𝐚
🚹 Gender : 𝐌𝐚𝐥𝐞
🎂 Age : 𝟏𝟖+
💔 Relationship : 𝐒𝐢𝐧𝐠𝐥𝐞
🎓 Work : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
📧 Gmail : iar98983@gmail.com

💬 WhatsApp : 8801878479520

📱 Telegram : Click Here

🔗 Facebook Link : https://www.facebook.com/tr.rasel.raj.2025

╔══❀🌸❀══╗
✨ 𝐁𝐞 𝐘𝐨𝐮𝐫𝐬𝐞𝐥𝐟 — 𝐍𝐨 𝐎𝐧𝐞 𝐂𝐚𝐧 𝐁𝐞 𝐘𝐨𝐮 ✨
╚══❀🌸❀══╝
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
