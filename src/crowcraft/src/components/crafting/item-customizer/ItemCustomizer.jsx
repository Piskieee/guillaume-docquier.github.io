import "./ItemCustomizer.css";

import { Item } from "components";
import { useState } from "react";

export const ItemCustomizer = ({ item, onItemCustomized }) => {
    const customizableComponents = item.getCustomizableComponents();
    const [customizations, setCustomizations] = useState(customizableComponents.map(cc => cc.customization ? cc.customization.name : null));

    const onComponentCustomized = i => {
        setCustomizations(customizableComponents.map(cc => cc.customization ? cc.customization.name : null));
        if (customizableComponents.every(cc => cc.customization)) {
            onItemCustomized();
        }
    };

    return (
        <>
            <div className="mb2 f3 fw5">Choose your stats ({customizations.filter(c => c).length}/{customizableComponents.length})</div>
            <div className="flex flex-wrap">
                {customizableComponents.map((customizableComponent, i) => (
                    <div key={`${customizableComponent.id}.${i}`} className="mr3 mb3">
                        <ComponentCustomizer customizableComponent={customizableComponent} componentIndex={i + 1} onComponentCustomized={() => onComponentCustomized(i)} />
                    </div>
                ))}
            </div>
        </>
    );
};

const ComponentCustomizer = ({ customizableComponent, componentIndex, onComponentCustomized }) => {
    const [customizationOptions] = useState(customizableComponent.possibleCustomizations);

    const customizeComponent = e => {
        customizableComponent.customize(customizationOptions[e.target.value]);
        onComponentCustomized();
    }

    const selectId = `customization-${componentIndex}`;
    const currentCustomization = customizableComponent.customization;
    const defaultSelectValue = currentCustomization ? customizableComponent.possibleCustomizations.indexOf(currentCustomization) : "default";

    return (
        <div className="flex items-center">
            <div className="h4 w4">
                <Item item={customizableComponent} />
            </div>
            <div className="flex flex-column ml2 space-between">
                <label className="mb1" htmlFor={selectId}>Stats for {customizableComponent.baseName}</label>
                <select className="stat-selector | w-100 peach-puff bg-marine pointer" name={selectId} id={selectId} onChange={customizeComponent} defaultValue={defaultSelectValue}>
                    <option disabled value="default"> -- select a stat -- </option>
                    {customizationOptions.map((customizationOption, i) => (
                        <option key={customizationOption.id} value={i}>
                            {formatCustomizationEffects(customizationOption.getCustomizationEffects(customizableComponent.rarity))}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const formatCustomizationEffects = customizationEffects => customizationEffects.map(ce => ce.effect).join(" + ");