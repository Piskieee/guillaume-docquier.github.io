///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { Hide } from "./hide";
import { LacingSinew } from "./lacing-sinew";

export class BondedLeather extends Item {
    constructor() {
        super(
            "bonded leather",
            [Professions.Armorsmith, Professions.Weaponsmith, Professions.Jewelcrafter, Professions.Leatherworker, Professions.Runemaker, Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(1, new Hide()),
				new CraftingMaterial(2, new Hide()),
				new CraftingMaterial(1, new LacingSinew()),
            ],
            1,
            ""
        );
    }
}
