class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = undefined;
    }

    insert(data) {
        const node = new Node(data);
        let current = this.head;
        if (this.head === undefined) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        };
        this.size++
        return;
    }

    fetchNodeAt(idx) {
        let node = this.head
        if (idx >= 0 && idx < this.size) {
            for (let i=0; i < idx; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insertNodeAt(data, idx) {
        if (idx >=0 && idx <= this.size) {
            const node = new Node(data);
            let current = this.head;
            if (idx === 0) {
                if (this.head === undefined) {
                    this.head = node;
                }
                this.head = node;
                node.next = current;
            } else {
                let prev = this.fetchNodeAt(idx - 1);
                current = prev.next;
                node.next = current;
                prev.next = node;
            }
            this.size++
        }
    }

    indexOf(node) {
        let current = this.head;
        for (let i=0; i < this.size && current; i++) {
            if (current === node) {
                return i;
            }
        }
        return undefined;
    }

    deleteNodeAt(idx) {
        if (this.size === 0) return undefined;

        if (idx >= 0 && idx < this.size) {
            let current = this.head;
            if (idx === 0) {
                this.head = current.next;
            } else {
                let prev = this.fetchNodeAt(idx - 1);
                current = prev.next;
                prev.next = current.next;
            }
            this.size--
            return current.data;
        }

        return undefined;
    }

    delete(node) {
        if (this.size === 0) return undefined;

        let idx = this.indexOf(node);
        if (idx) {
            this.deleteNodeAt(idx);
        }
    }

    length() {
        return this.size;
    }

    toArray() {
        let arr = [];
        let current = this.head;
        while(this.size && current) {
            arr.push(current.data)
            current = current.next;
        }
        return arr;
    }

}

let list = new LinkedList()

list.insert('hi')
list.insert('wow')
list.insert('no')
list.insert('yes')

console.log(list.deleteNodeAt(2))

console.log(list.toArray())