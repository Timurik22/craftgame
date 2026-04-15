class CraftingTable {
    constructor() {
        // Creates a 3x3 crafting grid
        this.grid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.recipes = this.initializeRecipes();
    }

    // Initialize recipes
    initializeRecipes() {
        return {
            'wooden_pickaxe': {
                ingredients: [['W', 'W', 'W'],
                             [' ', 'W', ' '],
                             [' ', 'W', ' ']],
                output: 'wooden_pickaxe'
            },
            'stone_pickaxe': {
                ingredients: [['S', 'S', 'S'],
                             [' ', 'S', ' '],
                             [' ', 'S', ' ']],
                output: 'stone_pickaxe'
            },
            'chest': {
                ingredients: [['W', 'W', 'W'],
                             ['W', 'W', 'W'],
                             [' ', ' ', ' ']],
                output: 'chest'
            },
            'crafting_table': {
                ingredients: [['W', 'W', 'W'],
                             ['W', 'W', 'W'],
                             [' ', ' ', ' ']],
                output: 'crafting_table'
            },
            'furnace': {
                ingredients: [['C', 'C', 'C'],
                             ['C', ' ', 'C'],
                             ['C', 'C', 'C']],
                output: 'furnace'
            }
        };
    }

    // Method to match the recipe
    matchRecipe() {
        for (const recipe of Object.values(this.recipes)) {
            if (this.checkMatch(recipe.ingredients)) {
                return recipe.output;
            }
        }
        return null;
    }

    // Check if the current crafting grid matches the recipe
    checkMatch(ingredients) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ingredients[i][j] !== ' ' && this.grid[i][j] !== ingredients[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    // Method to set the items in the grid
    setGrid(items) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = items[i][j];
            }
        }
    }

    // Method to craft an item
    craft() {
        const result = this.matchRecipe();
        this.clearGrid();
        return result;
    }

    // Clear the crafting grid
    clearGrid() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.grid[i][j] = null;
            }
        }
    }
}

// Example usage
const craftingTable = new CraftingTable();
craftingTable.setGrid([['W', 'W', 'W'], [' ', 'W', ' '], [' ', 'W', ' ']]);
const craftedItem = craftingTable.craft();
console.log(craftedItem); // Should output 'wooden_pickaxe'
