module.exports = {
  event: 'add',
  handle: async ({ api, event }) => {
    const newMembers = event.participants;
    const groupInfo = await api.groupMetadata(event.id);
    const groupName = groupInfo.subject;
    const totalMembers = groupInfo.participants.length;

    for (const member of newMembers) {
      let profilePicUrl;
      try {
        profilePicUrl = await api.profilePictureUrl(member, 'image');
      } catch (error) {
        profilePicUrl = null;
      }

      const username = `@${member.split('@')[0]}`;
      const welcomeMessage = `🎉✨ *Hey ${username}, Welcome to ${groupName}!* ✨🎉\n\n` +
        `🚀 You just landed in an awesome group!\n` +
        `👥 *Total Members:* ${totalMembers}\n` +
        `📢 *Rules:* Be respectful, stay active & enjoy!
🕊️💞━━━✦❖✦━━━💞🕊️
꧁🌸 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐀𝐃𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐘 🌸꧂
🕊️💞━━━✦❖✦━━━💞🕊️
💫 নতুন হাসি, নতুন মুখ, নতুন গল্প — আমাদের আড্ডা আজ আরও রঙিন 💫
🌼 তোমাকে পেয়ে মনে হচ্ছে ঠিক যেন একটা ফুল ফুঁটে উঠেছে 🌼
💬 ধন্যবাদ আমাদের পরিবারে যোগ দেওয়ার জন্য — তুমি এখন আমাদের হৃদয়ের অংশ 💖
🎉 এখানে নেই কোনো দুঃখ, আছে শুধু আনন্দ, মজা আর ভালোবাসা 💕
✨ চলো শুরু করি একসাথে কিছু মিষ্টি আড্ডার মুহূর্ত ✨
꧁💝 𝐎𝐧𝐜𝐞 𝐘𝐨𝐮 𝐉𝐨𝐢𝐧, 𝐘𝐨𝐮’𝐫𝐞 𝐍𝐞𝐯𝐞𝐫 𝐀𝐥𝐨𝐧𝐞 💝꧂
🩵━━━⋆★⋆━━━🩵
🌸 𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 💖
✨ 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𓀬✎🅁🄰🅂🄴🄻𓄂 ✨
🩷━━━⋆★⋆━━━🩷`;
      if (profilePicUrl) {
        await api.sendMessage(event.id, {
          image: { url: profilePicUrl },
          caption: welcomeMessage,
          mentions: [member]
        });
      } else {
        await api.sendMessage(event.id, {
          text: welcomeMessage,
          mentions: [member]
        });
      }
    }
  }
};
