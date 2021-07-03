import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { ManaImpeller } from "./mana-impeller";
import { WeaponGrip } from "./weapon-grip";
import { ArcaneActuator } from "./arcane-actuator";

export class FrostcastingEnclosure extends Item {
    constructor() {
        super(
            "frostcasting enclosure",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponGrip()),
				new CraftingMaterial(1, new ManaImpeller()),
				new CraftingMaterial(1, new ArcaneActuator()),
            ],
            1
        );
    }
}
