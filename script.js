function bookTicket(eventName) {
    document.getElementById("booking-form").style.display = "block";
    document.getElementById("event-name").value = eventName;
}

function submitBooking(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let eventName = document.getElementById("event-name").value;
    let quantity = document.getElementById("quantity").value;

    alert(`Thank you, ${name}! Your ${quantity} tickets for ${eventName} are booked.`);
    
    // Reset form
    document.getElementById("booking-form").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    // Show cancellation form when "Cancellation" is clicked
    document.querySelector('a[href="#canceltickets"]').addEventListener("click", function () {
        document.getElementById("canceltickets").style.display = "block";
    });
});

function cancelTicket(event) {
    event.preventDefault();
    let name = document.getElementById("cancel-name").value;
    let eventName = document.getElementById("cancel-event").value;
    let quantity = document.getElementById("cancel-quantity").value;

    if (name && eventName && quantity > 0) {
        alert(`Your ticket(s) for ${eventName} have been successfully canceled.`);
        document.getElementById("canceltickets").reset(); // Clear the form
        document.getElementById("canceltickets").style.display = "none"; // Hide the section
    } else {
        alert("Please enter valid details.");
    }
}

function bookTicket(eventName) {
    document.getElementById("event-name").value = eventName;
    document.getElementById("booking-form").style.display = "block";
}

function submitBooking(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value;
    let eventName = document.getElementById("event-name").value;
    let ticketQuantity = document.getElementById("quantity").value;

    if (userName && eventName && ticketQuantity) {
        let acknowledgmentText = 
            `E-Ticket Acknowledgment\n\n` +
            `Name: ${userName}\n` +
            `Event: ${eventName}\n` +
            `Tickets: ${ticketQuantity}\n` +
            `Date: ${new Date().toLocaleString()}\n\n` +
            `Thank you for booking with us!`;

       
        localStorage.setItem("acknowledgment", acknowledgmentText);

        
        document.getElementById("download-ack").style.display = "block";
        
        alert("Booking successful! Click on 'Acknowledgement' to view details.");
    } else {
        alert("Please fill all the details!");
    }
}

function bookTicket(eventName) {
    document.getElementById("event-name").value = eventName;
    document.getElementById("booking-form").style.display = "block";
}

function submitBooking(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let eventName = document.getElementById("event-name").value;
    let quantity = document.getElementById("quantity").value;

    if (!name || !eventName || !quantity) {
        alert("Please fill all fields!");
        return false;
    }

    let acknowledgmentText = `Booking Successful!\n\nName: ${name}\nEvent: ${eventName}\nTickets: ${quantity}\nDate: ${new Date().toLocaleDateString()}`;

    document.getElementById("acknowledgment-text").innerText = acknowledgmentText;
    document.getElementById("acknowledgment").style.display = "block";
    document.getElementById("download-ack").style.display = "inline-block";

    alert("Booking Confirmed!");
    return false;
}

function downloadAcknowledgment() {
    let text = document.getElementById("acknowledgment-text").innerText;
    let blob = new Blob([text], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Booking_Acknowledgment.txt";
    a.click();
}
document.addEventListener("DOMContentLoaded", function () {
    // Get the payment section and the navigation link
    const paymentSection = document.getElementById("payment");
    const paymentNavLink = document.querySelector("a[href='#Payment']");

    // Add event listener to the payment link
    paymentNavLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Hide all other sections
        document.querySelectorAll("main section").forEach(section => {
            section.style.display = "none";
        });

        // Show the payment section
        paymentSection.style.display = "block";
    });
});

function processPayment(event) {
    event.preventDefault();
    alert('Payment Successfull...');

}
