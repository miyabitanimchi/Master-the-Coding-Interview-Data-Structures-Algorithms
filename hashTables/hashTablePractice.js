class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const keyAndValue = [key, value];
        for (let i = 0; i < this.data.length; i++) {
            this.data[i] = keyAndValue;
        }

        return this.data;
    }

    get(key) {
        
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grass', 10000);
myHashTable.get('grass');