class Elevator {
  constructor(){
    // current floor where the elevator is
    this.floor = 0;

    // top floor of the building (max value of "this.floor")
    this.MAXFLOOR = 10;

    // current direction that the elevator is moving in
    this.direction = 'up';

    // an array of numbers of the floors which the elevator must stop
    this.requests   = [];

    // array of person objects that represent people waiting to be picked up
    this.waitingList = [];

    // array of person objects that represent people on the elevator to be dropped off
    this.passengers = [];

    // time id for when the elevator is running
    this.running = 0;
  }

  start() {
    // begin a setInterval that calls "update()" every second
    this.running = setInterval(()=>{
      let nextFloor;
      if(this.requests.length > 0){
        nextFloor = this.requests.shift();
        if(this.floor > nextFloor)
          this.direction = 'down';
        else
          this.direction = 'up';
        this.floor = nextFloor;
        console.log(this.requests);
      }
      this.update();
      this._passengersLeave();
      this._passengersEnter();
    }, 1000);
  }

  stop() {
    // cancel the setInterval started by "start()"
    clearInterval(this.running);
  }
  update(){
    // (for now) will only call "log()"
    this.log();
  }
  log() {
    // display the current direction and current floorUp
    // Examples:
    // "Direction: down | Floor 3"
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
  _passengersEnter() {
    if(this.waitingList.length > 0){
      this.waitingList.forEach((person)=>{
        if(person.originFloor === this.floor){
          console.log(`${person.name} just entered the elevator.`);
          this.requests.push(person.destinationFloor);
          this.passengers.push(this.waitingList.shift());
        }
      });
    }
}

_passengersLeave() {
  if(this.passengers.length > 0){
    this.passengers.forEach((person)=>{
      if(person.destinationFloor === this.floor){
        console.log(`${person.name} just left the elevator.`);
        this.requests.push(person.destinationFloor);
        this.passengers.shift();
      }
    });
  }
}
  floorUp() {
    if(this.floor > 10){
      console.log("Elevator is at the top floor.");
      this.floor = 10;
    }
    else
    this.floor++;
  }
  floorDown() {
    if(this.floor < 0){
      console.log("Elevator is at the ground floor.");
      this.floor = 0;
    }
    else
    this.floor--;
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }
}

module.exports = Elevator;
