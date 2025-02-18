import { ApplicationCommandOptionType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../../base/Client/Command";
import CustomClient from "../../base/Client";
import Category from "../../base/enums/Category";

export default class devCommand extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "ping",
            description: "dev command",
            category: Category.Developer,
            default_member_permissions: PermissionsBitField.Flags.ViewChannel,
            dm_permission: false,
            cooldown: 3,
            options: [],
            bot_permissions: null,
            dev: true
        });
    }


    async Execute(interaction: ChatInputCommandInteraction) {
        await interaction.reply({ content: "A ping command" });
    }
}