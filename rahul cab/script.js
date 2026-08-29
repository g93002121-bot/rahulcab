// =========================================================
// NAINITAL RIDE - JAVASCRIPT
// WhatsApp number: Rahul Kumar - 8802662610
// =========================================================

const WHATSAPP_NUMBER = "918802662610";
const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Normal WhatsApp buttons
document.querySelectorAll(".whatsapp-link").forEach((button) => {
  const message = "Hello Rahul Kumar! I want to book a ride with Nainital Ride.";
  button.href = `${whatsappURL}?text=${encodeURIComponent(message)}`;
  button.target = "_blank";
});

// Booking form
document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const vehicle = document.getElementById("vehicleType").value;
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("travelDate").value;

  const message =
`🚕 NEW BOOKING REQUEST

👤 Name: ${name}
📞 Phone: ${phone}
🚗 Vehicle: ${vehicle}
📍 Pickup: ${pickup}
🏁 Destination: ${destination}
📅 Date: ${date}

Sent from Nainital Ride Website`;

  window.open(
    `${whatsappURL}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
});

// Scroll to top button
const scrollTopButton = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopButton.style.display =
    window.scrollY > 400 ? "block" : "none";
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
