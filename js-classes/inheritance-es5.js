function Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption, kilometers, fuel){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = 60;
    this.fuelConsumption = 10;
    this.kilometers = kilometers; 
    this.fuel = fuel;
  }
  Car.prototype.getFullName = function(){ 
    return this.name + ',' + this.model;
  }
  Car.prototype.getAge = function(){ 
      return 2021 - this.year;
    }
  Car.prototype.changeColor = function(color){ 
      if (this.color === 'red'){
          console.log('Авто уже покрашено в красный цвет')
      }else{
          this.color === color;
          console.log(`Цвет стал ${this.color}`);
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