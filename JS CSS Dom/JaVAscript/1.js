export default class 1{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        return this.items.pop();
    }
}