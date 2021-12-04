///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Coal } from "./coal";
import { Ore } from "./ore";

export class MetalBillet extends Item {
    constructor() {
        super(
            "metal billet",
            [Professions.Armorsmith, Professions.Weaponsmith, Professions.Jewelcrafter, Professions.Leatherworker, Professions.Runemaker, Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(3, new Ore()),
				new CraftingMaterial(3, new Coal()),
            ],
            1,
            ""
        );
    }
}
