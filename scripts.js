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

    const passwordGroup = document.getElementById("passwordGroup");
    const confirmPasswordGroup = document.getElementById("confirmPasswordGroup");
    const passwordError = passwordGroup.querySelector(".error-message");

    if (document.getElementById("password").value !== document.getElementById("confirmPassword").value) {
        isValid = false;
        passwordError.textContent = "Passwords do not match";
    } else {
        passwordError.textContent = "";
    }
    
    if (isValid) {
        alert("Application submitted successfully!");
        this.submit();
    } else {
    }
    
    const inputFields = document.querySelectorAll("#applicationForm input, #applicationForm select, #applicationForm textarea");
    inputFields.forEach(input => {
        input.addEventListener("input", () => {
            input.parentElement.classList.remove("error");
            input.parentElement.querySelector(".error-message").textContent = "";
        });
    });
