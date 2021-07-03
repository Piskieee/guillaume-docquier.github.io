import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { MetalBar } from "./metal-bar";
import { HeadMoldGreatMace } from "./head-mold-great-mace";
import { EtherealDust } from "./ethereal-dust";

export class WeaponHeadGreatMace extends Item {
    constructor() {
        super(
            "weapon head: great mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldGreatMace()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
