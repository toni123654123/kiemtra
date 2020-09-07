function Animal(name, weight){
    this.name=name;
    this.weight=weight;
    this.setName= function (name){
        this.name=name;
    }
    this.getName=function (){
        return this.name;
    }
    this.setWeight= function (weight){
        this.weight=weight;
    }
    this.getWeight= function (){
        return this.weight;
    }
    this.toString= function (){
        return  "Tên con vật là: "+this.name + " nặng: "+this.weight;
    }
}