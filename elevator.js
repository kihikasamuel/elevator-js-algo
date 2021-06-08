class Column {
    constructor(floor_count, elevator_count) {
        this.floor_count = floor_count;
        this.elevator_count = elevator_count;
        this.elevator_list = [];
        this.call_Btn_list = [];
        this.request_list = [];
        this.floor_btn_list = [];

        //request from a given floor
        console.log();

        for(var i = 1; i < floor_count; i++) {
            this.floor_btn_list.push(new FloorBtn(i, "off", 1));
        }
        console.table(this.floor_btn_list);

        while(i <= elevator_count) {
            let elevator = new Elevator(i, 1, "none", "idle");
            this.elevator_list.push(elevator);
            i += 1;
        }
        console.log("Elevator Position");
        console.table(this.elevator_list);

        console.log("Button List");

        // list btns
        for(var i = 1; i <= this.floor_count; i++) {
            if(i === 1) {
                this.call_Btn_list.push(new CallBtn("up", "off", i-1));
            }
            if(i === 10) {
                this.call_Btn_list.push(new CallBtn("down", "off", 10));
            }
            else {
                this.call_Btn_list.push(new CallBtn("up", "off", 1));
                this.call_Btn_list.push(new CallBtn("down", "off", 1));
            }
        }
        console.table(this.call_Btn_list);

        // find best elevator
        console.log("Finding Best Elevator");
    }

    requestElevator(requestFloor, direction) {
        let best_case = null;
        let distance = 0;
        let minDistance = 11;

        for(var i = 0; i < this.elevator_list.length; i++) {

            // moving same direction
            if(direction === "up" && this.elevator_list[i].direction === "up" && this.elevator_list[i].currentFloor <= requestFloor) {
                // moving up same direction
                distance = Math.abs(this.elevator_list[i].currentFloor - requestFloor);

                if(distance < minDistance) {
                    minDistance = distance;
                    best_case = this.elevator_list[i];
                }
            }
            else if(direction === "down" && this.elevator_list[i].direction === "down" && this.elevator_list[i].currentFloor >= requestFloor) {
                // moving down same direction
                distance = Math.abs(this.elevator_list[i].currentFloor - requestFloor);
                if(distance < best_case) {
                    minDistance = distance;
                    best_case = this.elevator_list[i]
                }
            }
        }

        if(best_case != null) {
            console.log("Best Elevator Dispatch case  found on Elevator");
            console.log(best_case);
        }
        else{
            for(var j = 0; j < this.elevator_list.length; j++) {
                if(this.elevator_list[j].direction === "none") {
                    distance = Math.abs(this.elevator_list[j].currentFloor - requestFloor);
                    if(distance < minDistance) {
                        minDistance = distance;
                        best_case = this.elevator_list[j];
                    }
                }
            }
            if(best_case != null) {
                console.log("The best elevator case found");
                console.log(best_case);
            }
        }
        
        best_case.moveElevator(requestFloor); //move to requested floor
        best_case.currentFloor = requestFloor;
        return best_case;
    }


    requestFloor(Elevator, requestFloor) {
        columntest1.elevator_list[Elevator].moveElevator(requestFloor);
        console.log(`Floor Selected ${requestFloor} \n Opening Doors...\n Clossing Doors...`);
    }
}

class Elevator {
    constructor(elevatorId, currentFloor, direction, currentStatus) {
        this.elevatorId = elevatorId;
        this.currentFloor = currentFloor;
        this.direction = direction;
        this.currentStatus = currentStatus;
    }

    moveElevator(targetFloor) {
        console.log(`Moving ${this.direction} to floor ${targetFloor}`)
        this.currentFloor = targetFloor;
    }
}

class CallBtn {
    constructor(direction, status, floor) {
        this.direction = direction;
        this.status = status;
        this.floor = floor;
    }
}

class FloorBtn {
    constructor(flr, status, position) {
        this.flr = flr;
        this.status = status;
        this.position = position;
    }
}

const lift = new Column(10, 2);
console.log(column1.requestElevator(2, 7));