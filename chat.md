---
layout: default
title: Home
---

<style>
  html, body {
    height: 100%;
    margin: 0;
  }

  #chat-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full viewport height */
  }

  #tlkio {
    flex: 1; /* Take remaining space */
    width: 100%;
  }
</style>

<div id="tlkio" data-channel="PUNEKARS" data-theme="theme--minimal" style="width:100%;"></div><script async src="https://tlk.io/embed.js" type="text/javascript"></script>