---
layout: default
title: Account
permalink: /account/
---

# Account Information

<div id="account-info" style="text-align:center; margin-top:50px;">
  <p>Loading account details...</p>

  <form id="profile-form">
  <h2>Add Your Information</h2>
  <label for="branch">Branch:</label>
  <input type="text" id="branch" name="branch" required>
  <br><br>
  <label for="year">Year:</label>
  <input type="number" id="year" name="year" required>
  <br><br>
  <button type="submit">Save My Profile</button>
</form>
</div>

<script>
  loadUserInfo("account-info");
</script>

