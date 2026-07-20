module.exports = {
  config: {
    name: "funny",
    aliases: [],
    version: "1.0.0",
    author: "typing087",
    role: 0,
    shortDescription: "Funny joke"
  },

  onStart: async function ({ message }) {
    const jokes = [
      "😂 প্রেম করলে টাকা যায়, না করলে ঘুম যায়!",
      "🤣 WiFi চলে গেলে পরিবারের সবাইকে নতুন করে চিনতে হয়!",
      "😆 পড়াশোনা কাল থেকে, আজ একটু বিশ্রাম!",
      "😂 ঘুম আমার শখ না, এটা আমার সুপারপাওয়ার!"
    ];

    return message.reply(jokes[Math.floor(Math.random() * jokes.length)]);
  }
};