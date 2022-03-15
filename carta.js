class Card {

    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }

    get getName() {
        return this.name;
    }

    get getCost() {
        return this.cost;
    }

    /**
     * @param {String} name
     */
    set setName(name) {
        this.name = name;
    }

    /**
     * @param {Number} cost
     */
    set setCost(cost) {
        this.cost = cost;
    }

}

class Unit extends Card {

    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    get getPower() {
        return this.power;
    }

    get getRes() {
        return this.res;
    }

    /**
     * @param {Number} power
     */
    set setPower(power) {
        this.power = power;
    }

    /**
     * @param {Number} res
     */
    set setRes(res) {
        this.res = res;
    }

    attack(target) {
        if( target instanceof Unit ) {
            console.log("La carta ha sido atacada");
            target.setRes = target.getRes - this.getPower;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}

class Effect extends Card {

    constructor(name,cost,texto,stat,magnitud) {
        super(name,cost);
        this.texto = texto;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    get getTexto(){
        return this.texto;
    }

    get getStat() {
        return this.stat;
    }

    get getMagnitud() {
        return this.magnitud;
    }

    /**
     * @param {String} texto
     */
    set setTexto(texto) {
        this.texto = texto;
    }

    /**
     * @param {String} stat
     */
    set setStat(stat) {
        this.stat = stat;
    }

    /**
     * @param {Number} magnitud
     */
    set setMagnitud(magnitud) {
        this.magnitud = magnitud;
    }

    play( target ) {
        if( target instanceof Unit ) {
            console.log(this.texto);
            if(this.stat == "resiliencia") target.setRes = target.getRes + this.magnitud;
            else if(this.stat == "poder") target.setPower = target.getPower + this.magnitud;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

}


let efecto1 = new Effect("Algoritmo Difícil",2,"aumentar la resistencia del objetivo en 3","resiliencia",3);
let efecto2 = new Effect("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","resiliencia",-2);
let efecto3 = new Effect("Programación en pareja",2,"aumentar el poder del objetivo en 2","poder",2);


//turno 1
let carta1 = new Unit("Ninja Cinturón Rojo",3,3,4);
efecto1.play(carta1);
console.log(carta1.getRes);

//turno 2
let carta2 = new Unit("Ninja Cinturón Negro",4,5,4);
efecto2.play(carta1);
console.log(carta1.getRes);

//turno 3
efecto3.play(carta1);
console.log(carta1.getPower);

carta1.attack(carta2);
console.log(carta2.getRes);