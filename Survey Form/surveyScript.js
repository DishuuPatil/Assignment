function submitForm() {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate the form
    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
        alert("Please fill in all required fields.");
        return;
    }

    // Prepare data for display
    let genderValues = [];
    for (const g of gender) {
        genderValues.push(g.value);
    }
    const formData = {
        "First Name": firstName,
        "Last Name": lastName,
        "Date of Birth": dob,
        "Country": country,
        "Gender": genderValues.join(", "),
        "Profession": profession,
        "Email": email,
        "Mobile Number": mobile
    };

    // Display data in the popup
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = "";
    for (const key in formData) {
        popupContent.innerHTML += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
    }

    // Show the popup
    document.getElementById("popup").style.display = "block";
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}