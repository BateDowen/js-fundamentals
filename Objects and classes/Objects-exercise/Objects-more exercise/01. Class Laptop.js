function classLaptop() {
    class Laptop{
        info ={};
        isOn = false;
        quality = 0;

        constructor(info, quality){
          this.info = {
            producer : info.producer,
            age : info.age,
            brand : info.brand}  
          this.quality = quality
        }

        turnOn(isOn){
            this.isOn = true;
            this.quality -= 1;
            return this.isOn;
        }
        turnOff(isOn){
            this.isOn = false;
            this.quality -= 1;
            return this.isOn;
        }
        showInfo(){
            return JSON.stringify(info);
        }
        get price(){
            return 800 - (this.info.age * 2) + (this.quality * 0.5);
        }
        
        
    }
    let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
laptop.turnOn()
console.log(laptop.price)

}
classLaptop()