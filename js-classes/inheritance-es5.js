function Car(name, model, year, color, maxSpeed){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = 60;
    this.fuelConsumption = 10;

  }
  Car.prototype.getFullName = function(){ 
    return console.log(`${this.name} ${this.model}`);
  }
  Car.prototype.getAge = function(){
      let date = new Date();
      let yearActuel = date.getFullYear();
      return console.log(`Данная машина с ${yearActuel - this.year} года`);
    }
  Car.prototype.changeColor = function(newColor = this.color){ 
      if (this.color != newColor){
          return console.log(`Авто уже покрашено в ${this.color} цвет`)
      }else{
          return console.log(`Цвет стал ${newColor}`);
      };
    };
    Car.prototype.calculateWay = function(kilometers, fuel){
     if (this.fuel < 10){
         console.log('Меньше 10')
     }else{
         
     };
     return this.kilometers / this.maxSpeed;
   
    }
    function BMW (name, model, panoramicRoof){
        Car.call(this, name, model);
        this.panoramicRoof = panoramicRoof;
    }
    BMW.prototype = Object.create(Car.prototype);
    BMW.prototype.constructor = BMW;
    BMW.prototype.fastDriving = function (){
        console.log('Их-уууу')
    }
    const bmw = new BMW('BMW', 'E23', 'yes');
    
    
    function Lexus (name, model, climateСontrol){
        Car.call(this, name, model);
        this.climateСontrol = climateСontrol;
    }
    Lexus.prototype = Object.create(Car.prototype);
    Lexus.prototype.constructor = Lexus;
    Lexus.prototype.veryСool = function (){
        console.log('Еееее')
    }
    
    const lexus = new Lexus('Lexus', 'UX', 'yes');
    
        function Zhiguli (name, model, windowLifter){
        Car.call(this, name, model);
        this.windowLifter = windowLifter;
    }
    Zhiguli.prototype = Object.create(Car.prototype);
    Zhiguli.prototype.constructor = Zhiguli;
    Zhiguli.prototype.sometimesWork = function (){
        console.log(':(')
    }
    const zhiguli = new Zhiguli('Zhiguli', 'ВАЗ-2103', 'yes');
