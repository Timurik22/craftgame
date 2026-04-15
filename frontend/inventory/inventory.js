class Inventory {
    constructor() {
        this.slots = new Array(27).fill(null);
        this.itemsDatabase = {};
    }

    addItem(item, quantity) {
        const index = this.slots.indexOf(null);
        if (index !== -1) {
            if (this.slots[index]) {
                this.slots[index].quantity += quantity;
            } else {
                this.slots[index] = { item: item, quantity: quantity };
            }
        } else {
            console.log('No empty slots available.');
        }
    }

    createItem(name, description) {
        if (!this.itemsDatabase[name]) {
            this.itemsDatabase[name] = { description: description };
        }
    }

    stackItems() {
        let mergedInventory = {};
        this.slots.forEach(slot => {
            if (slot) {
                if (!mergedInventory[slot.item]) {
                    mergedInventory[slot.item] = slot.quantity;
                } else {
                    mergedInventory[slot.item] += slot.quantity;
                }
            }
        });
        this.slots = this.slots.filter(slot => slot);
        for (let [item, quantity] of Object.entries(mergedInventory)) {
            this.addItem(item, quantity);
        }
    }

    renderInventory() {
        console.log('Current Inventory:');
        this.slots.forEach((slot, index) => {
            console.log(`Slot ${index + 1}: ${slot ? slot.item + ' x' + slot.quantity : 'Empty'}`);
        });
    }
}

// Example usage:
const myInventory = new Inventory();
myInventory.createItem('Health Potion', 'Restores health');
myInventory.addItem('Health Potion', 3);
myInventory.renderInventory();
myInventory.stackItems();
myInventory.renderInventory();
