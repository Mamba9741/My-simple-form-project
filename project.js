
  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("first name").value.trim();
    const lastName = document.getElementById("last name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const country = document.querySelector("select[name='se']").value;

    // Simple validation
    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!genderMale && !genderFemale) {
      alert("Please select your gender.");
      return;
    }

    if (!country) {
      alert("Please select a country.");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");

    // Redirect manually (optional, since you used action="box.html")
    window.location.href = "box.html";
  });

