class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    // O(1)
    // underscore means it's private in JS world... but we can still access it!
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length;
        }
        return hash;
    }

    // set(key, value) {
    //     const keyAndValue = [key, value];
    //     for (let i = 0; i < this.data.length; i++) {
    //         this.data[i] = keyAndValue;
    //     }
    //     return this.data;
    // 

    // O(1)
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) this.data[address] = [];
        this.data[address].push([key, value]);
        return this.data;
    }

    // O(1)
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        // console.log(currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    // for this type of method, using objects, hash tables are not the best idea.
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                console.log('keys: ' + this.data[i]);
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }

    keysWithCollision() {
        if (!this.data.length) return undefined;

        let result = [];
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // if this.data.length > 1, that means collisions are happening somewhere so we loop through
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        console.log('keysWithCollision: ' + this.data[i]);
                        result.push(this.data[i][j][0]);
                    }
                } else {
                    result.push(this.data[i][0]);
                }
            }
        }
        return result;
    }
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10);
myHashTable.set('pears', 200);
// myHashTable.get('grapes');
// console.log(myHashTable.data);
// console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
console.log(myHashTable.keysWithCollision());