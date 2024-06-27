document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let isValid = true;
    let errorMessages = [];

    // Validation 
    if (!document.getElementById("fullName").value) {
        isValid = false;
        errorMessages.push("Full Name");
    }
    
   // Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(document.getElementById("email").value)) {
    isValid = false;
    errorMessages.push("Email Address (invalid format)");
}

// Date of Birth Validation
const dobInput = document.getElementById("dateOfBirth");
if (!dobInput.value) {
    isValid = false;
    errorMessages.push("Date of Birth");
} 

// Program Selection Validation
if (!document.getElementById("program").value) {
    isValid = false;
    errorMessages.push("Program Applying For");
}


    // Strong Password Validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(document.getElementById("password").value)) {
        isValid = false;
        errorMessages.push("Password (must meet requirements)");
    }

    //Password Match 

    if (isValid) {
        alert("Application submitted successfully!");
        this.submit(); 
    } else {
        alert("Please fill in the following fields correctly:\n" + errorMessages.join("\n"));
    }
});
