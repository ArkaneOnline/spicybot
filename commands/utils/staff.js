const config = require("../../config.json");
const { RichEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "staff",
        aliases: [],
        description: "Displays a list of Staff Members and their purpose",
        usage: "",
        category: "utils"
    },
    run: async (client, message, args) => {
        let arkane = client.users.get(config.importantIDs.staffIDs.arkane);
        let neo = client.users.get(config.importantIDs.staffIDs.neo);
        let kilmore = client.users.get(config.importantIDs.staffIDs.kilmore);
        let faded = client.users.get(config.importantIDs.staffIDs.faded);
        let tool = client.users.get(config.importantIDs.staffIDs.tool);
        let vinyl = client.users.get(config.importantIDs.staffIDs.vinyl);
        let birdman = client.users.get(config.importantIDs.staffIDs.birdman);

        let blaze = client.users.get(config.importantIDs.developerIDs.blaziken);

        let staffembed = new RichEmbed()
        .setTitle("Staff Members")
        .setURL("https://invite.gg/ramenshop")
        .setThumbnail(message.guild.iconURL)
        .setColor(config.colors.purple)
        .addField("Clan 1 Staff", `${kilmore} and ${neo}`)
        .addField("Clan 2 Staff", `${faded} and ${vinyl}`)
        .addField("Clan 3 Staff", `${arkane} and ${birdman}`)
        .addField("Clan Leaders", `${neo}, ${faded} and ${arkane}`)
        .addField("Others", `${tool}`)
        .addField("Owner", message.guild.owner)
        .addField("Staff Manager", arkane)
        .addField("Spicy Bot Developers", `${arkane}, ${blaze}, and ${faded}`)
        .setFooter(`Data requested by: ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp()

        message.channel.send(staffembed);
        return;

    }
}