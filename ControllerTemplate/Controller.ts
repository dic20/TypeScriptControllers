class Controller {
    // should be game specific controllers, but this will be a simple template to use
    constructor(tapFunction:Function, doubleTapFunctin:Function, swipeRFunction:Function, swipeLFunction:Function, swipeUFunction:Function, swipeDFunction:Function, touchStart:Function, touchMove:Function) {

    }

    // force screen to be in the orientation described by the string parameter
    private forceScreenOrientation = (orientation:string) => {

    }

    // called to clear the canvas after something is drawn or needs to be cleared
    private resetCanvas = (e) => {

    }

    // draws the joystick
    private drawJoyStick = () => {

    }

    // draws the main action pad
    private drawActionPad = () => {

    }

    // Returns an object with xdir and ydir that has the direction between
    // -1 and 1 in each position
    public getAnalogueDirection = ():any => {
        
    }

    // Returns an object with xdir and ydir that has either -1, 1, or 0 for
    // each value
    public getDigDirection = ():any => {

    }

    private dPadObject = (SelectedCanvas, startTouch, moveTouch, endTouch):void => {

    }

    private touchObject = (SelectedCanvas, tapFunction, doubleTapFunction, swipeRFunction, swipeLFunction, swipeUFunction, swipeDFunction):void => {

    }

    // the parameter is the id of the canvas object you want to setup from the html document
    // returns the canvas object setup
    private setupCanvas = (canvasID:string):any => {

    }
}