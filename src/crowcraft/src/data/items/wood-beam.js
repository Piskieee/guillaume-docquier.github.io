///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Sandpaper } from "./sandpaper";
import { Wood } from "./wood";

export class WoodBeam extends Item {
    constructor() {
        super(
            "wood beam",
            [Professions.Armorsmith, Professions.Weaponsmith, Professions.Jewelcrafter, Professions.Leatherworker, Professions.Runemaker, Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(3, new Wood()),
				new CraftingMaterial(2, new Sandpaper()),
            ],
            1,
            ""
        );
    }
}
