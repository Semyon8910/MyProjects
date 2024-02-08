class Queue {
    constructor (list) {
        this.list=list;
    }
    enteringQueue () {
        this.list.push(3,4,5)
    }
    exitingQueue () {
        this.list.pop()
    }
}

let list = [1,2,3,4,5];
let queue = new Queue (list);

