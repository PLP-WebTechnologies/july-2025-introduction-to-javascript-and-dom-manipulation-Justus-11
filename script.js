// ==================
// Part 1: Basics
// ==================
let ageInput = document.getElementById("ageInput");
let checkAgeBtn = document.getElementById("checkAgeBtn");
let ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", function() {
  let age = parseInt(ageInput.value);

  if (age >= 18) {
    ageResult.textContent = "You are an adult ✅";
  } else {
    ageResult.textContent = "You are a minor ❌";
  }
});

// ==================
// Part 2: Functions
// ==================
// Function to calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to format text
function formatMessage(message) {
  return `*** ${message.toUpperCase()} ***`;
}

let totalBtn = document.getElementById("totalBtn");
let totalResult = document.getElementById("totalResult");

totalBtn.addEventListener("click", function() {
  let total = calculateTotal(50, 3); // Example values
  totalResult.textContent = formatMessage("Total: $" + total);
});

// ==================
// Part 3: Loops
// ==================
// For loop example: listing numbers
let loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  loopList.appendChild(li);
}

// While loop example: countdown
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ==================
// Part 4: DOM Interaction
// ==================
let toggleBtn = document.getElementById("toggleBtn");
let toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", function() {
  toggleText.classList.toggle("highlight");
});
