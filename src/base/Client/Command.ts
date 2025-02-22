import { ChatInputCommandInteraction, CacheType, AutocompleteInteraction, PermissionResolvable } from "discord.js";
import Category from "../enums/Category";
import ICommand from "../interface/ICommand";
import CustomClient from ".";
import ICommandOptions from "../interface/ICommandsOptions";

export default class Command implements ICommand {
    client: CustomClient;
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permissions: bigint;
    dm_permission: boolean;
    cooldown: number;
    dev: boolean;
    bot_permissions: PermissionResolvable | null;
    

    constructor(client: CustomClient, options: ICommandOptions) {
        this.client = client
        this.name = options.name
        this.description = options.description
        this.category = options.category
        this.options = options.options
        this.default_member_permissions = options.default_member_permissions
        this.dm_permission = options.dm_permission
        this.cooldown = options.cooldown
        this.dev = options.dev
        this.bot_permissions = options.bot_permissions || null
    }
    

    Execute(interaction: ChatInputCommandInteraction): any {
    }
    AutoComplete(interaction: AutocompleteInteraction): any {
    }

}