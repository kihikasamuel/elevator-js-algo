This project includes four classes
    (i). Column class - to create the different lifts, has a method that dispatches requests in the que;
    (ii). Elevator class that defines the elevator properties and moveELevator() method.
    (iii). FloorBtn class that defines the request buttons on a given floor
    (iv). CallBtn that defines the properties of the elevator request buttons

You will need to call the requestELevator() method of the Column class that takes 2 arguments request-floor(an integer from -1 to 10) and direction(a string say up or down) in that order. Like this:
        requestElevator(2, "up") -- Elevator requested from floor 2 and the passenger should move up.