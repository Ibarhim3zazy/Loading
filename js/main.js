document.querySelector('.loader').addEventListener("load", kindness());

function kindness() {
  setTimeout(function () {
    window.location.href = 'https://kindness.lovestoblog.com/';
  }, 5000);
}
