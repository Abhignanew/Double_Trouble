// Function to handle clicking on the home button
function goToHomePage() {
    // Redirect to the home page
    window.location.href = "homepage.html"; // Replace "index.html" with the actual URL of your home page
}

// Add event listener to the home button
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("home-button");
    homeButton.addEventListener("click", goToHomePage);
});