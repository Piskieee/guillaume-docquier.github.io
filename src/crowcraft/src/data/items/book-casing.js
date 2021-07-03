import { Item, CraftingMaterial, Rarities, Professions } from "models";
import { CompositeWoodPlank } from "./composite-wood-plank";
import { Adhesive } from "./adhesive";
import { StitchedLeather } from "./stitched-leather";
import { EtherealDust } from "./ethereal-dust";

export class BookCasing extends Item {
    constructor() {
        super(
            "book casing",
            [Professions.Woodworker],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new CompositeWoodPlank()),
				new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(1, new StitchedLeather()),
				new CraftingMaterial(1, new Adhesive()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1
        );
    }
}
