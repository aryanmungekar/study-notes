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

<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

  const supabaseUrl = 'ee9cfc93-71c9-41e0-a30c-20662ea9937f';
  const supabaseAnonKey = 'Yweb.onesignal.auto.204803f7-478b-4564-9a97-0318e873c676';
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const profileForm = document.getElementById('profile-form');

  // Function to load the user's existing profile data
  async function loadProfile() {
    const { data: { user } } = await supabase.auth.getSession();
    if (!user) return;

    // Fetch the user's profile from the database
    const { data, error } = await supabase
      .from('user_info')
      .select('branch, year')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
      console.error('Error fetching profile:', error.message);
      return;
    }

    if (data) {
      // If a profile exists, pre-fill the form
      document.getElementById('branch').value = data.branch;
      document.getElementById('year').value = data.year;
    }
  }

  // Load profile data when the page loads
  loadProfile();

  profileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { data: { user } } = await supabase.auth.getSession();
    if (!user) {
      alert('Please log in to add your profile information.');
      return;
    }

    const branch = document.getElementById('branch').value;
    const year = document.getElementById('year').value;

    try {
      // Check if a profile already exists
      const { data: existingProfile } = await supabase
        .from('user_info')
        .select('user_id')
        .eq('user_id', user.id)
        .single();

      if (existingProfile) {
        // If profile exists, UPDATE it
        const { error } = await supabase
          .from('user_info')
          .update({ branch: branch, year: year })
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        // If no profile exists, INSERT a new one
        const { error } = await supabase
          .from('user_info')
          .insert({ user_id: user.id, branch: branch, year: year });

        if (error) throw error;
      }

      alert('Profile information saved successfully!');
    } catch (error) {
      console.error('Error saving profile:', error.message);
      alert('Failed to save profile. Please try again.');
    }
  });
</script>