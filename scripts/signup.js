document.getElementById('signupForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create an object to send in the POST request
  const userData = {
    email: email,
    password: password,
  };

  try {
    // Send the data to the backend using fetch
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (response.ok) {
      // If the backend successfully processes the signup, redirect to login page
      window.location.href = '/login'; 
    } else {
      // Handle errors returned from the backend (e.g., invalid data)
      alert(result.message || 'Signup failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error with the signup process');
  }
});
