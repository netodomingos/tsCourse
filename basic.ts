class Costumer{
    name: string;

    constructor(name: string){
        this.name = name
    }

    announce(){
        return "Hello, " + this.name
    }
}

let firstCostumer = new Costumer('Neto')
let newMessag: string = firstCostumer.announce()

