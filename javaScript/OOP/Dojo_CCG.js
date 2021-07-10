 class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,res,power){
        super(name,cost);
        this.res = res;
        this.power = power;
    }

    attack(target){
        if(target instanceof Unit){
            target.power -= this.power;
        } else{
            throw new Error("Target must be a unit!");
        }
    }

    showRes(){
        console.log(this.name+" Stats: ",this.res," Res <==> Power",this.power);
    }
}

class Effect extends Card{
    constructor(name,cost, text, stat,magnitude){
        super(name,cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat = "power"){
                target.power += this.magnitude;
            }else if(this.stat = "resilience"){
                target.res += this.magnitude;
            }
        } else{
            throw new Error("Target must be a unit!");
        }
    }
}


const redUnit = new Unit("Red Belt Ninja",3,3,4);
const blackUnit = new Unit("Black Belt Ninja",4,5,4);
const hardAlgorithm	= new Effect("Hard Algorithm",2,"increase target's resilience by"+ this.magnitude,"resilience", 3);
const unhandledPromiseRejection = new Effect("Hard Algorithm",1,"reduce target's resilience by  "+ this.magnitude, "resilience",-2);
const pairProgramming = new Effect("Hard Algorithm",3,"increase target's power by "+ this.magnitude, "power",2);




unhandledPromiseRejection.play(redUnit);
redUnit.showRes();
pairProgramming.play(redUnit);
redUnit.showRes();
hardAlgorithm.play(redUnit);
redUnit.showRes();
redUnit.attack(blackUnit);
blackUnit.showRes();