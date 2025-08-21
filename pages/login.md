---
layout: default
title: Login
---

# Login with Google

<div class="login-container" style="text-align:center; margin-top:50px;">
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
// 🔹 Replace these with your Supabase project details
const SUPABASE_URL = "https://lkhrfezubnpdzyduoglu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Google Login
document.getElementById("google-login").addEventListener("click", async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + '/dashboard/', // after login
    },
  });
  if (error) {
    alert("Login failed: " + error.message);
  }
});
</script>
