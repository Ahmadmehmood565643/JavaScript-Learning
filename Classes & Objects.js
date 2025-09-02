class animal {
    constructor(name){
        this.name =name
        console.log("Object")
    }
    eat(){
        console.log("main Naha raha hn")
    }
    jumps(){
        console.log("main jumping kra")
    }
}

class loin extends animal {
    constructor(name){
        super(name)
        this.name = name
    }
}

let a = new animal("bunny")
console.log(a)

let l = new loin("Shera")
console.log(l)

