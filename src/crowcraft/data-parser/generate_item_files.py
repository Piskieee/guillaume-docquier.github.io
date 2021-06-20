import csv
from pathlib import Path
from os import walk


class Columns:
    IS_IMPLEMENTED = 0
    IS_UP_TO_DATE = 1
    ITEM_NAME = 2
    REQUIRED_PROFESSIONS = 3
    RARITIES = 4
    MATERIALS = 5
    QUANTITY_PER_CRAFT = 6
    EFFECTED_BY_QUALITY = 7
    CUSTOMIZABLE = 8


class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


rarity_ranks = {
    "grey": 0,
    "white": 1,
    "green": 2,
    "blue": 3,
    "purple": 4,
    "orange": 5,
}

rarity_names = [
    "Poor",
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary"
]


def generate_item_files():
    data_folder = "./data"

    for (_, _, filenames) in walk(data_folder):
        for filename in filenames:
            with open(f"{data_folder}/{filename}", "r") as tsv_file:
                print(filename)
                items = csv.reader(tsv_file, delimiter='\t')
                next(items)  # Skip header
                for item in items:
                    if item[0] != "" and item[1] == "No":
                        generate_item_code(item)


def generate_item_code(item):
    item_data = extract_item_data(item)
    (file_name, js_code) = write_js_code(item_data)

    output_folder = "./generated"
    Path(output_folder).mkdir(parents=True, exist_ok=True)
    with open(f"{output_folder}/{file_name}", "w") as js_file:
        js_file.write(js_code)


def extract_item_data(item):
    item_name = make_item_name(item[Columns.ITEM_NAME])
    file_name = make_file_name_without_extension(item_name) + ".js"
    class_name = make_class_name(item_name)
    professions = item[Columns.REQUIRED_PROFESSIONS].split(" - ")

    item_rarities = item[Columns.RARITIES].lower().replace(" ", "").split("-")
    try:
        item_rarities = rarity_names[rarity_ranks[item_rarities[0]]:rarity_ranks[item_rarities[min(1, len(item_rarities) - 1)]] + 1]
    except:
        print(bcolors.FAIL, f"Invalid item rarities {{{item_rarities}}} for item: {{{item_name}}}", bcolors.ENDC)

    raw_crafting_materials = item[Columns.MATERIALS].lower().replace("non-basic ", "").split(", ")
    crafting_materials = []
    for crafting_material in raw_crafting_materials:
        parts = crafting_material.replace(":", "").split("x ")
        try:
            [quantity, crafting_material_name] = parts
            quantity = int(quantity)
            crafting_materials.append((quantity, make_item_name(crafting_material_name)))
        except:
            print(bcolors.FAIL, f"Invalid crafting material {{{crafting_material}}} for item: {{{item_name}}} parsed as: {{{parts}}}", bcolors.ENDC)

    quantity_per_craft = item[Columns.QUANTITY_PER_CRAFT]
    is_customizable = item[Columns.CUSTOMIZABLE]

    return file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, is_customizable


def write_js_code(item_data):
    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, is_customizable) = item_data
    js_code = generate_customizable_item(item_data) if is_customizable.lower() == "yes" else generate_item(item_data)

    return file_name, js_code


def generate_item(item_data):
    js_code = """import { Item, CraftingMaterial, Rarities, Professions } from "models";
{imports}

export class {class_name} extends Item {
    constructor() {
        super(
            "{item_name}",
            [{professions}],
            [{rarities}],
            [
                {crafting_materials}
            ],
            {quantity_per_craft}
        );
    }
}
    """

    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, _) = item_data

    crafting_materials_set = set([crafting_material_name for (_, crafting_material_name) in crafting_materials])
    try:
        imports = [f"import {{ {make_class_name(crafting_material_name)} }} from \"./{make_file_name_without_extension(crafting_material_name)}\";" for crafting_material_name in crafting_materials_set]
    except:
        imports = []
        print(bcolors.FAIL, f"Cannot create imports properly from item set {{{crafting_materials_set}}} for item: {{{item_name}}}", bcolors.ENDC)

    try:
        js_crafting_materials = [f"new CraftingMaterial({quantity}, new {make_class_name(crafting_material_name)}())," for (quantity, crafting_material_name) in crafting_materials]
    except:
        js_crafting_materials = []
        print(bcolors.FAIL, f"Cannot create crafting materials properly from crafting_materials {{{crafting_materials}}} for item: {{{item_name}}}", bcolors.ENDC)

    return js_code.replace("{imports}", "\n".join(imports))\
        .replace("{class_name}", class_name)\
        .replace("{item_name}", item_name)\
        .replace("{professions}", ", ".join([f"Professions.{profession}" for profession in professions]))\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities])) \
        .replace("{crafting_materials}", "\n\t\t\t\t".join(js_crafting_materials))\
        .replace("{quantity_per_craft}", quantity_per_craft)


def generate_customizable_item(item_data):
    js_code = """import { CustomizableComponent, Customization, CraftingMaterial, Rarities, Professions, ItemsStats } from "models";
{imports}

export class {class_name} extends CustomizableComponent {
    constructor() {
        super(
            "{item_name}",
            [{professions}],
            [{rarities}],
            [
                {crafting_materials}
            ],
            {quantity_per_craft},
            [
                // TODO Customizations
            ]
        );
    }
}
    """

    (file_name, class_name, item_name, professions, item_rarities, crafting_materials, quantity_per_craft, _) = item_data

    crafting_materials_set = set([crafting_material_name for (_, crafting_material_name) in crafting_materials])
    imports = [f"import {{ {make_class_name(crafting_material_name)} }} from \"./{make_file_name_without_extension(crafting_material_name)}\";" for crafting_material_name in crafting_materials_set]
    js_crafting_materials = [f"new CraftingMaterial({quantity}, new {make_class_name(crafting_material_name)}())," for (quantity, crafting_material_name) in crafting_materials]

    return js_code.replace("{imports}", "\n".join(imports))\
        .replace("{class_name}", class_name)\
        .replace("{item_name}", item_name)\
        .replace("{professions}", ", ".join([f"Professions.{profession}" for profession in professions]))\
        .replace("{rarities}", ", ".join([f"Rarities.{rarity}" for rarity in item_rarities])) \
        .replace("{crafting_materials}", "\n\t\t\t\t".join(js_crafting_materials))\
        .replace("{quantity_per_craft}", quantity_per_craft)


def make_item_name(item_name):
    return item_name.lower().replace(":", "").replace("-", " ")


def make_file_name_without_extension(item_name):
    return item_name.replace(" ", "-").replace('\'', "")


def make_class_name(item_name):
    return "".join(map(capitalize, item_name.replace('\'', "").split(" ")))


def capitalize(string):
    return string[0].upper() + string[1:]


if __name__ == '__main__':
    generate_item_files()

