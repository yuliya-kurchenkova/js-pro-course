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
    Car.prototype.calculateWay = function(kilometers, fuel = this.fuelCapacity){
        let fuelForTravel = kilometers / this.fuelConsumption;
        let start;
     if (fuel < 10){
         console.log('Нужно заправиться');
         return start = false;
     }else if(fuel < fuelForTravel){
         fuelForTravel -= fuel;
         console.log(`Нужно будет заправить ${fuelForTravel} литра`);
         return start = false;
     }else if(start){
         let averageSpeed = 80;
         let travelTime = kilometers / averageSpeed;
         console.log(`Среднее время пути ${travelTime.toFixed()} часов`)
     };
    }
    function BMW (panoramicRoof, ...rest){
        this._super.apply(this, rest); // или this._super.call(this, ...rest)
        this.panoramicRoof = panoramicRoof;
    }
    BMW.prototype = Object.create(Car.prototype);
    BMW.prototype.constructor = BMW;
    BMW.prototype._super = Car;

    BMW.prototype.fastDriving = function (){
        console.log('Их-уууу')
    }

    const bmw = new BMW('BMW', 'E23', 'yes');
    
    
    function Lexus (climateСontrol, ...rest){
        this._super.apply(this, rest);
        this.climateСontrol = climateСontrol;
    }
    Lexus.prototype = Object.create(Car.prototype);
    Lexus.prototype.constructor = Lexus;
    BMW.prototype._super = Car;
    Lexus.prototype.veryСool = function (){
        console.log('Еееее')
    }
    
    const lexus = new Lexus('Lexus', 'UX', 'yes');
    
    function Zhiguli (windowLifter, ...rest){
        this._super.apply(this, rest);
        this.windowLifter = windowLifter;
    }
    Zhiguli.prototype = Object.create(Car.prototype);
    Zhiguli.prototype.constructor = Zhiguli;
    BMW.prototype._super = Car;

    Zhiguli.prototype.sometimesWork = function (){
        console.log(':(')
    }
    const zhiguli = new Zhiguli('Zhiguli', 'ВАЗ-2103', 'yes');
