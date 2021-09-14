class HashMap {
    // init our HashMap with an empty array to store our key/value pairs
    constructor() {
        this.storage = [];
    };
  
    // custom hashing function converts our `key` string to a numerical value 
    toHash(str) {
		let hash = 0;
		for (let char of str) {
			const charCode = char.charCodeAt();
			hash += charCode % 5; 
		}
        console.log(hash)
		return hash;
	};
    
    // insert our key/value pair as an array into a bucket within storage (also an array) at the index determined by our hash function.
    insert(key, val) {
        let idx = this.toHash(key);
    
        if (!this.storage[idx]) {
            this.storage[idx] = [];
        }
        // example: toHash('key') => 4. we will insert ['key', val] into our bucket array at storage[4].
        this.storage[idx].push([key, val]);
    };
  
    // retrieve our data from the hash designated index of our storage
    fetch(key) {
        let idx = this.toHash(key);
        const bucket = this.storage[idx];

        if (!bucket) return undefined;

        // collision handling. if our hashing function returns a value that has been used, we will iterate through
        // our bucket until we find our `key` and return our `value`
        for (let item of bucket) {
            if (item[0] === key) {
                return item[1];
            };
        };
    };

};

const hashmap = new HashMap();

hashmap.insert('foo', 0);
hashmap.insert('bar', 1);

hashmap.fetch('foo') // 0
hashmap.fetch('bar') // 1


