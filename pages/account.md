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
const SUPABASE_URL = "https://lkhrfezubnpdzyduoglu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 🔹 Function to load account info
async function loadAccount() {
  const { data: { session } } = await supabase.auth.getSession();
  const container = document.getElementById("account-info");

  if (!session) {
    container.innerHTML = "<p>You are not logged in. <a href='/login/'>Login here</a></p>";
    document.getElementById("logout-btn").style.display = "none";
    return;
  }

  const user = session.user;

  const name = user.user_metadata.full_name || "No name";
  const email = user.email;
  const avatar = user.user_metadata.avatar_url || "https://via.placeholder.com/100";

  container.innerHTML = `
    <img src="${avatar}" alt="Profile Picture" width="100" height="100" style="border-radius:50%; margin-bottom:10px;">
    <h2>${name}</h2>
    <p>${email}</p>
  `;
}

// 🔹 Load account info on page load
loadAccount();

// 🔹 Logout handler
document.getElementById("logout-btn").addEventListener("click", async () => {
  await supabase.auth.signOut();
  window.location.href = "/"; // back to home
});
</script>
