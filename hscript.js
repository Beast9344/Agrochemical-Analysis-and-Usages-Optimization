document.getElementById('logoutBtn').addEventListener('click', function() {
  // Here you can implement the logic to logout the user
  // For example, you might want to clear any stored authentication tokens, redirect to the login page, etc.
  alert('Logged out successfully!');
  // For demonstration purposes, let's redirect to the login page
  window.location.href = 'Loginpage.html';
});

  
  // Button click event listeners for other functionality
  document.getElementById('optimizationBtn').addEventListener('click', () => {
    console.log('Optimization Strategies button clicked');
    // Implement the logic for the Optimization Strategies button
  });

  document.getElementById('historicalDataBtn').addEventListener('click', () => {
    console.log('Historical Data button clicked');
    // Implement the logic for the Historical Data button
  });

  document.getElementById('soilDataBtn').addEventListener('click', () => {
    console.log('Soil Data button clicked');
    // Implement the logic for the Soil Data button
  });

  document.getElementById('weatherDataBtn').addEventListener('click', () => {
    console.log('Weather Data button clicked');
    // Implement the logic for the Weather Data button
  });

  document.getElementById('locationsBtn').addEventListener('click', () => {
    console.log('Locations button clicked');
    // Implement the logic for the Locations button
  });

  document.getElementById('environmentalImpactsBtn').addEventListener('click', () => {
    console.log('Environmental Impacts button clicked');
    // Implement the logic for the Environmental Impacts button
  });

  document.getElementById('agrichemicalsBtn').addEventListener('click', () => {
    console.log('Agrochemicals button clicked');
    // Implement the logic for the Agrochemicals button
  });

  document.getElementById('cropsBtn').addEventListener('click', () => {
    console.log('Crops button clicked');
    // Implement the logic for the Crops button
  });

  document.getElementById('usersBtn').addEventListener('click', () => {
    console.log('Users button clicked');
    alert('Users button clicked!');
});
