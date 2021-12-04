///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Ore } from "./ore";
import { ParchmentPaper } from "./parchment-paper";

export class FactorySigil extends Item {
    constructor() {
        super(
            "factory sigil",
            [Professions.Armorsmith, Professions.Weaponsmith, Professions.Jewelcrafter, Professions.Leatherworker, Professions.Runemaker, Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new ParchmentPaper()),
				new CraftingMaterial(8, new Ore()),
				new CraftingMaterial(8, new Ore()),
            ],
            1,
            ""
        );
    }
}
