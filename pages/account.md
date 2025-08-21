---
layout: default
title: Account
permalink: /account/
---

<div id="account-info" style="text-align:center; margin-top:50px;">
  <h2>Your Profile Information</h2>
  <form id="profile-form">
    <label for="branch">Branch:</label>
    <input type="text" id="branch" name="branch" required>
    <br><br>
    <label for="year">Year:</label>
    <input type="number" id="year" name="year" required>
    <br><br>
    <button type="submit">Save My Profile</button>
  </form>
</div>

<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  const supabaseUrl = 'YOUR_SUPABASE_URL';
  const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const profileForm = document.getElementById('profile-form');

  // Function to load and pre-fill the form
  async function loadProfile() {
    const { data: { user } } = await supabase.auth.getSession();
    if (!user) {
      document.getElementById('account-info').innerHTML = "<p>Please log in to view your account details.</p>";
      return;
    }

    const { data, error } = await supabase
      .from('user_info')
      .select('branch, year')
      .eq('user_id', user.id)
      .single();

    if (data) {
      document.getElementById('branch').value = data.branch;
      document.getElementById('year').value = data.year;
    }
  }

  // Handle form submission
  profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getSession();
    const branch = document.getElementById('branch').value;
    const year = document.getElementById('year').value;

    // Check for an existing profile to decide between insert and update
    const { data: existingProfile } = await supabase
      .from('user_info')
      .select('user_id')
      .eq('user_id', user.id)
      .single();

    if (existingProfile) {
      const { error } = await supabase
        .from('user_info')
        .update({ branch, year })
        .eq('user_id', user.id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from('user_info')
        .insert({ user_id: user.id, branch, year });
      if (error) throw error;
    }

    alert('Profile information saved successfully!');
  });

  // Load the profile on page load
  loadProfile();
</script>