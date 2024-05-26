type Node<T> ={
    value: T,
    prev?:Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;
        this.length++;
        if(!this.head){
            this.head = node;
            return
        }

        

}
    pop(): T | undefined {

}
    peek(): T | undefined {

}
}