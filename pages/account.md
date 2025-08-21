---
layout: default
title: Account
---

# My Account

<div id="account-info" style="text-align:center; margin-top:30px;">
  <p>Loading your account...</p>
</div>

<div style="text-align:center; margin-top:20px;">
  <button id="logout-btn" style="
      background: #e63946;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  ">
    Logout
  </button>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const { createClient } = window.supabase;
const client = createClient(
  "https://lkhrfezubnpdzyduoglu.supabase.co",
  "YOUR_ANON_KEY"
);

// Check session on page load
client.auth.getSession().then(({ data: { session } }) => {
  const container = document.getElementById("account-info");

  if (!session) {
    container.innerHTML = "<p>You are not logged in. <a href='/pages/login/'>Login here</a></p>";
    document.getElementById("logout-btn").style.display = "none";
    return;
  }

  const user = session.user;

  // Extract Google metadata
  const name = user.user_metadata.full_name || "No name";
  const email = user.email;
  const avatar = user.user_metadata.avatar_url || "https://via.placeholder.com/100";

  container.innerHTML = `
    <img src="${avatar}" alt="Profile Picture" width="100" height="100" style="border-radius:50%; margin-bottom:10px;">
    <h2>${name}</h2>
    <p>${email}</p>
  `;
});

// Logout
document.getElementById("logout-btn").addEventListener("click", async () => {
  await client.auth.signOut();
  window.location.href = "/"; // redirect to homepage
});
</script>
