///<reference path = "references.ts" />

declare var ScaleDrone:any;
declare var key:string;
declare var error:any;
declare var uniqueRoom:string;
declare var getDigDirection:any;

var drone = new ScaleDrone(key);

drone.on('open', openDrone(error));

var controller = new Controller(tapFunction, doubleTapFunction, swipeRFunction, swipeLFunction, swipeUFunction, swipeDFunction, touchStart, touchMove);

function openDrone(error) {
    if(error) {
        return console.error(error);
    }
    var room = drone.subscribe(uniqueRoom);
    room.on('open', openRoom(error));
}

function openRoom(error) {
   if (error) {
      console.error(error);
    } else {
      console.log('Connected to room');
    }
}

function tapFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "tapFunction"}});
}

function doubleTapFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "doubleTapFunction"}});
}

function swipeRFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "swipeRFunction"}});
}

function swipeLFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "swipeLFunction"}});
}

function swipeDFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "swipeDFunction"}});
}

function swipeUFunction() {
    drone.publish({room: uniqueRoom, message: {"log" : "swipeUFunction"}});
}

var timer = 0;
function touchStart() {
    if (timer == 0) {
        console.log("here");
        var sendDig = getDigDirection();
        drone.publish({room: uniqueRoom, message: {"log" : sendDig}});
        timer = 5;
    } else {
        timer--;
    }
}

var counter = 0;
function touchMove() {
    if (counter == 0) {
        var sendAnalogue = getDigDirection();
        drone.publish({room: uniqueRoom, message: {"log" : sendAnalogue}});
        counter = 5;
    } else {
        counter--;
    }
}
