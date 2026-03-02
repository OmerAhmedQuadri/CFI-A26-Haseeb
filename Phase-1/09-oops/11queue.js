class Queue {
    #data = []
    #limit
    constructor(limit = Infinity) {

        if (limit < 2 || isNaN(limit) || typeof limit != 'number') {
            throw new Error('Please enter a valid queue limit')
        }
        this.#limit = limit

    }
    get limit() {
        console.log(this.#limit);
        return this.#limit

    }



    enQueue(ele) {
        if (this.#data.length == this.#limit) {
            console.log('Queue is full')
            return
        }
        this.#data.push(ele)

    }
    deQueue() {
        if (this.#data.length == 0) {
          console.log('Queue is empty');
          
        }
            this.#data.shift()
            this.print(this.#data)
           

        
    }
    print() {
        if (this.#data.length == 0) {
            return console.log('Queue is empty');
        }
        console.log('Front--> ' + this.#data.join(' '));
    }
}
const q1 = new Queue(4)
q1.limit


