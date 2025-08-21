---
layout: default
title: Account
permalink: /account/
---

# Account Information

<div id="account-info" style="text-align:center; margin-top:50px;">
  <p>Loading account details...</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const { createClient } = window.supabase;
const client = createClient(
  "https://lkhrfezubnpdzyduoglu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraHJmZXp1Ym5wZHp5ZHVvZ2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3NzQ3NTYsImV4cCI6MjA3MTM1MDc1Nn0.CmXHYzLAP370bjXa9mjSa-O7uH4sx3ADl7djAvQSWOY"
);

async function loadUser() {
  const { data: { session } } = await client.auth.getSession();

  if (!session) {
    document.getElementById("account-info").innerHTML = `
      <p>You are not logged in. <a href="/login">Login here</a></p>
    `;
    return;
  }

  const user = session.user;
  document.getElementById("account-info").innerHTML = `
    <img src="${user.user_metadata.avatar_url}" width="80" height="80" style="border-radius:50%;"><br><br>
    <strong>Name:</strong> ${user.user_metadata.full_name}<br>
    <strong>Email:</strong> ${user.email}<br><br>
    <button onclick="logout()" style="
      background:#e74c3c; color:white; border:none; padding:10px 20px;
      border-radius:6px; cursor:pointer;">Logout</button>
  `;
}

async function logout() {
  await client.auth.signOut();
  window.location.href = "/login";
}

loadUser();
</script>
