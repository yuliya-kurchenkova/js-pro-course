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
    
  const cars = new Car('Honda', 'Accord', 25, 'red');