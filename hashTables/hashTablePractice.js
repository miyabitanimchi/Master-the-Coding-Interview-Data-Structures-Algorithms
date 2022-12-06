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
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 10);
// myHashTable.get('grapes');
console.log(myHashTable.data);
console.log(myHashTable.get('grapes'));