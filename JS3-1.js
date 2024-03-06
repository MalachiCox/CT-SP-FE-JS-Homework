//! Content: Async/Await

//? Reading: EJS 11 (Just skim it, this is actually not a 
//? very clearly written chapter)

// HW:

// For Section 4, please continue with the assignments at the GitHub homework link for JS 4. 

//Remember to submit your finished work here via a GitHub link.

// The assignment for today is to create a parking garage class. 
// Parking Garage

// Your parking garage class should have the following methods:
// - takeTicket
// --- This should decrease the amount of tickets available by 1
// --- This should decrease the amount of parkingSpaces available by 1
// - payForParking
// --- Display a prompt() that waits for an amount from the user and store it in a variable/binding
// --- If the payment variable is not empty then (meaning the ticket has been paid) then display a message 
//     to the user that their ticket has been paid and they have 15mins to leave
// --- This should update the "currentTicket" object key "paid" to True
// -leaveGarage
// --- If the ticket has been paid, display a message of "Thank You, have a nice day"
// --- If the ticket has not been paid, display an input prompt for payment (You will need to use the prompt() method: see attached link)
// --- Once paid, display message "Thank you, have a nice day!"
// --- Update parkingSpaces list to increase by 1 (meaning add to the parkingSpaces list)
// --- Update tickets list to increase by 1 (meaning add to the tickets list)

// You will need a few attributes as well (Please be sure to use these data types):
// - tickets -> list
// - parkingSpaces -> list
// - currentTicket -> object

// By the end of this project each student should be able to:
// - Explain and/or demonstrate creating classes
// - Explain and/or demonstrate creating class methods
// - Explain and/or demonstrate class instantiation


// When the project is completed, commit the final changes and submit your GitHub link.

// If you want to run it in your console, feel free, but if you want to run it in VS Code, 
// feel free to use the `node filename.js` command in your terminal to execute your JS file. 

let tickets = ['ticket1', 'ticket2', 'ticket3', 'ticket4', 'ticket5', 'ticket6', 'ticket7', 'ticket8'];
let parkingSpaces = ['space1', 'space2', 'space3', 'space4', 'space5', 'space6', 'space7', 'space8']
let currentTicket = [];
let currentParking = [];


class parkingGarage {
    // Setup
    constructor(tickets, parkingSpaces, currentTicket) {
        this.tickets = tickets;
        this.parkingSpaces = parkingSpaces;
        this.currentTicket = {
            paid: false
        };
    }
    
    printInfo() {
        console.log(`Tickets left: ${this.tickets}
         \nParking Spaces left: ${this.parkingSpaces}`);
    };

    takeTicket() {
        let ticketTaken = true;
        if (ticketTaken == true) {
            let takenTicket =tickets.pop();
            let takenParking = parkingSpaces.pop();
            currentTicket.push(takenTicket);
            currentParking.push(takenParking);
            let currentCar = [currentTicket, currentParking];
            console.log(`Tickets left: ${tickets}
            \nParking Spaces left: ${parkingSpaces}`);
            return currentCar;
        };
    };

    payForParking() {
        let payment = prompt('Please insert $5 for parking: ');
        if (payment == 5) {
            alert('The ticket has been paid, you have 15 minutes!');
            return this.currentTicket = {paid: true};
        } else {
            return this.currentTicket = {paid: false};
        };
    };

    leaveGarage() {
        let paid = this.currentTicket;
        if (paid.paid) {
            alert('Thank you, have a nice day!');
            let takenTicket = currentTicket.pop();
            let takenParking = currentParking.pop();
            tickets.push(takenTicket);
            parkingSpaces.push(takenParking);
            console.log(`Tickets left: ${tickets}
            \nParking Spaces left: ${parkingSpaces}`);
        } 
        else {
            let payment = prompt('Please insert $5: ');
            if (payment == 5) {
                alert('Thank you, have a nice day!');
                let takenTicket = currentTicket.pop();
                let takenParking = currentParking.pop();
                tickets.push(takenTicket);
                parkingSpaces.push(takenParking);
                console.log(`Tickets left: ${tickets}
                \nParking Spaces left: ${parkingSpaces}`);
            } else {
                alert('Still need to pay');
            };
        };
    };
}

let car1 = new parkingGarage();
let car2 = new parkingGarage();

console.log(car1.takeTicket());
// console.log(car1.payForParking())

// console.log(car2.takeTicket());
// console.log(car2.payForParking());