import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { GreatWeaponPommel } from "./great-weapon-pommel";
import { GreatWeaponCrossguard } from "./great-weapon-crossguard";
import { WeaponGrip } from "./weapon-grip";

export class WeaponHiltGreat extends Item {
    constructor() {
        super(
            "weapon hilt: great",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new GreatWeaponPommel()),
				new CraftingMaterial(1, new GreatWeaponCrossguard()),
            ],
            1
        );
    }
}
