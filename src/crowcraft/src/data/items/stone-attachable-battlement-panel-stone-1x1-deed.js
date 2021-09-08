///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { CarpentryNails } from "./carpentry-nails";
import { EtherealDust } from "./ethereal-dust";
import { QualityAssuranceControlKit } from "./quality-assurance-control-kit";
import { StoneWallSection } from "./stone-wall-section";

export class StoneAttachableBattlementPanelStone1x1Deed extends Item {
    constructor() {
        super(
            "stone attachable battlement panel: stone 1x1 deed",
            [Professions.Stonemason],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(2, new StoneWallSection()),
				new CraftingMaterial(3, new CarpentryNails()),
				new CraftingMaterial(5, new EtherealDust()),
				new CraftingMaterial(1, new QualityAssuranceControlKit()),
            ],
            1,
            "battlement panel: stone"
        );
    }
}
