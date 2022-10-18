export default async (req, res) => {
    const data = [
        { 
          id: 1,
          image: "https://cdn.discordapp.com/attachments/1003714890638303232/1008044425722740797/22-modified_1.png",
          slug: "GiveAways",
          name: "GiveAways", 
          github: false,
          githubLink: "",
          website: true,
          websiteLink: "https://giveaways-bot.com",
          invite: false,
          inviteLink: "",
          description: "A Discord bot that allows you to host giveaways on your server.",
        },
        { 
          id: 2,
          image: "https://cdn.discordapp.com/attachments/960208290506215456/992524631636459560/T3.png", 
          slug: "TrestHost",
          name: "TrestHost", 
          github: false,
          githubLink: "",
          website: true,
          websiteLink: "https://tresthost.com",
          invite: false,
          inviteLink: "",
          description: "The best hosting provider for Discord bots.", 
        },
        { 
          id: 3,
          image: "https://cdn.discordapp.com/attachments/971049189377179718/1031863674903728128/Design_ohne_Titel2.png", 
          slug: "Janjyfy",
          name: "Janjyfy", 
          github: true,
          githubLink: "https://github.com/Stoneclane-Development/Janjyfy-Bot",
          website: false,
          websiteLink: "",
          invite: false,
          inviteLink: "",
          invite: true,
          inviteLink: "https://discord.com/api/oauth2/authorize?client_id=995397263130112081&permissions=8&scope=bot%20applications.commands",
          description: "A Discord Moderation bot.", 
        },
        { 
          id: 4,
          image: "https://cdn.discordapp.com/attachments/971049189377179718/1031863899244482692/unknown.png", 
          slug: "portfolio",
          name: "My Portfolio", 
          github: true,
          githubLink: "https://github.com/JanjyTapYT/Portfolio",
          website: true,
          websiteLink: "https://janjytapyt.me",
          invite: false,
          inviteLink: "",
          description: "My Portfolio Website.",
        },
        { 
          id: 5,
          image: "https://cdn.discordapp.com/attachments/948262856334401556/999367912546631710/banner.png", 
          slug: "bluefox-resources",
          name: "Bluefox Resources [Out of Service]",
          github: false,
          githubLink: "",
          website: false,
          websiteLink: "",
          invite: false,
          inviteLink: "",
          description: "Do you want to sell your resources? Then you are right here. Bluefox Resources is a platform where you can sell your resources. You can also buy resources from other developers. We have a lot of categories, so you can find what you are looking for.",
        },
        { 
          id: 6,
          image: "https://cdn.discordapp.com/attachments/952628698807414785/963460672811835442/Stoneclane_List_Banner.png", 
          slug: "Stoneclane-Botlist",
          name: "Stoneclane Botlist", 
          github: false,
          githubLink: "",
          website: true,
          websiteLink: "https://stoneclane.xyz",
          invite: false,
          inviteLink: "",
          description: "Do you want to grow your discord bot / server? Then you are right here. Stoneclane Botlist is a platform where you can promote your discord bot / server. You can also find new discord bots / servers. We have a lot of categories, so you can find what you are looking for.", 
        },
    ]

    res.status(200).json(data)
};