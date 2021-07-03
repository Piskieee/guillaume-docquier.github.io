import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { BladeRivetsGreat } from "./blade-rivets-great";
import { WeaponBladeGreat } from "./weapon-blade-great";
import { WeaponHiltGreat } from "./weapon-hilt-great";

export class GreatSword extends Item {
    constructor() {
        super(
            "great sword",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHiltGreat()),
				new CraftingMaterial(1, new WeaponBladeGreat()),
				new CraftingMaterial(1, new BladeRivetsGreat()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1
        );
    }
}
