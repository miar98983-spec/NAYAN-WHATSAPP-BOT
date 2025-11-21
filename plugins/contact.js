module.exports = {
  config: {
    name: 'contact',
    aliases: [],
    permission: 2,
    prefix: 'both',
    categories: 'Utilities',
    credit: 'Developed by Rasel Raj',
    usages: [
      `${global.config.PREFIX}contact - Send contact information for Rasel Raj.`,
    ]
  },

  start: async ({ event, api }) => {
    const { threadId } = event;

    const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Rasel Raj\n'
            + 'ORG:Rasel;\n'
            + 'TEL;type=CELL;type=VOICE;waid=8801614821578:01614821578\n'
            + 'END:VCARD';

    const sentMsg = await api.sendMessage(
      threadId,
      { 
        contacts: { 
          displayName: 'Rasel', 
          contacts: [{ vcard }] 
        }
      }
    );
  }
};
