---
layout: default
title: Login
permalink: /login/
---

# Login with Google

<div id="login-section" class="login-container" style="text-align:center; margin-top:50px;">
  <button id="google-login" style="
      background: #4285F4; 
      color: white; 
      border: none; 
      padding: 12px 24px; 
      font-size: 16px; 
      border-radius: 6px; 
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  ">
    <img src="https://www.svgrepo.com/show/355037/google.svg" width="20" height="20" alt="Google Logo"/>
    Continue with Google
  </button>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const { createClient } = window.supabase;

// ✅ Initialize Supabase
const client = createClient(
  "https://lkhrfezubnpdzyduoglu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY"
);

// ✅ Redirect if already logged in
(async () => {
  const { data: { session } } = await client.auth.getSession();
  if (session) {
    window.location.href = "/account"; // redirect logged-in users
  }
})();

// ✅ Google Login
document.getElementById("google-login").addEventListener("click", async () => {
  const { error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/account", // after login → account page
    },
  });
  if (error) {
    alert("Login failed: " + error.message);
  }
});
</script>
