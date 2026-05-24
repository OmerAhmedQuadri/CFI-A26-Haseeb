class Node {
    constructor(value){
        this.left = null
        this.value = value
        this.right = null
    }
}


class Tree {
    constructor () {
        this.root = null
    }
    insert(value) {
        if(value == null || value === undefined) {
            return
        }

        const newNode = new Node(value)

        if(this.root === null) {
            this.root = newNode
            return
        }

        let current = this.root

        while(true) {
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode
                    return
                }
                current = current.left
            }

            else{ 
                if(current.right === null) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
        }
    }

    search(value) {
        if(value === null || value === undefined) {
            return false
        }

        let current = this.root
        while(current) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
    }
}