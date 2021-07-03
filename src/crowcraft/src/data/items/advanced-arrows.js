import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { EtherealDust } from "./ethereal-dust";
import { ArrowheadBundle } from "./arrowhead-bundle";
import { ArrowShaftBundle } from "./arrow-shaft-bundle";

export class AdvancedArrows extends Item {
    constructor() {
        super(
            "advanced arrows",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new ArrowheadBundle()),
				new CraftingMaterial(1, new ArrowShaftBundle()),
				new CraftingMaterial(1, new EtherealDust()),
            ],
            500
        );
    }
}
