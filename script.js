document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value.trim();
    
    let isValid = true;
    let errorMessage = '';

    // Name validation
    if (name === '') {
        isValid = false;
        errorMessage += 'Name is required.\n';
        document.getElementById('name').style.borderColor = '#ff6b6b'; // Red border for error
    } else {
        document.getElementById('name').style.borderColor = '#ccc'; // Reset border color
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Invalid email format.\n';
        document.getElementById('email').style.borderColor = '#ff6b6b'; // Red border for error
    } else {
        document.getElementById('email').style.borderColor = '#ccc'; // Reset border color
    }

    // Phone validation
    const phonePattern = /^\d{10}$/; // Pattern for exactly 10 digits
    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += 'Phone number must be exactly 10 digits long and contain only numbers.\n';
        document.getElementById('phone').style.borderColor = '#ff6b6b'; // Red border for error
    } else {
        document.getElementById('phone').style.borderColor = '#ccc'; // Reset border color
    }

    // Date and Time validation
    const currentDateTime = new Date();
    const bookingDateTime = new Date(`${date}T${time}`);
    if (bookingDateTime <= currentDateTime) {
        isValid = false;
        errorMessage += 'Booking date and time must be in the future.\n';
        document.getElementById('date').style.borderColor = '#ff6b6b'; // Red border for error
        document.getElementById('time').style.borderColor = '#ff6b6b'; // Red border for error
    } else {
        document.getElementById('date').style.borderColor = '#ccc'; // Reset border color
        document.getElementById('time').style.borderColor = '#ccc'; // Reset border color
    }

    // Guests validation
    if (guests < 1 || guests > 20) {
        isValid = false;
        errorMessage += 'Number of guests must be between 1 and 20.\n';
        document.getElementById('guests').style.borderColor = '#ff6b6b'; // Red border for error
    } else {
        document.getElementById('guests').style.borderColor = '#ccc'; // Reset border color
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Booking successful!';
        document.getElementById('successMessage').style.color = '#28a745'; // Success color
        document.getElementById('successMessage').style.display = 'block';
        // Optionally, submit the form or perform further actions
        // document.getElementById('bookingForm').submit(); // Uncomment if you want to submit the form
    } else {
        document.getElementById('successMessage').textContent = '';
        alert(errorMessage);
    }
});

// Restrict phone input to numbers only and validate on input
document.getElementById('phone').addEventListener('input', function() {
    // Allow only numeric input
    const originalValue = this.value;
    this.value = originalValue.replace(/[^0-9]/g, '');

    // Validate phone input
    const phone = this.value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        this.style.borderColor = '#ff6b6b'; // Red border for error
        document.getElementById('successMessage').textContent = '';
    } else {
        this.style.borderColor = '#ccc'; // Reset border color
    }
});
