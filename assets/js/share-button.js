<script>
function toggleShareMenu() {
  const menu = document.getElementById("shareMenu");
  menu.classList.toggle("show");
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    alert("Link copied to clipboard!");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const url = encodeURIComponent(window.location.href);
  document.getElementById("share-whatsapp").href = `https://wa.me/?text=${url}`;
  document.getElementById("share-telegram").href = `https://t.me/share/url?url=${url}`;
  document.getElementById("share-facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?url=${url}`;
});
</script>
