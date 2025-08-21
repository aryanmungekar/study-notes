// assets/js/auth.js

// Initialize Supabase client globally
const supabase = window.supabase.createClient(
  "https://lkhrfezubnpdzyduoglu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY"
);

// Redirect if already logged in (used on login page)
async function redirectIfLoggedIn(path = "/account") {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    window.location.href = path;
  }
}

// Handle Google login
async function loginWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/account",
    },
  });
  if (error) {
    alert("Login failed: " + error.message);
  }
}

// Load user info (used on account page)
async function loadUserInfo(containerId = "account-info") {
  const { data: { session } } = await supabase.auth.getSession();
  const container = document.getElementById(containerId);

  if (!session) {
    container.innerHTML = `
      <p>You are not logged in. <a href="/login">Login here</a></p>
    `;
    return;
  }

  const user = session.user;
  container.innerHTML = `
    <img src="${user.user_metadata.avatar_url}" width="80" height="80" style="border-radius:50%;"><br><br>
    <strong>Name:</strong> ${user.user_metadata.full_name}<br>
    <strong>Email:</strong> ${user.email}<br><br>
    <button onclick="logout()" style="
      background:#e74c3c; color:white; border:none; padding:10px 20px;
      border-radius:6px; cursor:pointer;">Logout</button>
  `;
}

// Logout function
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "/login";
}

// Show user logo in home page (if logged in)
async function showAccountLogo(containerId = "home-account-logo") {
  const { data: { session } } = await supabase.auth.getSession();
  const container = document.getElementById(containerId);

  if (!container) return; // in case element not present

  if (!session) {
    // If not logged in, show login button
    container.innerHTML = `
      <a href="/login" style="text-decoration:none; color:#333;">
        Login
      </a>
    `;
    return;
  }

  const user = session.user;
  container.innerHTML = `
    <a href="/account" title="Go to Account">
      <img src="${user.user_metadata.avatar_url}" 
           width="40" height="40" 
           style="border-radius:50%; vertical-align:middle; cursor:pointer;">
    </a>
  `;
}
