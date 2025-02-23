document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      // Store the token and userId in localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUserId", data.userId);
      window.location.href = "index.html"; // Redirect to dashboard
    } else {
      alert("Error: " + data.message);
    }
  });
