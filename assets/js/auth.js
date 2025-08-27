// Initialize Supabase client globally
const supabase = window.supabase.createClient(
  "https://lkhrfezubnpdzyduoglu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY"
);

// Redirect if already logged in (used on login page)
async function redirectIfLoggedIn(path = "/account/") {
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
      redirectTo: window.location.origin + "/account/",
    },
  });
  if (error) {
    alert("Login failed: " + error.message);
  }
}

// Load user info (used on account page)
async function loadUserInfo(containerId = "account-info") {
  const { data: { user } } = await supabase.auth.getUser();
  const container = document.getElementById(containerId);

  if (!container) return; // prevent errors if div not found

  if (!user) {
    container.innerHTML = `
      <p>You are not logged in. <a href="/login/">Login here</a></p>
    `;
    return;
  }

  // If logged in, show account info
  const avatar = user.user_metadata?.avatar_url || "https://via.placeholder.com/100";
const name = user.user_metadata?.full_name || user.user_metadata?.name || "No Name";

container.innerHTML = `
  <img src="${avatar}" alt="Profile" 
       style="width:100px; height:100px; border-radius:50%;"><br><br>
  <strong>Name:</strong> ${name}<br>
  <strong>Email:</strong> ${user.email}<br>
  <button id="logout-btn" style="margin-top:20px;">Logout</button>
`;


  // Attach logout event
  document.getElementById("logout-btn").addEventListener("click", async () => {
    await supabase.auth.signOut();
    window.location.href = "/login/";
  });
}

// Show user logo in home page (if logged in)
async function showAccountLogo(containerId = "home-account-logo") {
  const { data: { user } } = await supabase.auth.getUser();
  const container = document.getElementById(containerId);

  if (!container) return;

 if (!user) {
  container.style.display = "none"; // hide the account logo div
  return;
}


  const avatarUrl = user.user_metadata?.avatar_url || "https://via.placeholder.com/40";

  container.innerHTML = `
    <a href="/account/" title="Go to Account">
      <img src="${avatarUrl}" 
           width="40" height="40" 
           style="border-radius:50%; vertical-align:middle; cursor:pointer;">
    </a>
  `;
  container.style.display = "grid"; // ensures the div is visible

}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showAccountLogo();
});

// Update on auth change
supabase.auth.onAuthStateChange(() => {
  showAccountLogo();
});
