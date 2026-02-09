// Career Object (University & Secondary)
const careerSuggestions = {
  university: {
    technology: ["Software Developer", "Web Developer", "Data Analyst"],
    business: ["Business Manager", "Entrepreneur", "Accountant"],
    health: ["Doctor", "Nurse", "Pharmacist"]
  },
  secondary: {
    technology: ["IT Support", "Computer Operator", "Data Entry Clerk"],
    business: ["Sales Assistant", "Shop Supervisor", "Office Assistant"],
    health: ["Health Assistant", "Clinic Receptionist", "Pharmacy Assistant"]
  }
};

// Event (called from button onclick)
function suggestCareer() {

  // DOM
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const education = document.getElementById("Education").value;
  const work = document.getElementById("work").value;
  const result = document.getElementById("result");

  // Validation
  if (name === "" || age === "" || education === "" || work === "") {
    result.innerHTML = "Please fill all fields.";
    result.className = "mt-5 bg-red-100 p-4 rounded-md text-red-700";
    return;
  }

  if (age < 16) {
    result.innerHTML = "You are too young.";
    result.className = "mt-5 bg-red-100 p-4 rounded-md text-red-700";
    return;
  }

  // Condition (if / else)
  let careersList = "";

  if (education === "university") {
    careersList = careerSuggestions.university[work].join(", ");
  } else if (education === "secondary") {
    careersList = careerSuggestions.secondary[work].join(", ");
  }

  // Output
  result.className = "mt-5 bg-green-50 p-4 rounded-md text-gray-800";
  result.innerHTML = `
    <strong>Hello ${name}!</strong><br>
    Suitable careers: <strong>${careersList}</strong>
  `;
}