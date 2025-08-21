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

<script>
  // Redirect logged-in users to account page
  redirectIfLoggedIn("/account");

  document.getElementById("google-login").addEventListener("click", () => {
    loginWithGoogle();
  });
</script>
