/**
 * Variables
 */
const signupButton = document.getElementById('signup-button');
const loginButton = document.getElementById('login-button');
const userForms = document.getElementById('user_options-forms');

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
  }, false)
  
  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
  }, false)

/**
 * Simulated successful login and redirect to homeDashboard
 */
function login() {
  // Perform authentication (replace with your actual authentication logic)
  const exampleEmail = "example@gmail.com";
  const examplePassword = "password";
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  
  if (emailInput.value === exampleEmail && passwordInput.value === examplePassword) {
    // Alert for successful login
    alert("Login successful!");
    // Redirect to homeDashboard after successful login
    window.location.href = "homeDashboard.html";
  } else {
    // Alert for invalid credentials
    alert("Invalid email or password");
  }
}

/**
 * Simulated successful signup and redirect to homeDashboard
 */
/**
 * Simulated signup with alert for success or failure
 */
function signup() {
    // Perform signup logic (replace with your actual signup logic)
    const exampleName = "Rafiq";
    const exampleEmail = "rafiq@gmail.com";
    const examplePassword = "password";
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    
    if (nameInput.value !== "" && emailInput.value === exampleEmail && passwordInput.value === examplePassword) {
      // Alert for successful signup
      alert(`Signup successful for ${exampleName}!`);
      // Redirect to homeDashboard after successful signup
      window.location.href = "homeDashboard.html";
    } else {
      // Alert for invalid signup attempt
      alert("Signup failed. Please check your details.");
    }
  }
  
